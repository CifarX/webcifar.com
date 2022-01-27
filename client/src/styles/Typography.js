import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter';
import '@fontsource/poppins';

const Typography = createGlobalStyle`
  html{
    font-family: 'Inter';
  }
  *{
    font-family: 'Inter';
    line-height: 1.2em;
  }
  h1,h2,h3{
    font-family: 'Poppins';
  }
  h4,h5,h6{
    font-family: 'Poppins';
  }
  p,a {
    font-family: 'Inter';
  }
`;

export default Typography;
