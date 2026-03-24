import React from 'react';

interface GuideLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const GuideLayout: React.FC<GuideLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '680px',
        width: '100%',
      }}>
        <header style={{
          marginBottom: '32px',
          paddingBottom: '24px',
          borderBottom: '1px solid #e0e6ed',
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#1a2332',
            marginBottom: '8px',
            lineHeight: '1.3',
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{
              fontSize: '16px',
              color: '#5a6c7d',
              lineHeight: '1.5',
            }}>
              {subtitle}
            </p>
          )}
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default GuideLayout;