import React from 'react';

interface GuideSectionProps {
  title?: string;
  children: React.ReactNode;
}

const GuideSection: React.FC<GuideSectionProps> = ({ title, children }) => {
  return (
    <section style={{
      marginBottom: '32px',
    }}>
      {title && (
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#1a2332',
          marginBottom: '16px',
          lineHeight: '1.4',
        }}>
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
};

export default GuideSection;