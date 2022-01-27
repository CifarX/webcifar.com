import React from 'react';
import styled from 'styled-components';

const ParagraphStyles = styled.div`
  p {
    font-family: 'Inter';
    font-weight: 300;
    font-size: clamp(1.6rem, 2vw, 2.2rem);
    line-height: 1.5em;
    text-align: center;
    @media only screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

export default function Paragraph({ children }) {
  return (
    <ParagraphStyles>
      <p className="Paragraph">{children}</p>
    </ParagraphStyles>
  );
}
