import styled from 'styled-components';

export const TestimonialStyles = styled.div`
  padding: 10rem 0;
  overflow: hidden;
  .testimonial__title {
    text-align: center;
  }
  .testimonial__wrapper {
    position: relative;
    margin-top: 10rem;
    &::before {
      position: absolute;
      content: '';
      background: var(--blackBlue-1);
      height: calc(100% + 10rem);
      width: calc(80% + 20px);
      top: calc(50% - 2rem);
      left: 50%;
      border-radius: 12px;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
  .testimonial__title {
    .title {
      line-height: 1.1em;
    }
  }
  .testimonial__subTitle {
    max-width: 600px;
    margin: 0 auto;
    .paragraph {
      margin-top: 1rem;
    }
  }
  .swiper {
    max-width: 100%;
    padding-bottom: 10rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    /* full width is (50 * 2 ) + (10 * 2) = 120 */
    /* full height is 50px */
    --widthHeight: 50px;
    --gap: 10px;
    position: absolute;
    height: var(--widthHeight);
    width: 50px;
    background: var(--blackBlue-2);
    z-index: 10;
    /* right: 0px; */
    left: calc(50% - var(--widthHeight) / 2 - var(--gap) / 2);
    top: auto;
    bottom: 10px;
    transform: translate(-50%);
    color: var(--white);
    border-radius: 8px;
    &.swiper-button-disabled {
      background-color: transparent;
      &::after,
      &::after {
        color: var(--black);
      }
    }
  }
  .swiper-button-next {
    /* right: 0; */
    left: calc(50% + var(--widthHeight) / 2 + var(--gap) / 2);
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  .arrow-bg {
    position: absolute;
    /* full width(check arrow comments) + 10px */
    width: 130px;
    /* full height(check arrow comments) + 10px */
    height: 70px;
    border-radius: 12px;
    background: var(--blue-1);
    /* opacity: 0.5; */
    z-index: 99;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
  }
  @media only screen and (max-width: 768px) {
    .testimonial__wrapper {
      &::before {
        width: 120%;
      }
    }
  }
`;

export const TestimonialVideosStyles = styled.div`
  padding-bottom: 10rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;
