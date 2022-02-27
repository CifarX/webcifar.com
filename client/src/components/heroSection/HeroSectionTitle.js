import React from 'react';
import styled from 'styled-components';

const HeadingStyles = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: var(--whiteBlue-1);
  letter-spacing: 0.05em;
  line-height: 1.2em;
  text-transform: capitalize;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export default function HeroHeading({ children }) {
  return <HeadingStyles>{children}</HeadingStyles>;
}
