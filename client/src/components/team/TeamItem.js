import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Paragraph from '../Paragraph';
import { ItemStyles } from './Team.styles';

export default function TeamItem({
  name = 'Name',
  title = 'Designer',
  imageData,
}) {
  return (
    <ItemStyles>
      <div className="item__wrapper">
        <GatsbyImage image={imageData} alt={name} />

        <div className="info">
          <div className="name">
            <Paragraph>{name}</Paragraph>
          </div>
          <div className="title">
            <Paragraph>{title} </Paragraph>
          </div>
        </div>
      </div>
    </ItemStyles>
  );
}
