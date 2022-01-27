import styled from 'styled-components';
import CircleImg from '../../assets/images/circle_green_bg.svg';

export const PriceSectionStyles = styled.div`
  padding: 10rem 0;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  .bg {
    position: absolute;
    width: 50vw;
    height: 50vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 800px;
    max-height: 800px;
    background: url(${CircleImg}) no-repeat center / contain;
    /* background: red; */
    right: -20%;
    bottom: -30%;
    z-index: -1;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price__left {
    flex: 3;
  }
  .price__right {
    flex: 2;
    svg {
      max-width: 400px;
    }
  }
  .price__left__wrapper {
    max-width: 80%;
    /* .title {
      font-size: clamp(2.5rem, 5vw, 5rem);
    } */
    .Paragraph {
      text-align: left;
      color: var(--blue-3);
      margin-top: 2rem;
    }
    .price__left__button {
      margin-top: 3rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      flex-direction: column-reverse;
    }
    .price__right {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        /* width: 80%; */
        /* margin-left: -30px; */
      }
    }
    .price__left {
      margin: 0;
      margin-top: 3rem;
    }
    .price__left__wrapper {
      max-width: 100%;
      text-align: center;
      .title {
        text-align: center;
      }
      .Paragraph {
        text-align: center;
      }
    }
  }
`;

export const PriceSectionBgEl = styled.div`
  position: relative;
  .bg {
    position: absolute;
    width: 80vw;
    height: 80vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 800px;
    max-height: 800px;
    background: url(${CircleImg}) no-repeat center / contain;
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
      top: 20%;
      right: -25%;
    }
  }
`;
