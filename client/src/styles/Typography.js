import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

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
