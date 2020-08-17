const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "MOSTRAR_FAV":
      return {...state, list: action.favs };
    default:
      return state;
  }
};
