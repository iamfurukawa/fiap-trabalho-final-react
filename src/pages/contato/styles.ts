import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  p {
    padding: 0 35%;
    font-size: 18px;
    font-weight: 300;
  }

  input {
    width: 30%;
    height: 20px;

    padding: 5px;

    font-size: 20px;
  }

  textarea {
    margin-top: 10px;
    width: 30%;

    padding: 5px;

    font-size: 18px;
  }

  button {
    width: 30%;

    margin-top: 10px;
    
    border-radius: 45px;
    background-color: black;
    color: white;

    font-size: 20px;
  }

`;