import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  #root,
  html,
  body {
    padding: 0;
    margin: 0;

    height: 100vh;

    box-sizing: border-box;
    
    font-family: 'Inter', sans-serif;


    a, a:visited, a:hover, a:active {
      color: inherit;
      text-decoration: none;
    }

  }
`;

export default GlobalStyles;
