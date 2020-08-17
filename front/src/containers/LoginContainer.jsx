import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import {loginUser} from '../redux/actions/login'


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser(email, password);
    
    return this.props.history.push("/")
  }

  handleEmail(e) {
    const email = e.target.value;
    this.setState({ email: email });
  }

  handlePassword(e) {
    const password = e.target.value;
    this.setState({ password: password });
  }

  render() {
    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
        />
      </div>
    );
  }
}



const mapDispachToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
  };
};

export default connect(null, mapDispachToProps)(LoginContainer);
