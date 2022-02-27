import React from 'react';
import { ErrorFallbackStyles } from './ErrorFallback.Styles';
import Paragraph from '../typography/Paragraph';
import Button from '../Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <ErrorFallbackStyles>
      <div className="container">
        <h3 className="title">Sorry, Something Unexpected happened.</h3>
        <Button onClick={resetErrorBoundary}>Retry</Button>
        <pre>
          <Paragraph className="message">{error.message}</Paragraph>
        </pre>
      </div>
    </ErrorFallbackStyles>
  );
}

export default ErrorFallback;
