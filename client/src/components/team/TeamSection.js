import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import gsap from 'gsap';
import Paragraph from '../Paragraph';
import SectionTitle from '../SectionTitle';
import TeamItem from './TeamItem';
import TriangleImg from '../../assets/images/triangle.svg';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    max-width: 700px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  .heading {
    margin-bottom: 3rem;
    .Paragraph {
      color: var(--blue-3);
      font-size: 1.8rem;
      font-family: Inter;
      font-weight: 300;
    }
  }
`;

const BgEl = styled.div`
  position: relative;
  .bg {
    position: absolute;
    width: 80vw;
    height: 80vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 800px;
    max-height: 800px;
    background: url(${TriangleImg}) no-repeat center / contain;
    /* background: red; */
    left: -10%;
    top: 30%;
    z-index: -1;
  }
  @media only screen and (max-width: 1100px) {
    .bg {
      top: 45%;
      left: -25%;
    }
  }
`;

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
    <BgEl>
      <div className="bg" />
      <TeamSectionStyles>
        <div className="heading">
          <SectionTitle>Team Members</SectionTitle>
          <Paragraph>People Behind The Amazing Works</Paragraph>
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
    </BgEl>
  );
}
