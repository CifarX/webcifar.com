import { Link } from 'react-scroll';
import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.div`
  display: inline-block;
  background: ${({ primary }) =>
    primary
      ? 'linear-gradient(90deg, #4d2cd2, #3a1db0);'
      : 'var(--blackBlue-2)'};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  a {
    display: inline-block;
    font-size: clamp(1.8rem, 2vw, 2.2rem);
    padding: 0.5em 2em;
    color: var(--whiteBlue-2);
    font-family: 'Inter';
    font-weight: 400;
    cursor: pointer;
    /* z-index: 2; */
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: black;
    opacity: 0.3;
    z-index: -1;
    transition: 0.3s ease-in-out width;
  }
  &:hover::before {
    width: 100%;
  }
`;
export default function Button({
  primary = true,
  btnLink = '#',
  children,
  type = 'Link',
  handleClick = null,
}) {
  return (
    <ButtonStyles primary={primary}>
      {type === 'a' ? (
        <a href={btnLink} onClick={handleClick}>
          {children}
        </a>
      ) : (
        <Link to={btnLink} smooth onClick={handleClick}>
          {children}
        </Link>
      )}
    </ButtonStyles>
  );
}
