import styled from 'styled-components';

export const ServiceItemStyles = styled.div`
  text-align: center;
  .icon {
    max-width: 50px;
    margin: 0 auto;
  }
  .title {
    font-size: 2.4rem;
    color: var(--whiteBlue-1);
    font-family: Poppins;
    font-weight: 400;
    margin-top: 2rem;
  }
  .paragraph {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .paragraph {
      font-size: 1.6rem;
    }
  }
`;

export const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    column-gap: 5rem;
    & > div {
      flex: 1;
    }
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
      row-gap: 3rem;
      column-gap: 0rem;
    }
  }
`;
