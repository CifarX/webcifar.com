import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../Button';
import { ContactBannerStyles } from './ContactSection.styles';

export default function ContactBanner() {
  const animationEl = useRef(null);

  useEffect(() => {
    const animationItems = Array.from(animationEl.current.children);
    const animationTl = gsap.timeline();
    animationTl.fromTo(
      animationItems,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 1.2,
        scrollTrigger: {
          trigger: animationEl.current,
          start: '20% 80%',
          end: '100px 70%',
          scrub: 1,
          // markers: true,
        },
      }
    );
  });

  return (
    <ContactBannerStyles>
      <div className="container" ref={animationEl}>
        <div className="bg" />
        <div className="banner__wrapper">
          <h2 className="banner__title">Have a project in mind ?</h2>
          <div className="banner__button">
            <Button btnLink="contact">Contact Now</Button>
          </div>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
