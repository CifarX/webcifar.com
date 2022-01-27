import React from 'react';

export default function CloseButton() {
  return (
    <div>
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M41 3H7C4.79086 3 3 4.79086 3 7V41C3 43.2091 4.79086 45 7 45H41C43.2091 45 45 43.2091 45 41V7C45 4.79086 43.2091 3 41 3Z"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M13.5 13.5L34.5 34.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M34.5 13L13.5 34"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
