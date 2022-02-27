import styled from 'styled-components';
import heroImg from '../../assets/images/hero_img.svg';

export const HeroSectionStyles = styled.div`
  padding: 10rem 0;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--blackBlue-4);
  z-index: 50;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero__right,
  .hero__left {
    flex: 1;
  }
  .hero__left .paragraph {
    max-width: 350px;
    margin-top: 1.5rem;
    text-align: left;
  }
  .hero__right {
    margin-left: 2rem;
    height: fit-content;
  }
  .hero__right__img {
    height: 35vw;
    width: 35vw;
    max-width: 500px;
    max-height: 500px;
    background-image: url(${heroImg});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: auto;
  }
  .hero__right .gatsby-image-wrapper {
    /* background-color: red; */
  }
  .hero__buttons {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column-reverse;
    }
    .hero__right__img {
      height: 80vw;
      width: 80vw;
    }
    .hero__title {
      text-align: center;
    }
    .hero__left .paragraph {
      text-align: center;
    }
    .hero__right {
      margin: 0;
      margin-bottom: 2rem;
    }
    .hero__right__img {
      height: 80vw;
      width: 80vw;
    }
    .hero__buttons {
      justify-content: center;
    }
  }
`;

export const HeroSectionBgElStyles = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* z-index: -1; */
  pointer-events: none;
  .bgEl__purple {
    position: absolute;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 1000px;
    .purpleBG {
      width: 100%;
    }
  }
  .bgEl__green {
    position: absolute;
    right: -20%;
    top: -25%;
    display: inline-block;
  }
  .bgEl__blue {
    position: absolute;
    right: -40%;
    bottom: -25%;
    display: inline-block;
  }
  @media only screen and (max-width: 768px) {
    .bgEl__green {
      right: -70%;
    }
  }
`;
