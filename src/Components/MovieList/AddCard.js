import React from "react";
import { AddMovie } from "./styles";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const AddCard = () => {
  const history = useHistory();
  
  return (
    <AddMovie>
      <IconButton onClick={() => history.push("/addmovie")}>
        <AddIcon color="primary" />
      </IconButton>
      <p>Adicionar Filme</p>
    </AddMovie>
  );
};
