import React from 'react';
import GuideLayout from '../components/GuideLayout';
import GuideSection from '../components/GuideSection';
import GuideCard from '../components/GuideCard';
import PrincipleBlock from '../components/PrincipleBlock';
import guideData from '../guides/strokeSupport.json';

const StrokeSupportGuide: React.FC = () => {
  return (
    <GuideLayout title={guideData.title} subtitle={guideData.subtitle}>
      {guideData.sections.map((section, index) => {
        if (section.type === 'intro') {
          return (
            <GuideSection key={index} title={section.title}>
              <p style={{
                fontSize: '15px',
                color: '#2c3e50',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}>
                {section.content}
              </p>
            </GuideSection>
          );
        }

        if (section.type === 'principles' && section.items) {
          return (
            <GuideSection key={index} title={section.title}>
              {section.items.map((item: any) => (
                <PrincipleBlock
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                  examples={item.examples}
                />
              ))}
            </GuideSection>
          );
        }

        if (section.type === 'cards' && section.items) {
          return (
            <GuideSection key={index} title={section.title}>
              {section.items.map((item: any, itemIndex: number) => (
                <GuideCard key={itemIndex} title={item.title}>
                  {item.content}
                </GuideCard>
              ))}
            </GuideSection>
          );
        }

        if (section.type === 'outro') {
          return (
            <GuideSection key={index}>
              <p style={{
                fontSize: '15px',
                color: '#2c3e50',
                lineHeight: '1.6',
                padding: '20px',
                backgroundColor: '#f8fafb',
                borderLeft: '4px solid #4a7c9e',
                borderRadius: '4px',
              }}>
                {section.content}
              </p>
            </GuideSection>
          );
        }

        return null;
      })}
    </GuideLayout>
  );
};

export default StrokeSupportGuide;