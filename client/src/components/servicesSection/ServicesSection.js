import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ServicesItem from './ServicesItem';
import icon1 from '../../assets/images/services_icons/Icon1.svg';
import icon2 from '../../assets/images/services_icons/Icon2.svg';
import icon3 from '../../assets/images/services_icons/Icon3.svg';
import { ServicesSectionStyles } from './ServicesSection.styles';

export default function ServicesSection() {
  const serviceEl = useRef(null);
  useEffect(() => {
    const serviceItems = Array.from(serviceEl.current.children);
    const serviceTl = gsap.timeline({ delay: 0.5 });
    // console.log(leftEl);
    serviceTl.fromTo(
      serviceItems,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: serviceEl.current,
          start: 'top 75%',
          end: '100px 65%',
          // markers: true,
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <ServicesSectionStyles name="services">
      <div className="container">
        <div className="services__allItems" ref={serviceEl}>
          <ServicesItem
            icon={icon1}
            title="UI/UX Design"
            desc="We provide high-quality design for websites. It's important to have unique and attractive designs so that your audience sticks around with the site."
          />
          <ServicesItem
            icon={icon2}
            title="Web Design"
            desc="We create websites that will bring value to your business. Here you can expect your dream website to built."
          />
          <ServicesItem
            icon={icon3}
            title="Web Dev"
            desc="Armed with the newest technology, our front and back-end development teams bring your designs to life. We develop for the now and build for the longer term."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}
