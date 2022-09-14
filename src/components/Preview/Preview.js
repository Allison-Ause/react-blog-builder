import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, text, font, alignment }) {
  return (
    <div className={`preview ${font}`} style={{ textAlign: alignment }}>
      <h1>Blog Preview</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{text}</p>
    </div>
  );
}
