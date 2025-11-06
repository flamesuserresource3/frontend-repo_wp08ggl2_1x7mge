import React from 'react';
import Hero from './components/Hero';
import Logos from './components/Logos';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Logos />
      <FeatureGrid />
      <CTA />
      <footer className="bg-neutral-950 border-t border-white/10">
        <div className="container mx-auto px-6 sm:px-8 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Ad Manager Plugin. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
