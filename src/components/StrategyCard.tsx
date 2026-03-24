interface StrategyCardProps {
  title: string;
  description: string;
  instead: string | string[];
  try: string[];
  note: string;
}

export default function StrategyCard({ title, description, instead, try: tryList, note }: StrategyCardProps) {
  const insteadArray = Array.isArray(instead) ? instead : [instead];

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>

      <div className="space-y-3">
        <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
          <p className="text-sm font-medium text-red-900 mb-1">Instead of:</p>
          {insteadArray.map((item, i) => (
            <p key={i} className="text-sm text-red-800 italic">&ldquo;{item}&rdquo;</p>
          ))}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
          <p className="text-sm font-medium text-green-900 mb-1">Try:</p>
          {tryList.map((item, i) => (
            <p key={i} className="text-sm text-green-800">&ldquo;{item}&rdquo;</p>
          ))}
        </div>

        <p className="text-sm text-slate-600 italic mt-2">{note}</p>
      </div>
    </div>
  );
}
