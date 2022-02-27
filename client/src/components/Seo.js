import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ title }) {
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

  const seo = {
    title: title || data.site.siteMetadata.title,
    subTitle: data.site.siteMetadata.subTitle,
    description: data.site.siteMetadata.description,
  };

  return (
    <Helmet>
      <html lang="en" />
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        {seo.title} | {seo.subTitle}
      </title>
    </Helmet>
  );
}
