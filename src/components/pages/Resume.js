import React from 'react';
import ResumePdf from '../../Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a
        href={ResumePdf}
        download="Markell Drake Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download resume </button>
      </a>

    </div>
  );
}
