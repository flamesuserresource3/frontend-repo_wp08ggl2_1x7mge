import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Megaphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-black text-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            <Megaphone className="h-4 w-4 text-emerald-300" />
            <span className="text-xs text-white/80">New</span>
            <span className="text-xs text-white/60">Automotive Ad Manager 2.0</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Launch high‑impact automotive ads in minutes
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl">
            A dynamic, high‑energy plugin that helps agencies and dealers plan, deploy, and optimize cross‑channel campaigns with real‑time insights.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 transition-colors"
            >
              <Rocket className="h-4 w-4" />
              Get Started Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium px-5 py-3 transition-colors"
            >
              See Features
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-white/70">
            <div className="text-sm">Trusted by performance‑driven brands</div>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
