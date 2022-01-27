import React from 'react';
import styled from 'styled-components';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import Seo from '../components/Seo';

const LinksStyles = styled.div`
  height: 100%;
  width: 100%;
  .container {
    padding-top: 10rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  ol {
    color: var(--whiteBlue-1);
    font-family: Inter;
    font-size: 2rem;
    margin-left: 2rem;
  }
  li {
    margin-bottom: 2rem;
  }
  li:hover {
    a {
      color: var(--blue-1);
    }
  }
  a {
    color: var(--whiteBlue-1);
    display: inline-block;
    transition: 0.3s ease color;
  }
  h1 {
    font-size: 3rem;
    color: var(--whiteBlue-2);
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    ol {
      font-size: 1.6rem;
    }
  }
`;

export default function Links({ location }) {
  return (
    <LinksStyles>
      <Typography />
      <GlobalStyles />
      <Seo title="Links" location={location} />
      <div className="container">
        <div className="links_wrapper">
          <h1>Important Links</h1>
          <ol>
            <li>
              <a
                href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ"
                target="_blank"
                rel="noreferrer"
              >
                YouTube Channel
              </a>
            </li>
            <li>
              <a href="https://webcifar.com" target="_blank" rel="noreferrer">
                Website
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/webcifar"
                target="_blank"
                rel="noreferrer"
              >
                Facebook Page
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/webcifar"
                target="_blank"
                rel="noreferrer"
              >
                Community Group
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/webcifar"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/webcifar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/web_cifar"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:webcifar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email-us
              </a>
            </li>
          </ol>
        </div>
      </div>
    </LinksStyles>
  );
}
