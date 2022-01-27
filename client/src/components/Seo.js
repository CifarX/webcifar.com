import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ location, title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
          description
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
      <html lang="en" />
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Helmet>
  );
}
