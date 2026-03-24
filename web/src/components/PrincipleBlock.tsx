import React from 'react';

interface PrincipleBlockProps {
  number: number;
  title: string;
  description: string;
  examples?: string[];
}

const PrincipleBlock: React.FC<PrincipleBlockProps> = ({ number, title, description, examples }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e0e6ed',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '16px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}>
        <div style={{
          backgroundColor: '#4a7c9e',
          color: '#ffffff',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: '600',
          flexShrink: 0,
        }}>
          {number}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1a2332',
            marginBottom: '8px',
            lineHeight: '1.4',
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: '15px',
            color: '#2c3e50',
            lineHeight: '1.6',
            marginBottom: examples ? '12px' : '0',
          }}>
            {description}
          </p>
          {examples && examples.length > 0 && (
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {examples.map((example, index) => (
                <li key={index} style={{
                  fontSize: '14px',
                  color: '#5a6c7d',
                  lineHeight: '1.5',
                  marginBottom: '4px',
                  paddingLeft: '16px',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                  }}>•</span>
                  {example}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrincipleBlock;