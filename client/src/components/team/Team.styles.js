import styled from 'styled-components';
import TriangleImg from '../../assets/images/triangle.svg';

export const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    max-width: 700px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  .heading {
    margin-bottom: 3rem;
  }
`;

export const TeamBgEl = styled.div`
  position: relative;
  .bg {
    position: absolute;
    width: 80vw;
    height: 80vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 800px;
    max-height: 800px;
    background: url(${TriangleImg}) no-repeat center / contain;
    /* background: red; */
    left: -10%;
    top: 30%;
    z-index: -1;
  }
  @media only screen and (max-width: 1100px) {
    .bg {
      top: 45%;
      left: -25%;
    }
  }
`;

export const ItemStyles = styled.div`
  width: 100%;
  max-width: 300px;
  .gatsby-image-wrapper {
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    height: 300px;
    width: 300px;
  }
  .item__wrapper {
    /* position: relative; */
    overflow: hidden;
  }
  .info {
    background-color: var(--blackBlue-2);
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: -15%;
    z-index: 3;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--blackBlue-2);
      top: 0;
      transform: translateY(-0%) rotate(-5deg);
      transform-origin: top left;
      left: 0;
      border-radius: 12px;
      z-index: -1;
    }
  }
  .name {
    .paragraph {
      color: var(--blue-1);
      font-size: 1.8rem;
      font-family: Poppins;
      font-weight: 600;
    }
  }
  .title {
    .paragraph {
      color: var(--blue-4);
    }
  }
`;
