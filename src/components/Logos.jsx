import React from 'react';

const logos = [
  { name: 'DriveForce', color: '#22c55e' },
  { name: 'AutoPulse', color: '#06b6d4' },
  { name: 'TrackLine', color: '#a3e635' },
  { name: 'RevMedia', color: '#f59e0b' },
  { name: 'TorqueAds', color: '#60a5fa' },
  { name: 'FleetIQ', color: '#f43f5e' },
];

const Logos = () => {
  return (
    <section className="bg-neutral-950 py-10">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center py-3 rounded-lg border border-white/10 bg-white/5">
              <span className="text-sm font-medium tracking-wide" style={{ color: logo.color }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
