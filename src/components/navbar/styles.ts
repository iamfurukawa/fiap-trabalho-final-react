import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  width: 500px;
`;

export const Pill = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  padding: 10px;

  border: 2px solid black;
  border-radius: 45px;

  h2 {
    margin: 0;
  }
`;