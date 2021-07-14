import React from "react";
import { CardContainer, TitleMovie, ReleaseDate, FooterCard, RatBlock, Chip, Infos, UserName, CategoryBlock } from "./styles";
import StarRateIcon from "@material-ui/icons/StarRate";

const listCategory = [
  {category: "Ação", icon: '🔫'},
  {category: "Animação", icon: '🐾'},
  {category: "Aventura", icon: '🌍'},
  {category: "Comédia", icon: '😂'},
  {category: "Comédia romântica", icon: '💗'},
  {category: "Documentário", icon: '📂'},
  {category: "Drama", icon: '😭'},
  {category: "Espionagem", icon: '👀'},
  {category: "Fantasia", icon: '🧚‍♀️'},
  {category: "Faroeste", icon: '🌵'},
  {category: "Ficção científica", icon: '🧪'},
  {category: "Guerra", icon: '🔥'},
  {category: "Musical", icon: '🎶'},
  {category: "Policial", icon: '🚔'},
  {category: "Romance", icon: '💏'},
  {category: "Suspense", icon: '👣'},
  {category: "Terror", icon: '🔪'},
  {category: "Outros", icon: '🎥'},
]
function Card({ data }) {

  const renderIcon = (category) => {
    const icon = listCategory.filter(icon => icon.category === category);
    return icon[0].icon;
  };

  return (
    <CardContainer>
      <Chip>
       <UserName>by {data.metaData.userName}</UserName>
     </Chip>
      <Infos>
        <TitleMovie>{data.answer.nomeDoFilme302645}</TitleMovie>
        <ReleaseDate>
          {new Date(data.answer.dataDeLancamento302643).toLocaleDateString()}
        </ReleaseDate>
      </Infos>
      <FooterCard>
        <CategoryBlock>
          {data.answer.categorias302641.map((icon) => (
            <>
              <p>{renderIcon(icon)}</p>
              <span>{icon}</span>
            </>
            ))}
        </CategoryBlock>
        <RatBlock>
          <StarRateIcon />
          <p>{data.answer.avaliacaoPessoal302642}</p>
        </RatBlock>
      </FooterCard>
    </CardContainer>
  );
}
export default Card;
