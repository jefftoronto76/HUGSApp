interface SectionProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlight';
}

export default function Section({ title, children, variant = 'default' }: SectionProps) {
  const bgColor = variant === 'highlight' ? 'bg-blue-50' : 'bg-white';

  return (
    <section className={`${bgColor} rounded-lg p-8 shadow-sm border border-slate-200`}>
      {title && <h2 className="text-2xl font-semibold text-slate-900 mb-6">{title}</h2>}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
