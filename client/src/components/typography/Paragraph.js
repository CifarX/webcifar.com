import React from 'react';
import styled from 'styled-components';

const ParagraphStyles = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5em;
  text-align: center;
  color: var(--whiteBlue-4);
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function Paragraph({ children, ...rest }) {
  return <ParagraphStyles {...rest}>{children}</ParagraphStyles>;
}
