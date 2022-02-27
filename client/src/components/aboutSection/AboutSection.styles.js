import styled from 'styled-components';

export const AboutStyles = styled.div`
  padding: 10rem 0;
  color: var(--whiteBlue-1);
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .about__left,
  .about__right {
    flex: 1;
  }
  .about__left__imgWrapper {
    margin-right: 10%;
    max-width: 400px;
    height: 400px;
    position: relative;
    margin-left: auto;
    .img2 {
      border: 2px solid #7253f1;
      cursor: pointer;
      width: 100%;
      height: 100%;
      position: absolute;
      /* getting extra 10% space in right side*/
      right: -10%;
      top: 60%;
      max-width: 329px;
      max-height: 200px;
      overflow: hidden;
      border-radius: 12px;
      &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #2418427a;
        transition: 0.3s ease background-color;
      }
      &:hover::before {
        background-color: transparent;
      }
    }
  }
  .about__left img {
    border-radius: 12px;
  }
  .about__right {
    .title {
      text-align: left;
    }
    .paragraph {
      margin-top: 1rem;
      text-align: left;
      color: var(--blue-3);
    }
    .about__stack {
      margin-top: 3rem;
      .about__stack__title {
        font-size: 2rem;
        font-family: Inter;
        font-weight: 400;
      }
      svg {
        max-width: 40px;
        height: fit-content;
        margin-bottom: 1rem;
        color: var(--blue-3);
        transition: 0.3s ease color;
      }
      .about__stack__row div:hover svg {
        color: var(--blue-1);
      }
    }
  }
  .about__stack__row {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    div {
      height: 130px;
      background: var(--blackBlue-2);
      border-radius: 12px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p {
        padding-top: 1rem;
        font-family: Inter;
        font-weight: 300;
        font-size: 1.8rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .about__left__imgWrapper {
      margin-left: 0;
      margin-bottom: 30%;
    }
  }
  @media only screen and (max-width: 350px) {
    .about__left__imgWrapper {
      margin-bottom: 50%;
    }
  }
`;
