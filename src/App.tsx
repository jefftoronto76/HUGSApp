import GuideLayout from './components/GuideLayout';
import Section from './components/Section';
import StrategyCard from './components/StrategyCard';
import SituationCard from './components/SituationCard';
import ShareButton from './components/ShareButton';
import guideData from './data/strokeSupport.json';

function App() {
  return (
    <GuideLayout title={guideData.title} subtitle={guideData.subtitle}>
      <Section>
        <p className="text-slate-700 leading-relaxed">{guideData.description}</p>
        <div className="mt-6">
          <ShareButton />
        </div>
      </Section>

      <Section title="About This Guide">
        <p className="text-slate-700 leading-relaxed">{guideData.about}</p>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mt-4">
          <p className="text-sm text-amber-900 font-medium">Disclaimer</p>
          <p className="text-sm text-amber-800 mt-1">{guideData.disclaimer}</p>
        </div>
      </Section>

      <Section title="Why This Matters" variant="highlight">
        <div className="space-y-3">
          {guideData.why.map((item, i) => (
            <p key={i} className="text-slate-700 leading-relaxed">{item}</p>
          ))}
        </div>
      </Section>

      <Section title={guideData.principle.title} variant="highlight">
        <div className="space-y-2">
          {guideData.principle.lines.map((line, i) => (
            <p key={i} className="text-lg font-medium text-slate-900">{line}</p>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed mt-4">{guideData.principleBridge}</p>
      </Section>

      <Section title="Practical Strategies">
        <div className="grid gap-6">
          {guideData.strategies.map((strategy, i) => (
            <StrategyCard
              key={i}
              title={strategy.title}
              description={strategy.description}
              instead={strategy.instead}
              try={strategy.try}
              note={strategy.note}
            />
          ))}
        </div>
      </Section>

      <Section title={guideData.resistanceTitle}>
        <div className="space-y-3 mb-6">
          {guideData.resistanceIntro.map((line, i) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={i} className="text-slate-700 leading-relaxed">
                {parts.map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
                  }
                  return <span key={j}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>
        <div className="grid gap-6">
          {guideData.situations.map((situation, i) => (
            <SituationCard
              key={i}
              title={situation.title}
              description={situation.description}
              avoid={situation.avoid}
              try={situation.try}
              note={situation.note}
            />
          ))}
        </div>
      </Section>

      <Section title={guideData.reminders.title} variant="highlight">
        <ul className="space-y-2">
          {guideData.reminders.items.map((item, i) => (
            <li key={i} className="text-slate-700 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 italic mt-4">{guideData.reminders.note}</p>
      </Section>

      <Section title={guideData.finalRule.title} variant="highlight">
        <div className="space-y-2">
          {guideData.finalRule.lines.map((line, i) => (
            <p key={i} className="text-slate-800 font-medium">{line}</p>
          ))}
        </div>
      </Section>
    </GuideLayout>
  );
}

export default App;
