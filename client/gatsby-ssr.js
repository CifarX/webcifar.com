import React from 'react';
import Layout from './src/components/Layout';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js" />,
  ]);
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
