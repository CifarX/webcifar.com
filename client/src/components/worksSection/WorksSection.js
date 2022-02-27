import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { gsap } from 'gsap';
import SectionTitle from '../typography/SectionTitle';
import WorksItem from './WorksItem';
import { WorksSectionBgEl, WorksSectionStyles } from './WorksSection.Styles';

export default function WorksSection() {
  const projectEl = useRef(null);
  useEffect(() => {
    const projectItems = projectEl.current.children;
    const workTl = gsap.timeline();
    workTl.fromTo(
      projectItems,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        // stagger: 0.2,
        scrollTrigger: {
          trigger: projectEl.current,
          start: 'top 75%',
          end: '100px 65%',
          // markers: true,
          scrub: 1,
        },
      }
    );
  }, []);

  const {
    data: { nodes: projects },
  } = useStaticQuery(graphql`
    {
      data: allSanityProjects {
        nodes {
          _id
          name
          stack
          client
          type
          link
          _createdAt
          sortPriority
          image {
            asset {
              gatsbyImageData(
                fit: FILL
                placeholder: BLURRED
                layout: FULL_WIDTH
                height: 140
                width: 200
              )
            }
          }
        }
      }
    }
  `);
  projects.sort((a, b) => {
    const textA = a.sortPriority.toUpperCase();
    const textB = b.sortPriority.toUpperCase();
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }
    return 0;
  });
  return (
    <WorksSectionBgEl>
      <div className="bg" />
      <WorksSectionStyles name="works">
        <div className="container">
          <SectionTitle>Recent Works</SectionTitle>
          <div className="works__wrapper" ref={projectEl}>
            {projects.map((item) => (
              <WorksItem
                title={item.name}
                key={item._id}
                client={item.client}
                stack={item.stack}
                type={item.type}
                thumbnail={item.image.asset.gatsbyImageData}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </WorksSectionStyles>
    </WorksSectionBgEl>
  );
}
