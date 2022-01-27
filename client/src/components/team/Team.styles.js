import styled from 'styled-components';

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
    .Paragraph {
      color: var(--blue-1);
      font-size: 2.5rem;
      font-family: Inter;
      font-weight: 900;
    }
  }
  .title {
    .Paragraph {
      color: var(--blue-1);
      font-size: 1.6rem;
      font-family: Inter;
      font-weight: 300;
    }
  }
`;
