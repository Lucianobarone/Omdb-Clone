import axios from "axios";

const loggerUser = (user) => ({
  type: "LOGIN_USER",
  user,
});



export const crearUser = (name, email, password) =>{
  return () => {
      return axios.post("/api/user/register", {
        name: name,
        password: password,
        email: email,
      })
  }
};



export const loggoutUser = () => (dispatch) => {
  return axios.get("/api/user/salir").then(() => dispatch(loggerUser({})));
};

export const loginUser = (email, password) => (dispatch) => {
  return axios.post("/api/user/login", {
      password: password,
      email: email,
    })
    .then((res) => dispatch(loggerUser(res.data)));
};
