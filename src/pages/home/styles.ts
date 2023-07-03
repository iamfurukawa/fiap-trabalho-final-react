import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  h1 {
    font-size: 50px;
  }

  h3 {
    width: 1000px;
    text-align: center;

    font-style: normal;
    font-weight: 300;
    font-size: 20px;
  }

  img {
    margin-top: 50px;
  }
`;

export const FormContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  margin-top: 50px;

  input {
    border-radius: 45px;

    padding: 0 10px;
    font-size: 20px;

    height: 50px;
    width: 250px;
  }

  button {
    border-radius: 45px;
    background-color: black;
    color: white;

    font-size: 20px;

    height: 55px;
    width: 150px;
  }
`;