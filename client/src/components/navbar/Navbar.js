import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-scroll';
import Button from '../Button';
import Logo from '../Logo';
import { NavbarStyles } from './Navbar.styles';

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav((old) => !old);
  };
  return (
    <NavbarStyles>
      <div className="container">
        <div className="logo">
          <Link to="hero" smooth>
            <Logo />
          </Link>
        </div>
        <div className="menu">
          {!showNav ? (
            <div
              className="menu__icon"
              onClick={handleClick}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdMenu />
            </div>
          ) : (
            <div
              className="menu__icon"
              onClick={handleClick}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdClose />
            </div>
          )}
          <nav className={!showNav ? 'navItems hide-item' : 'navItems'}>
            <ul>
              <li>
                <Link
                  to="hero"
                  activeClass="active"
                  spy
                  smooth
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth
                  activeClass="active"
                  onClick={handleClick}
                  spy
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="works"
                  smooth
                  activeClass="active"
                  onClick={handleClick}
                  spy
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth
                  activeClass="active"
                  onClick={handleClick}
                  spy
                >
                  About
                </Link>
              </li>
              <li>
                <Button btnLink="contact" primary handleClick={handleClick}>
                  Hire Us
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </NavbarStyles>
  );
}
