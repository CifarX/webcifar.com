import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io5';
import { SiPostgresql } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import Paragraph from '../Paragraph';
import groupPic from '../../assets/images/group_pic.png';
import aboutImg from '../../assets/images/about_img.jpg';
import { AboutStyles } from './AboutSection.styles';

export default function AboutSection() {
  const aboutStackEl = useRef(null);

  useEffect(() => {
    const stackItems = Array.from(aboutStackEl.current.children);
    // console.log(stackItems);
    const aboutTl = gsap.timeline();
    aboutTl.fromTo(
      stackItems,
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
          trigger: aboutStackEl.current,
          start: '30% 80%',
          end: '50% 70%',
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <AboutStyles name="about">
      <div className="container">
        <div className="about__left">
          <div className="about__left__imgWrapper">
            <img className="img1" src={aboutImg} alt="" />
            <div className="img2">
              <img src={groupPic} alt="" />
            </div>
          </div>
        </div>
        <div className="about__right">
          <SectionTitle>About The Team</SectionTitle>
          <Paragraph>
            We are a team of some creative people who make websites with
            passion. Most of the members of this team are from Bangladesh. In
            web cifar, we are a family. Here, Everyone is a master of a specific
            skill and responsible for specific tasks. This helps us to ensure
            the quality works. And we enjoy doing the process.
          </Paragraph>
          <div className="about__stack">
            <h3 className="about__stack__title">Our Stack</h3>
            <div className="about__stack__row" ref={aboutStackEl}>
              <div>
                <IoLogoJavascript />
                <p>JavaScript</p>
              </div>
              <div>
                <IoLogoPython />
                <p>Python</p>
              </div>
              <div>
                <SiPostgresql />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}
