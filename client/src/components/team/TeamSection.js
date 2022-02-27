import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import gsap from 'gsap';
import Paragraph from '../typography/Paragraph';
import SectionTitle from '../typography/SectionTitle';
import TeamItem from './TeamItem';
import { TeamBgEl, TeamSectionStyles } from './Team.styles';

export default function TeamSection() {
  const {
    data: { nodes: team },
  } = useStaticQuery(graphql`
    {
      data: allSanityTeam {
        nodes {
          _id
          name
          title
          sortPriority
          image {
            asset {
              gatsbyImageData(
                fit: FILL
                formats: AUTO
                placeholder: BLURRED
                height: 300
                width: 300
              )
            }
          }
        }
      }
    }
  `);
  console.log(team);
  team.sort((a, b) => {
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

  // animation
  const animationEl = useRef(null);
  useEffect(() => {
    const animationItems = Array.from(animationEl.current.children);

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
          start: 'top 70%',
          end: '100px 60%',
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <TeamBgEl>
      <div className="bg" />
      <TeamSectionStyles>
        <div className="heading">
          <SectionTitle>Team Members</SectionTitle>
          <Paragraph className="paragraph">
            People Behind The Amazing Works
          </Paragraph>
        </div>
        <div className="team__wrapper" ref={animationEl}>
          {team.map((item) => (
            <TeamItem
              key={item._id}
              name={item.name}
              title={item.title}
              imageData={item.image.asset.gatsbyImageData}
            />
          ))}
          {/* <TeamItem /> */}
        </div>
      </TeamSectionStyles>
    </TeamBgEl>
  );
}
