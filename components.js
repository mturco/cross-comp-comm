import React from 'react';

export const Name = ({ children }) => (
  <p style={{ fontWeight: 'bold', margin: '0.5em 0' }}>
    {children}
  </p>
);

export const Pattern = ({ active, children }) =>
  active ? (
    <h3>→ {children}</h3>
  ) : (
    <p style={{ color: '#777' }}>{children}</p>
  );
