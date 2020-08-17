import React from "react";
import { buscarMovie } from "../redux/actions/movies";
import { addFav , allFavs} from "../redux/actions/favoritos";
import Movie from "../components/SingleMovie";
import { connect } from "react-redux";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickFav = this.handleClickFav.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
  }

  componentDidMount() {
    this.props.buscarMovie();
    this.props.addFav();
  }


  componentDidUpdate() {
    this.props.allFavs()
  }

  handleClickFav(Title, Poster) {
    this.props.addFav(Title, Poster, this.props.user);
   
    
  }

  handleClickAll(){
     
    this.props.allFavs(this.props.user)
    return this.props.history.push('/favoritos')
  }


  render() {
    return (
      <Movie
        movies={this.props.selecMovie}
        handleClickAll={this.handleClickAll}
        handleClickFav={this.handleClickFav}
      />
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    selecMovie: state.movies.selected,
    user: state.login.user.user.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.movieId;
  return {
    buscarMovie: () => dispatch(buscarMovie(id)),
    addFav: (Title, Poster, user) => dispatch(addFav(Title, Poster, user)),
    allFavs:(userId) => dispatch(allFavs(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
