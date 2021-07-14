import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  /* background-color: white; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* transform: scale(1); */
`;

export const Loader = styled.div`
  animation: is-rotating 1s infinite;
  border: 2px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
