import styled from 'styled-components';

export const FooterStyles = styled.div`
  background: var(--blackBlue-1);
  padding-top: 3rem;
  .Paragraph,
  a {
    color: var(--whiteBlue-2);
  }
  .footer__top .Paragraph {
    font-size: 2.2rem;
    font-weight: 600;
    font-family: poppins;
  }
  .logo {
    max-width: 80px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .footer__contactInfo .Paragraph {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 300;
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
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.2em;
    @media only screen and (max-width: 300px) {
      flex-direction: column;
    }
  }
  .copyright {
    padding: 2rem 0;
  }
  .copyright .Paragraph {
    font-size: 1.5rem;
  }
`;
