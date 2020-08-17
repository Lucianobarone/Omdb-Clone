import React from "react";
import Favoritos from "../components/Favoritos";
import { connect } from "react-redux";
import {deleteFavs} from '../redux/actions/favoritos'


export class FavoritosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroy= this.handleDestroy.bind(this)
  }


componentDidMount(){
  this.props.deleteFavs()

}



  handleDestroy(id){
 
    this.props.deleteFavs(id)

  }

  
  render() {
    return (
      
    <Favoritos favoritos={this.props.favs} handleDestroy={this.handleDestroy}/>
    
    )
  }
}


const mapStateToProps = (state) => {
  console.log("FAVS: " , state.favoritos.list)
  return {
    favs: state.favoritos.list,
    
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavs: (id) => dispatch(deleteFavs(id)),
    
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FavoritosContainer);
