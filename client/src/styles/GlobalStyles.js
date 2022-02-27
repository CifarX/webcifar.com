import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --blue-1: #C6D2E0;
    --blue-2: #05264C;
    --blue-3: #9BA4AD;
    --blue-4: #738EAE;
    --purple1: #4d2cd2;
    --purple2: #3a1db0;
    --whiteBlue-1: #EEF6FE;
    --whiteBlue-2: #E4ECF5;
    --whiteBlue-3: #F4FAFF;
    --whiteBlue-4: #546682;
    --blackBlue-1: #161B22;
    --blackBlue-2: #1A222E;
    --blackBlue-3: #0D1117;
    --blackBlue-4: #090C10;
    --blackBlue-5: #32435C;
    --blackBlue-6: #191E28;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--blackBlue-3);
  }
  body{
    /* overflow-x: hidden; */
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .app{
    /* visibility: hidden; */
  }
`;
export default GlobalStyles;
