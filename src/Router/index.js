import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { MovieList } from "../Components/MovieList";
import { Form } from "../Components/Form";

export const Router = () => {
  return (
    <BrowserRouter key={Router}>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/addmovie">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};