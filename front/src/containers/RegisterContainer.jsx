import React from "react";
import Register from "../components/Register";
import { connect } from "react-redux";
import { crearUser } from "../redux/actions/login";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    if(!name) {
      return this.setState({ error: "Por favor escribe tu nombre !!" })
    }
    if(!email) {
      return this.setState({ error: "Por favor escribe un email !!" })
    }
    if(!password) {
      return this.setState({ error: "Por favor escribe una constraseña !!" })
    }
    this.props.crearUser(name, email, password);
    this.setState({error: '' })
    return this.props.history.push("/login");
  }

  handleEmail(e) {
    const email = e.target.value;
    this.setState({ email: email });
  }
  handleName(e) {
    const name = e.target.value;
    this.setState({ name: name });
  }
  handlePassword(e) {
    const password = e.target.value;
    this.setState({ password: password });
  }

  render() {
    return (
      <div>
        <Register
          handleSubmit={this.handleSubmit}
          handleEmail={this.handleEmail}
          handleName={this.handleName}
          handlePassword={this.handlePassword}
          error={this.state.error}
        />
      </div>
    );
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    crearUser: (name, email, password) => dispatch(crearUser(name, email, password))
  };
};

export default connect(null, mapDispachToProps)(RegisterContainer);
