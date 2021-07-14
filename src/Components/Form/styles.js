import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Title = styled.h1`
  padding: 22px 0;
  text-align: center;
`;
export const Formu = styled.div`
  background-color: #f3f4f6;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;
  border-radius: 4px;
  @media (max-width: 425px) {
    width: 90%;
  }
`;
export const Help = styled.small`
  color: rgba(0, 0, 0, 0.54);
  margin-top: "4px";
`;
