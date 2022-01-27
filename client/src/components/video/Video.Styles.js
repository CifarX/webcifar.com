import styled from 'styled-components';

export const VideoStyles = styled.div`
  width: 40%;
  /* max-width: 40%; */
  /* min-width: 300px; */
  height: 300px;
  padding: 1rem;
  background: var(--blackBlue-1);
  border-radius: 12px;
  .video__wrapper {
    height: 100%;
    width: 100%;
    position: relative;
  }
  iframe {
    border-radius: 12px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video__modal__wrapper {
    /* display: none; */
    position: fixed;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    z-index: 1100;
    background-color: #161b22ed;
    .video__modal {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 56.25vw;
      max-width: 800px;
      max-height: 450px;
    }
  }
  .playButton {
    width: 30%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .video__modal__close {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: -5%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1000;
    path {
      stroke: white;
    }
    &:hover path {
      stroke: crimson;
    }
  }
  .video__thumbnail,
  .gatsby-image-wrapper {
    /* background-color: red; */
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  .video__thumbnail {
    overflow: hidden;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: var(--blackBlue-1);
      opacity: 0.5;
      transition: 0.3s ease opacity;
    }
  }
  &:hover .video__thumbnail::after {
    opacity: 0;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
