import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 50px 0;

  width: 100%;

  p, li {
    text-align: justify;
    text-justify: inter-word;

    font-size: 18px;
    font-weight: 200;
  }
`;

export const ProfileImage = styled.img`
  margin: 20px;
  clip-path: circle();

  width: 200px;
  height: 200px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 30px;

  h1, h2, ul {
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    width: 50%;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    margin-bottom: 20px;
  }

  h3 {
    margin: 0;
    margin-bottom: 5px;
  }
`;