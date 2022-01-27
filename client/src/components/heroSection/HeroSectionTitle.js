import React from 'react';
import styled from 'styled-components';

const HeadingStyles = styled.h1`
  font-size: clamp(3rem, 4vw, 5rem);
  color: var(--whiteBlue-1);
  letter-spacing: 0.05em;
  line-height: 1.2em;
  text-transform: capitalize;
  font-weight: 900;
`;

export default function Heading1({ children }) {
  return <HeadingStyles>{children}</HeadingStyles>;
}
