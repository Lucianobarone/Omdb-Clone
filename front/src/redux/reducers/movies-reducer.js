const initialState = {
  movies: [],
  selected: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "MOSTRAR_MOVIE":
      return Object.assign({}, state, { selected: action.movie });
    case "MOSTRAR_MOVIES":
      return Object.assign({}, state, { movies: action.movies });
    default:
      return state;
  }
}