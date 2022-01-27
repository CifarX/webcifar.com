import React from 'react';
import styled from 'styled-components';

const SectionTitleStyles = styled.div`
  .title {
    font-family: 'Poppins';

    letter-spacing: 0.05rem;
    font-size: clamp(3rem, 4vw, 6rem);
    color: var(--whiteBlue-1);
  }
`;

export default function SectionTitle({ children }) {
  return (
    <SectionTitleStyles>
      <h1 className="title">{children}</h1>
    </SectionTitleStyles>
  );
}
