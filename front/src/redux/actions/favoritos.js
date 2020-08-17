import axios from "axios";

const mostrarFavs = (favs) => {
  return {
    type: "MOSTRAR_FAV",
    favs,
  }
}


export const addFav = function (Title, Poster, user) {
  return function () {
    return axios.post(`/api/favoritos/agregar`, { Title, Poster, user });
  };
};



export const allFavs = (userId) => {
  return (dispatch) =>{
      return axios.get(`/api/favoritos/todos/${userId}`)
      .then((res) => dispatch(mostrarFavs(res.data)))
}
}



export const deleteFavs = (userId) => {
  return () =>{
      return axios.delete(`/api/favoritos/delete/${userId}`) 
      }
}