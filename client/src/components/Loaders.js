import React, { useRef } from 'react';
import { useLoading, Grid } from '@agney/react-loading';

import styled from 'styled-components';

const LoaderStyles = styled.div`
  color: var(--whiteBlue-1);
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--blackBlue-1);
  transition: 1s 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    width: 150px;
  }
`;

export default function Loaders({ status }) {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid width="50" />,
  });
  const loaderEl = useRef(null);
  return (
    <div>
      {status ? 'loading' : 'not-loading'}
      <LoaderStyles ref={loaderEl} id="loader">
        <section {...containerProps}>
          {indicatorEl} {/* renders only while loading */}
        </section>
      </LoaderStyles>
    </div>
  );
}
