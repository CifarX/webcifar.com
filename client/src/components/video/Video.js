import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PlayButton from './PlayButton';
import CloseButton from '../CloseButton';
import { VideoStyles } from './Video.Styles';

export default function Video() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleClickModel1 = () => {
    setShowModal1(!showModal1);
  };
  const handleClickModel2 = () => {
    setShowModal2(!showModal2);
  };
  useEffect(() => {
    if (showModal1 || showModal2) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [showModal1, showModal2]);
  return (
    <>
      <VideoStyles>
        <div
          className="video__wrapper"
          onClick={handleClickModel1}
          role="button"
          tabIndex="0"
          onKeyDown={handleClickModel1}
        >
          <div className="video__thumbnail">
            <StaticImage
              aspectRatio={1 / 1}
              className="purpleBG"
              src="../../assets/images/client_rev.png"
              alt="background image light"
              placeholder="Blurred"
              transformOptions={{ fit: 'cover' }}
              backgroundColor="transparent"
            />
          </div>
          <PlayButton onClick={handleClickModel1} />
          {showModal1 ? (
            <div className="video__modal__wrapper">
              <div className="video__modal">
                <div
                  className="video__modal__close"
                  onClick={handleClickModel1}
                  onKeyDown={handleClickModel1}
                  tabIndex="0"
                  role="button"
                >
                  <CloseButton />
                </div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/i4395ChjrYg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </VideoStyles>
      <VideoStyles>
        <div
          className="video__wrapper"
          onClick={handleClickModel2}
          role="button"
          tabIndex="0"
          onKeyDown={handleClickModel2}
        >
          <div className="video__thumbnail">
            <StaticImage
              aspectRatio={1 / 1}
              className="purpleBG"
              src="../../assets/images/client_rev2.png"
              alt="background image light"
              placeholder="Blurred"
              transformOptions={{ fit: 'cover' }}
              backgroundColor="transparent"
            />
          </div>
          <PlayButton onClick={handleClickModel2} />
          {showModal2 ? (
            <div className="video__modal__wrapper">
              <div className="video__modal">
                <div
                  className="video__modal__close"
                  onClick={handleClickModel2}
                  onKeyDown={handleClickModel2}
                  tabIndex="0"
                  role="button"
                >
                  <CloseButton />
                </div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/VTidK_nRZTo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </VideoStyles>
    </>
  );
}
