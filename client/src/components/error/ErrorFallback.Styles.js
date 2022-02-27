import styled from 'styled-components';

export const ErrorFallbackStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pre {
    padding: 1rem;
    background-color: var(--blackBlue-1);
    color: var(--whiteBlue-1);
    font-size: 1.2rem;
    margin-top: 2rem;
  }
  .title {
    font-size: 1.8rem;
    color: var(--whiteBlue-1);
    margin-bottom: 1rem;
  }
  .message {
    font-size: 1.4rem;
    color: var(--whiteBlue-1);
    text-align: left;
    font-family: 'Inter';
    font-weight: 500;
    color: crimson;
  }
`;
