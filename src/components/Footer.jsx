import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: '#020205' }}>
      <p style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.7)' }}>
        &copy; 2025 IET On Campus UET Lahore. All rights reserved.
      </p>
      <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)' }}>
        Made using a single prompt by vibe coder
      </p>
    </footer>
  );
};

export default Footer;
