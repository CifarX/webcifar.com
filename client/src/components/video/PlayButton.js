import React from 'react';

export default function PlayButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      focusable
      tabIndex="0"
    >
      <div className="playButton">
        <svg viewBox="0 0 158 158">
          <path
            opacity="0.2"
            d="M79 158C122.63 158 158 122.63 158 79C158 35.3695 122.63 0 79 0C35.3695 0 0 35.3695 0 79C0 122.63 35.3695 158 79 158Z"
            fill="url(#paint0_linear)"
          />
          <path
            opacity="0.3"
            d="M79 139C112.137 139 139 112.137 139 79C139 45.8629 112.137 19 79 19C45.8629 19 19 45.8629 19 79C19 112.137 45.8629 139 79 139Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M79 123C103.301 123 123 103.301 123 79C123 54.6995 103.301 35 79 35C54.6995 35 35 54.6995 35 79C35 103.301 54.6995 123 79 123Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M90.6311 76.5791L70.2001 64.3861C69.7768 64.1309 69.2928 63.9936 68.7985 63.9884C68.3042 63.9833 67.8175 64.1105 67.389 64.357C66.9604 64.6034 66.6057 64.96 66.3614 65.3898C66.1172 65.8195 65.9924 66.3069 66.0001 66.8011V91.1811C65.9957 91.6743 66.1224 92.1597 66.3672 92.5878C66.6121 93.0158 66.9663 93.3711 67.3936 93.6173C67.8209 93.8635 68.3059 93.9918 68.799 93.9889C69.2922 93.9861 69.7757 93.8522 70.2001 93.6011L90.6311 81.4181C91.0488 81.1672 91.3944 80.8125 91.6344 80.3884C91.8744 79.9644 92.0005 79.4854 92.0005 78.9981C92.0005 78.5109 91.8744 78.0319 91.6344 77.6078C91.3944 77.1838 91.0488 76.829 90.6311 76.5781V76.5791Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="5.26667"
              y1="14.8125"
              x2="168.633"
              y2="24.4799"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D2CD2" />
              <stop offset="1" stopColor="#3A1DB0" stopOpacity="0.79" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="23"
              y1="30.25"
              x2="147.076"
              y2="37.5923"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D2CD2" />
              <stop offset="1" stopColor="#3A1DB0" stopOpacity="0.79" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="37.9333"
              y1="43.25"
              x2="128.922"
              y2="48.6344"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D2CD2" />
              <stop offset="1" stopColor="#3A1DB0" stopOpacity="0.79" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
