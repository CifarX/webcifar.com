import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { graphql, useStaticQuery } from 'gatsby';
import SwiperCore, { Navigation } from 'swiper';
import gsap from 'gsap';
import SectionTitle from '../typography/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import TestimonialItem from './TestimonialItem';
import Paragraph from '../typography/Paragraph';
import Video from '../video/Video';
import {
  TestimonialStyles,
  TestimonialVideosStyles,
} from './Testimonials.Styles';

// install Swiper modules
SwiperCore.use([Navigation]);

export default function TestimonialsSection() {
  const { data } = useStaticQuery(graphql`
    {
      data: allSanityTestimonial {
        nodes {
          name
          title
          org
          description
          country
          _createdAt
          _id
        }
      }
    }
  `);
  data.nodes.sort((a, b) => {
    const aDate = new Date(a._createdAt);
    const bDate = new Date(b._createdAt);
    return bDate - aDate;
  });

  // scroll animation
  const videoEl = useRef(null);
  const testimonialEl = useRef(null);
  useEffect(() => {
    const swiperItems = testimonialEl.current.querySelector('.swiper-wrapper');
    const testimonialTl = gsap.timeline();
    testimonialTl.fromTo(
      swiperItems,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialEl.current,
          start: 'top 70%',
          end: '100px 60%',
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <>
      <TestimonialStyles>
        <div className="container">
          <div className="testimonial__title">
            <SectionTitle>
              What Our Trusted <br /> Client Say
            </SectionTitle>
          </div>
          <div className="testimonial__subTitle">
            <Paragraph className="paragraph">
              Client satisfaction is our main priority. We always welcome the
              positive feedback we receive from our clients. Here’s what they’re
              saying about us.
            </Paragraph>
          </div>
          <div className="testimonial__wrapper" ref={testimonialEl}>
            <div className="arrow-bg" />
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.nodes.map((item) => (
                // if (index >= 5) return;
                <SwiperSlide key={item._id}>
                  <TestimonialItem
                    name={item.name}
                    desc={item.description}
                    org={item.org}
                    title={item.title}
                    country={item.country}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </TestimonialStyles>
      <TestimonialVideosStyles ref={videoEl}>
        <div className="container">
          <Video />
        </div>
      </TestimonialVideosStyles>
    </>
  );
}
