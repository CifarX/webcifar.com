import React from 'react';
import Paragraph from '../typography/Paragraph';
import Icon from '../../assets/images/services_icons/Icon1.svg';
import { ServiceItemStyles } from './ServicesSection.styles';

export default function ServicesItem({
  icon = Icon,
  title = 'web design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates, vitae quo corporis perferendis ipsa? Quo vero labore odio',
}) {
  return (
    <ServiceItemStyles>
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <h4 className="title">{title}</h4>
      <Paragraph className="paragraph">{desc}</Paragraph>
    </ServiceItemStyles>
  );
}
