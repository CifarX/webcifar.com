import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'react-hot-toast';
import ContactBanner from '../components/contact/ContactBanner';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/heroSection/HeroSection';
import Navbar from '../components/navbar/Navbar';
import PriceSection from '../components/priceSection/PriceSection';
import ServicesSection from '../components/servicesSection/ServicesSection';
import TeamSection from '../components/team/TeamSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import WorksSection from '../components/worksSection/WorksSection';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import AboutSection from '../components/aboutSection/AboutSection';
import Loaders from '../components/Loaders';
import Seo from '../components/Seo';

const LayoutStyles = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export default function Home({ location }) {
  const [loading, setLoading] = useState(true);
  const appEl = useRef(null);

  // gsap plugin register
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setLoading(false);
    gsap.to(appEl.current, 0, { css: { visibility: 'visible' } });
    // console.clear();
  }, []);
  return (
    <LayoutStyles>
      <Seo title="Home" location={location} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '15px',
          },
        }}
      />
      <GlobalStyles />
      <Typography />
      {loading ? (
        <Loaders />
      ) : (
        <div ref={appEl} className="app">
          {/* <Loaders /> */}
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <WorksSection />
          <TestimonialsSection />
          <PriceSection />
          <ContactBanner />
          <AboutSection />
          <TeamSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </LayoutStyles>
  );
}
