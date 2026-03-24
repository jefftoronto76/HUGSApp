interface GuideLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function GuideLayout({ title, subtitle, children }: GuideLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-semibold text-slate-900 mb-2">{title}</h1>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </header>
        <main className="space-y-8">{children}</main>
      </div>
    </div>
  );
}
