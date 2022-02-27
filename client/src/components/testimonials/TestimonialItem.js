import React from 'react';
import styled from 'styled-components';
import Paragraph from '../typography/Paragraph';

const TestimonialStyles = styled.div`
  background: var(--whiteBlue-2);
  max-width: 500px;
  margin: 0 auto;
  border-radius: 12px;
  padding: 4rem;
  lord-icon {
    margin-top: -3rem;
  }
  .item__desc {
    /* margin-top: -10px; */
    .paragraph {
      color: var(--blue-2);
      font-family: Inter;
      font-weight: 400;
      font-size: 1.6rem;
      text-align: left;
    }
  }
  .item__name {
    margin-top: 3rem;
    .paragraph {
      color: var(--blackBlue-5);
      font-size: 1.6rem;
      text-align: left;
      font-weight: 600;
    }
  }
  .item__title {
    .paragraph {
      text-align: left;
      font-size: 1.4rem;
      color: var(--blue-4);
    }
  }
`;

export default function TestimonialItem({ name, title, org, desc, country }) {
  return (
    <TestimonialStyles>
      <div className="item">
        <lord-icon
          src="https://cdn.lordicon.com/xqnbvely.json"
          trigger="morph-two-way"
          colors="primary:#9BA4AD,secondary:#ffffff"
          stroke="30"
          scale="50"
          style={{ width: '100px', height: '100px' }}
        />
        <div className="item__desc">
          <Paragraph className="paragraph">"{desc}"</Paragraph>
        </div>
        <div className="item__name">
          <Paragraph className="paragraph">{name}</Paragraph>
        </div>
        <div className="item__title">
          {title !== null ? (
            <Paragraph className="paragraph">
              {title} @ {org}
            </Paragraph>
          ) : (
            <Paragraph className="paragraph">{country}</Paragraph>
          )}
        </div>
      </div>
    </TestimonialStyles>
  );
}
