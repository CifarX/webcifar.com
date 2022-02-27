import styled from 'styled-components';
import Bg from '../../assets/images/contact_banner_bg.svg';

export const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .shadow {
    /* honeypot */
    opacity: 0;
    position: absolute;
    height: 0;
    width: 0;
    z-index: -1;
  }
  .title {
    text-align: center;
  }
  .contact__subtitle {
    color: var(--blue-3);
    max-width: 500px;
    margin: 0 auto;
    .paragraph {
      font-size: 1.8rem;
    }
  }
  form {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  .form__wrapper {
    width: 100%;
    margin-top: 5rem;
  }
  label {
    font-size: 1.8rem;
    font-family: Inter;
    font-weight: 300;
    color: var(--whiteBlue-2);
  }
  input,
  textarea,
  select {
    font-family: Inter;
    width: 100%;
    background: var(--blue-1);
    outline: none;
    border: none;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    resize: vertical;
  }
  select option {
    font-family: Inter;
  }
  .form-group {
    display: inline-block;
    padding: 1.6rem 2.3rem;
    background: var(--blackBlue-1);
    /* margin: 1rem; */
    border-radius: 12px;
    border: 2px solid transparent;
    &.focused {
      border: 2px solid #18a0fb;
    }
  }
  .name__group,
  .message__group {
    grid-column: 1 / 3;
  }
  .email__group,
  .subject__group {
    width: 100%;
  }
  .recaptcha-group {
    grid-column: 1/3;
    background: transparent;
    padding-left: 0;
  }
  .budget__number {
    display: inline-block;
    font-size: 3rem;
    font-weight: Bold;
    margin-top: 1rem;
  }
  button[type='submit'] {
    outline: none;
    border: none;
    font-size: 2rem;
    font-family: Inter;
    padding: 1.8rem 5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    background: var(--blackBlue-2);
    color: var(--whiteBlue-2);
    width: fit-content;
    cursor: pointer;
    border-radius: 12px;
    border: 2px solid transparent;
    &:hover {
      border: 2px solid #18a0fb;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: 0.5s ease opacity, 0.3s ease transform;
  }
  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-exit-active {
    transform: translateY(-15px);
    opacity: 0;
    transition: 0.5s ease opacity, 0.3s ease transform;
  }
  /* custom select icon */
  .form-group {
    .customSelect {
      position: relative;
      .custom-arrow {
        position: absolute;
        right: 1rem;
        top: calc(50% + 0.7rem);
        transform: translateY(-50%);
        svg {
          max-width: 20px;
          color: var(--blackBlue-1);
        }
      }
      select {
        appearance: none;
      }
    }
  }
  .form__status {
    width: 400px;
    height: fit-content;
    margin-top: 2rem;
    background: var(--blackBlue-1);
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    bottom: 10px;
    right: 10px;
    border: 2px solid var(--blue-4);
    .icon {
      flex: 1;
      display: inline-block;
      width: 30px;
      height: 30px;
    }
    &.success {
      /* border: 2px solid green; */
      background: linear-gradient(90deg, #112926 2%, var(--blackBlue-1) 16%);
      .icon {
        color: green;
      }
    }
    &.failed {
      background: linear-gradient(90deg, #3b1d28 1%, var(--blackBlue-1) 20%);
      /* border: 2px solid red; */
      .icon {
        color: #e44747;
      }
    }
    .info {
      margin-left: 1.5em;
      flex: 6;
    }
    h3 {
      font-weight: 500;
      color: var(--whiteBlue-1);
      font-size: 2rem;
      text-align: left;
    }
    .paragraph {
      margin-top: 0.5rem;
      text-align: left;
      color: var(--blue-3);
      font-size: 1.8rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .name__group,
    .message__group,
    .email__group,
    .subject__group,
    .budget__group,
    .type__group {
      grid-column: 1/3;
    }
    .form__status {
      width: 100%;
      .icon {
        width: 20px;
        height: 20px;
      }
      .info {
        flex: 12;
      }
      h3 {
        font-size: 1.8rem;
      }
      .paragraph {
        font-size: 1.4rem;
      }
    }
    button[type='submit'] {
      font-size: 1.6rem;
    }
  }
`;

export const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .container {
    position: relative;
  }
  .bg {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(${Bg}) no-repeat center/ contain;
  }
  .banner__wrapper {
    background-color: var(--blackBlue-1);
    padding: 5rem 0;
    border-radius: 12px;
    max-width: 700px;
    margin: 0 auto;
    z-index: 1;
  }
  .banner__title {
    font-size: 5rem;
    font-family: Poppins;
    font-weight: 600;
    line-height: 1.2em;
    max-width: 400px;
    margin: 0 auto;
    color: var(--blue-1);
  }
  .banner__button {
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .banner__title {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 480px) {
    .bg {
      display: none;
    }
  }
`;
