import React, { useEffect, useState } from "react";
import axios from "axios";
import ElementField from "./ElementField";
import Loading from "../Loading";
import { Container, Title, Formu } from "./styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const Form = () => {
  const [formStructure, setFormStructure] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () =>{
      const { data, status } = await axios.get(`https://coletum.com/api/graphql?query={form_structure(formId:23458){label,componentId,type,helpBlock,order,options,minimum,maximum,widget,components{label,componentId,type,options,minimum,maximum,widget,components{label,componentId,type,options,minimum,maximum,widget,components{label,componentId,type,options,minimum,maximum,widget,components{label,type,options,minimum,maximum,widget}}}}}}&token=7s5txcu909kwc48wookgw8g00occokk`)
      console.log(data);
      if(status === 200){
        setLoading(false);
        setFormStructure(data.data.form_structure);
      }
    }
    fetch();
  }, []);

  if(loading){
    return <Loading/>
  }
  return (
    <Container>
      <Title>Cadastre seu filme favorito</Title>
      <Formu> 
        {formStructure.map( (element) => (
          <ElementField field={element} />
        ))}
        <Button variant="contained" color="primary">Cadastrar</Button>
        <Button variant="contained" color="secondary" onClick={() => history.push("/")}>Voltar</Button>
      </Formu>
    </Container>
  );
};