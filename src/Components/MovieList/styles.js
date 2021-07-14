import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 38px 56px;
  h1 {
    color: #4c5264;
  }
  @media (max-width: 425px) {
    h1{text-align: center;}
  }
`;

export const ListItens = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
  padding: 36px 56px;
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
    justify-items: center;
  }
`;

/* Card Add Movie*/
export const AddMovie = styled.div`
  height: 200px;
  width: 340px;
  background-color: #f3f4f6;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 8px;
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  background-color: #d3d3d3;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 0.6;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

/* Card */
export const CardContainer = styled.div`
  background-color: #f3f4f6;
  padding: 12px 0;
  height: 200px;
  width: 340px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Chip = styled.div`
  background-color: #7ccfaf;
  padding: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 180px;
  align-self: flex-end;
`;
export const UserName = styled.p`
  text-align: right;
`;
export const Infos = styled.div`
  padding: 0 12px;
`;

export const TitleMovie = styled.p`
  font-weight: bold;
  text-align: justify;
`;
export const ReleaseDate = styled.p`
  font-size: 12px;
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
`;

export const CategoryBlock = styled.div`
  p {
    display: inline;
    padding: 0 2px;
  }
  span {
    position: absolute;
    /* top: 120%; */
    /* left: 50%; */
    margin-top: 10px;
    transform: translateX(-50%);
    z-index: 999;
    font-size: 12px;
    background-color: #aebabf;
    border-radius: 4px;
    padding: 4px 8px;
    opacity: 0;
    :hover {
      opacity: 1;
    }
  }
`;
export const RatBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
