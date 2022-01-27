import styled from 'styled-components';
import StarImg from '../../assets/images/star.svg';

export const WorksSectionStyles = styled.div`
  padding: 10rem 0;
  .title {
    text-align: center;
  }
  .works__wrapper {
    margin-top: 5rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    & > div {
      /* opacity: 0; */
      /* transform: translateY(-30px); */
    }
  }
  @media only screen and (max-width: 768px) {
    .works__wrapper {
      display: block;
      /* width: 100%; */
      /* margin: 0; */
    }
  }
`;

export const WorksSectionBgEl = styled.div`
  position: relative;
  .bg {
    position: absolute;
    width: 80vw;
    height: 80vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 800px;
    max-height: 800px;
    background: url(${StarImg}) no-repeat center / contain;
    /* background: red; */
    right: -10%;
    top: 30%;
    z-index: -1;
  }
  @media only screen and (max-width: 1100px) {
    .bg {
      top: 45%;
      right: -25%;
    }
  }
  @media only screen and (max-width: 768px) {
    .bg {
      top: 85%;
      right: -25%;
    }
  }
`;

export const WorkItemStyles = styled.div`
  padding: 1.5rem;
  background: var(--whiteBlue-2);
  border-radius: 20px;
  .item {
    display: flex;

    height: 100%;
  }
  .item__left,
  .item__right {
    flex: 1;
    height: 100%;
  }
  .item__left .gatsby-image-wrapper {
    border-radius: 16px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .item__right {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .project__type {
    background-color: var(--blue-1);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    display: inline-block;
    .Paragraph {
      text-align: left;
      text-transform: capitalize;
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--blue-2);
    }
  }
  .project__title {
    margin-top: 1.5rem;
    h3 {
      text-transform: capitalize;
      font-family: Poppins;
      font-weight: 400;
      font-size: 2rem;
      line-height: 1.2em;
      color: var(--blackBlue-1);
    }
  }
  .project__client {
    margin-top: 1rem;
    .Paragraph {
      text-transform: capitalize;
      font-size: 1.6rem;
      text-align: left;
      font-weight: 400;
      color: var(--blackBlue-5);
    }
  }
  .project__stack {
    margin-top: 0.4rem;
    .Paragraph {
      font-size: 1.4rem;
      text-align: left;
      font-weight: 400;
      color: var(--blackBlue-5);
    }
  }
  .project__button {
    margin-top: 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    a {
      font-size: 1.6rem;
      /* text-decoration: underline; */
      color: var(--blackBlue-5);
    }
    svg {
      width: 1em;
      margin-bottom: -0.2em;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
    .item {
      flex-direction: column;
    }
    .item__left {
      margin-bottom: 2rem;
    }
  }
`;
