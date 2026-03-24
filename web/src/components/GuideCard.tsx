import React from 'react';

interface GuideCardProps {
  title?: string;
  children: React.ReactNode;
}

const GuideCard: React.FC<GuideCardProps> = ({ title, children }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e0e6ed',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '16px',
    }}>
      {title && (
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1a2332',
          marginBottom: '12px',
          lineHeight: '1.4',
        }}>
          {title}
        </h3>
      )}
      <div style={{
        fontSize: '15px',
        color: '#2c3e50',
        lineHeight: '1.6',
      }}>
        {children}
      </div>
    </div>
  );
};

export default GuideCard;