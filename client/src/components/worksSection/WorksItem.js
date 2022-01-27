import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GoLinkExternal } from 'react-icons/go';
import worksImg from '../../assets/images/works_img.jpg';
import Paragraph from '../Paragraph';
import { WorkItemStyles } from './WorksSection.Styles';

export default function WorksItem({
  title,
  client,
  type,
  stack,
  thumbnail = worksImg,
  link,
}) {
  return (
    <WorkItemStyles>
      <div className="item">
        <div className="item__left">
          <GatsbyImage image={thumbnail} alt={title} />
        </div>
        <div className="item__right">
          <div className="item__top">
            <div className="project__type">
              <Paragraph>{type}</Paragraph>
            </div>
            <div className="project__title">
              <h3>{title}</h3>
            </div>
            <div className="project__stack">
              <Paragraph>{stack.join(', ')} </Paragraph>
            </div>
            {client ? (
              <div className="project__client">
                <Paragraph>Client: {client}</Paragraph>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="item__bottom">
            <div className="project__button">
              <a href={link} rel="noopener noreferrer" target="_blank">
                Details <GoLinkExternal />
              </a>
            </div>
          </div>
        </div>
      </div>
    </WorkItemStyles>
  );
}
