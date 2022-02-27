import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import ErrorFallback from './error/ErrorFallback';
import Footer from './footer/Footer';
import NavBar from './navbar/Navbar';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // eslint-disable-next-line
          location.reload();
        }}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default Layout;
