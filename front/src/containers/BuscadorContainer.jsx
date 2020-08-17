import React from "react";
import Buscador from "../components/Buscador";
import Movies from "../components/Movies";
import { connect } from "react-redux";
import { buscarMovies , buscarMovie } from "../redux/actions/movies";

class BuscadorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: "",
      error: "",
   
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.state.peliculas ? this.props.buscarMovies() : null;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.peliculas) {
      return this.setState({ error: "Por favor escribe una Pelicula !!" });
    }
    this.props.buscarMovies(this.state.peliculas) 
    this.setState({error: '',  peliculas:''})
  }

  handleChange(e) {
    const movie = e.target.value;
    this.setState({ peliculas: movie});
  }

  render() {
    return (
      <div>
        <Buscador
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.peliculas}
          error={this.state.error}
          nameMovie={this.state.nameMovie}

  
        />
        <Movies movies={this.props.allFilms} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    allFilms: state.movies.movies,
  };
};

const mapDispachToProps = (dispatch) => {
 
  return {
    buscarMovies: (pelis) => dispatch(buscarMovies(pelis)),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(BuscadorContainer);
