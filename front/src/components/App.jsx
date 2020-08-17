import React from "react";
import { Route, Switch } from "react-router-dom";

import Buscador from "../containers/BuscadorContainer";
import Presentacion from "../components/Presentacion";
import Menu from "../containers/MenuContainer";
import SingleMovie from "../containers/MovieContainer";
import Login from "../containers/LoginContainer";
import Register from "../containers/RegisterContainer";
import Favoritos from "../containers/FavoritosContainer";



export default () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Menu />
      <Switch>
        <Route exact path="/" component={Presentacion} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Buscador} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route exact path="/movies/:movieId" component={SingleMovie} />
      </Switch>
    </div>
  );
};
