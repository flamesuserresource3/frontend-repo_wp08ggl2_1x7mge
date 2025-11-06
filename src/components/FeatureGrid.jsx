import React from 'react';
import { Gauge, BarChart3, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Real‑time Performance',
    desc: 'Live dashboards that track spend, reach, and ROI across every channel.',
  },
  {
    icon: Target,
    title: 'Smart Audience Targeting',
    desc: 'AI‑assisted segments built for automotive: in‑market, owners, and enthusiasts.',
  },
  {
    icon: BarChart3,
    title: 'Cross‑Channel Planning',
    desc: 'Coordinate search, social, CTV, and DOOH in a single streamlined workflow.',
  },
  {
    icon: Zap,
    title: '1‑Click Creative Variants',
    desc: 'Auto‑generate on‑brand variants for trims, offers, and geo‑locations.',
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="relative py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for high‑energy campaigns</h2>
          <p className="mt-3 text-white/70">Everything you need to move fast and scale results without the chaos.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/15 text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
