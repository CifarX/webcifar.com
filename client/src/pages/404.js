import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Seo from '../components/Seo';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Page404Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d1117;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  color: white;
  text-align: center;
  h1 {
    font-family: Poppins;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  a {
    font-size: 2rem;
    color: royalblue;
  }
`;

export default function Page404({ location }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <Page404Styles>
        <Seo title="404" location={location} />
        <div>
          <h1>The page can't be found</h1>
          <Link to="/">Return to Home</Link>
        </div>
      </Page404Styles>
    </>
  );
}
