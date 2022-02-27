import React from 'react';
import styled from 'styled-components';

const SectionTitleStyles = styled.h2`
  text-align: center;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: 3.5rem;
  color: var(--blue-1);
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default function SectionTitle({ children, ...rest }) {
  return <SectionTitleStyles {...rest}>{children}</SectionTitleStyles>;
}
