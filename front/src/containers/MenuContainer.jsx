import React from "react";
import Menu from '../components/Menu'
import { connect } from "react-redux";
import {loggoutUser} from '../redux/actions/login'
import {allFavs} from '../redux/actions/favoritos'

class MenuContainer extends React.Component {
constructor(props){
    super(props)


    this.handleClick =this.handleClick.bind(this)
    this.handleClickFav= this.handleClickFav.bind(this)
  
}
 componentDidMount(){
   this.props.allFavs()
 }

  handleClick(){
   this.props.loggoutUser()
   return this.props.history.push("/");
  }


  handleClickFav(){
     
    this.props.allFavs(this.props.useId)
    /* return this.props.history.push('/favoritos') */
  }

  render() {
    return (
      <Menu handleClick={this.handleClick}
      estado={this.props.auteticate}
      nombre={this.props.nombre}
      handleClickFav={this.handleClickFav}
      />
    );
  }
}

const mapStateToProps = (state) => {
 
 if(state.login.user.user) {
  var nombre= state.login.user.user.name
  console.log("STATE 2:",state.login.user.user.id)
 var userIde= state.login.user.user.id
 }
  
  return {
    auteticate: state.login.user.isAuthenticated ,
    nombre:nombre ,
    useId: userIde 

  };
};

const mapDispatchToProps = (dispatch) => {

    return {
      loggoutUser: () => dispatch(loggoutUser()),
      allFavs: (userId) => dispatch(allFavs(userId))
     
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);