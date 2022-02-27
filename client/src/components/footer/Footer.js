import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Paragraph from '../typography/Paragraph';
import Logo from '../Logo';
import { FooterStyles } from './Footer.styles';
import { socialLinks } from '../../constants/socialLinks';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `);

  const { title, subTitle } = data.site.siteMetadata;

  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__top">
          <div className="logo">
            <Logo />
          </div>
          <Paragraph className="title">{title}</Paragraph>
          <Paragraph className="tagline">{subTitle}</Paragraph>
        </div>
        <div className="footer__contactInfo">
          <Paragraph className="paragraph">
            <a href="mailto:webcifar@gmail.com">webcifar@gmail.com</a> <br />
            <a href="tel:+8801647-579727">+8801647-579727</a> <br />
            Chittagong, Bangladesh
          </Paragraph>
        </div>
        <ul>
          {socialLinks.map(({ name, url, icon }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__bottom">
          <Paragraph>
            <a href="/privacy" target="_blank">
              🔏 Privacy Policy
            </a>
          </Paragraph>
          <Paragraph>
            <a href="/terms" target="_blank">
              📄 Terms conditions
            </a>
          </Paragraph>
        </div>
      </div>
      <div className="container copyright">
        <Paragraph className="paragraph">
          &copy; copyright {new Date().getFullYear()} {title} | All rights
          reserved
        </Paragraph>
      </div>
    </FooterStyles>
  );
}
