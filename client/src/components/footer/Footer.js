import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import Paragraph from '../Paragraph';
import Logo from '../Logo';
import { FooterStyles } from './Footer.styles';

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__top">
          <div className="logo">
            {/* <img src={LogoImg} alt="Logo" /> */}
            <Logo />
          </div>
          <Paragraph>Your Complete Web Solution</Paragraph>
        </div>
        <div className="footer__contactInfo">
          <Paragraph>
            <a href="mailto:webcifar@gmail.com">webcifar@gmail.com</a> <br />
            <a href="tel:+8801647-579727">+8801647-579727</a> <br />
            Chittagong, Bangladesh
          </Paragraph>
        </div>
        <ul>
          <li>
            <a
              href="https://facebook.com/webcifar"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/web_cifar"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/webcifar"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
        <div className="footer__bottom">
          <a href="/privacy" target="_blank">
            🔏 Privacy Policy
          </a>
          <a href="/terms" target="_blank">
            📄 Terms conditions
          </a>
        </div>
      </div>
      <div className="container copyright">
        <Paragraph>
          &copy; copyright {new Date().getFullYear()} Web Cifar | All rights
          reserved
        </Paragraph>
      </div>
    </FooterStyles>
  );
}
