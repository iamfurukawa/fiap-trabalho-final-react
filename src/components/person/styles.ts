import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-top: 50px;
  cursor: pointer;

  width: 100%;
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

  margin-left: 30px;

  h1, h2, ul {
    margin: 0;
    padding-bottom: 10px;
  }

  p {
    width: 50%;
  }
`;
