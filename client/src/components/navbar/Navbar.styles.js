import styled from 'styled-components';

export const NavbarStyles = styled.div`
  position: fixed;
  left: 0;
  top: 0.5rem;
  width: 100%;
  z-index: 1000;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background: var(--blackBlue-6);
    border-radius: 12px;
    max-width: 1250px;
  }
  .logo {
    width: 45px;
    cursor: pointer;
  }
  .menu {
    nav {
      ul {
        display: flex;
      }
      li {
        display: inline-block;
        &:last-of-type {
          margin-left: 1rem;
        }
        &:last-of-type a:hover {
          color: var(--whiteBlue-1);
          background-color: initial;
        }
        a {
          display: inline-block;
          height: 100%;
          font-size: 1.8rem;
          font-family: Inter, sans-serif;
          font-weight: 500;
          color: var(--whiteBlue-1);
          padding: 0.8rem 1.5rem;
          cursor: pointer;
          transition: 0.2s ease;
          transition-property: color, background-color;
          border-radius: 8px;
          &:hover {
            color: var(--blue-3);
            background-color: var(--blackBlue-1);
          }
          &.active {
            /* color: var(--blackBlue-5); */
            color: #6054f0;
          }
        }
      }
    }
  }
  .menu__icon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    top: 0.5rem;
    .logo {
      width: 30px;
    }
    .container {
      position: relative;
    }
    nav {
      width: 100%;
      padding: 2rem;
      margin-top: 0.5rem;
      border-radius: 12px;
      position: absolute;
      left: 0;
      top: 100%;
      background-color: var(--blackBlue-6);
      ul {
        flex-direction: column;
      }
      li {
        width: 100%;
        text-align: center;
      }
    }
    .menu {
      nav {
        li {
          &:last-of-type {
            margin-left: 0;
          }
        }
      }
    }
    .menu__icon {
      display: inline-block;
      cursor: pointer;
      svg {
        width: 3rem;
        color: var(--whiteBlue-2);
        pointer-events: none;
      }
    }
    .hide-item {
      display: none;
    }
  }
`;
