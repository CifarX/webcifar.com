import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../Button';
import SectionTitle from '../typography/SectionTitle';
import Paragraph from '../typography/Paragraph';
import PriceCardSVG from './PriceCardSVG';
import { PriceSectionBgEl, PriceSectionStyles } from './PriceSection.styles';

export default function PriceSection() {
  const animationEl = useRef(null);
  useEffect(() => {
    const animationItems = animationEl.current.children;
    const tl = gsap.timeline();
    tl.fromTo(
      animationItems,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 1.2,
        duration: 1,
        scrollTrigger: {
          trigger: animationEl.current,
          start: 'top 80%',
          end: '20% 70%',
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <PriceSectionBgEl>
      <div className="bg" />
      <PriceSectionStyles id="priceBanner">
        <div className="container">
          <div className="price__left">
            <div className="price__left__wrapper">
              <SectionTitle className="title">
                Get Website In Budget
              </SectionTitle>
              <Paragraph className="paragraph">
                Our main priority is the client’s interest. We like to keep our
                approach flexible and have a focus on branding, design and web
                development. We help people to create their dream website. Build
                your desire website for your business at an affordable price.
              </Paragraph>
              <div className="price__left__button">
                <Button to="contact" primary smooth>
                  Get Now
                </Button>
              </div>
            </div>
          </div>
          <div className="price__right" ref={animationEl}>
            <PriceCardSVG />
          </div>
        </div>
      </PriceSectionStyles>
    </PriceSectionBgEl>
  );
}
