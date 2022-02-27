import styled from 'styled-components';

export const FooterStyles = styled.div`
  background: var(--blackBlue-1);
  padding-top: 3rem;
  .paragraph,
  a {
    color: var(--whiteBlue-4);
  }
  a:hover {
    text-decoration: underline;
  }
  .footer__top {
    .title {
      font-size: 2.2rem;
      font-weight: 600;
      font-family: poppins, sans-serif;
      color: var(--blue-1);
    }
    .tagline {
      color: var(--blue-1);
    }
  }

  .logo {
    max-width: 80px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .footer__contactInfo .paragraph {
    margin-top: 1rem;
    line-height: 1.8em;
  }
  ul {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    svg {
      width: 20px;
    }
    & li:hover {
      a {
        color: var(--purple1);
      }
    }
  }
  .footer__bottom {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    a {
      color: var(--blue-1);
    }
    @media only screen and (max-width: 300px) {
      flex-direction: column;
    }
  }
  .copyright {
    padding: 2rem 0;
  }
  .copyright .paragraph {
    font-size: 1.5rem;
  }
`;
