import React from 'react';

export default function Section({ title, children, ...props }) {
  return (
    <div>
      <section {...props}>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
}
