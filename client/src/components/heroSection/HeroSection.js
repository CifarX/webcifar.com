import { StaticImage } from 'gatsby-plugin-image';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import toast from 'react-hot-toast';
import Button from '../Button';
import Heading from './HeroSectionTitle';
import Paragraph from '../typography/Paragraph';
import { HeroSectionBgElStyles, HeroSectionStyles } from './HeroSection.styles';

export default function HeroSection() {
  const leftEl = useRef(null);
  const heroRightImg = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from(leftEl.current.querySelectorAll('*'), {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
    });
    tl.from(
      heroRightImg.current,
      {
        opacity: 0,
        y: 30,
        duration: 1,
      },
      '-=1.5',
    );
  }, []);

  return (
    <HeroSectionStyles name="hero">
      <HeroSectionBgElStyles>
        <div className="bgEl__purple">
          <StaticImage
            aspectRatio={1 / 1}
            className="purpleBG"
            src="../../assets/images/hero_bg_light/purple.png"
            alt="background image light"
            placeholder="Blurred"
            transformOptions={{ fit: 'contain' }}
            backgroundColor="transparent"
          />
        </div>
        <div className="bgEl__green">
          <StaticImage
            width={500}
            aspectRatio={1 / 1}
            className="greenBg"
            src="../../assets/images/hero_bg_light/green.png"
            alt="background image light"
            placeholder="Blurred"
            transformOptions={{ fit: 'contain' }}
            backgroundColor="transparent"
          />
        </div>
        <div className="bgEl__blue">
          <StaticImage
            // width={500}
            aspectRatio={1 / 1}
            className="blueBg"
            src="../../assets/images/hero_bg_light/blue.png"
            alt="background image light"
            placeholder="Blurred"
            transformOptions={{ fit: 'contain' }}
            backgroundColor="transparent"
          />
        </div>
      </HeroSectionBgElStyles>
      <div className="container">
        <div ref={leftEl} className="hero__left">
          <div className="hero__title">
            <Heading>
              We create high
              {' '}
              <br />
              {' '}
              performance
              {' '}
              <br />
              Websites
            </Heading>
          </div>
          <Paragraph className="paragraph">
            A masterful team that executes engagement with accuracy,
            proficiency, and innovation.
          </Paragraph>
          <div className="hero__buttons">
            <Button to="works" smooth>
              See Works
            </Button>
            <Button primary={false} to="contact" smooth>
              Hire Us
            </Button>
          </div>
        </div>
        <div className="hero__right">
          <div ref={heroRightImg} className="hero__right__img" />
        </div>
      </div>
    </HeroSectionStyles>
  );
}
