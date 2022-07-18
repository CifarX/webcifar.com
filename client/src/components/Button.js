import { Link } from 'react-scroll';
import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled(Link)`
  display: inline-block;
  background: ${({ primary }) => (primary
    ? 'linear-gradient(90deg, #4d2cd2, #3a1db0);'
    : 'var(--blackBlue-2)')};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-size: 1.8rem;
  padding: 0.5em 1.2em;
  color: var(--whiteBlue-2);
  font-family: 'Poppins', 'sans-serif';
  font-weight: 400;
  cursor: pointer;
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
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export default function Button({
  primary = true, children, tag, ...rest
}) {
  return (
    <ButtonStyles primary={primary} {...rest} as={tag}>
      {children}
    </ButtonStyles>
  );
}
