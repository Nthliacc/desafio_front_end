import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { AddCard } from "./AddCard";
import Card from "./Card";
import { HeaderContainer, ListItens } from "./styles";

export const MovieList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, status } = await axios.get(
        "https://coletum.com/api/graphql?query={answer(formId:23458){answer{nomeDoFilme302645,categorias302641,avaliacaoPessoal302642,dataDeLancamento302643,urlParaOSiteDoDoImdbComInformacoesSobreOFilme302644},metaData{userId,userName,createdAtSource,friendlyId,createdAt,createdAtDevice,createdAtCoordinates,updatedAt,updatedAtCoordinates}}}&token=7s5txcu909kwc48wookgw8g00occokk"
      );
      if (status === 200) {
        setLoading(false);
        setList(data.data.answer);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <HeaderContainer>
        <h1>Meus filmes favoritos</h1>
      </HeaderContainer>
      <ListItens>
        <AddCard />
        {list.map((element) => {
          return <Card data={element} />;
        })}
      </ListItens>
    </div>
  );
};
