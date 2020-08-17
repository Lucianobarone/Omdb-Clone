import axios from "axios";

const mostrarMovies = (movies) => ({
  type: "MOSTRAR_MOVIES",
  movies,
});

const mostrarMovie = (movie) => ({
  type: "MOSTRAR_MOVIE",
  movie,
});

export const buscarMovies = (title) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${title}`)
    .then((res) => res.data)
    .then((movies) => dispatch(mostrarMovies(movies.Search)));

export const buscarMovie = (id) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then((res) => res.data)
    .then((movie) => dispatch(mostrarMovie(movie)));
