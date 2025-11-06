import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative py-20 bg-gradient-to-br from-emerald-500 to-cyan-500 text-black">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to supercharge your ad operations?
          </h3>
          <p className="mt-3 text-black/70">
            Start free, connect your channels, and go live in under 10 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white hover:bg-neutral-900 px-5 py-3 font-medium transition-colors"
            >
              Create Workspace
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/60 hover:bg-white/70 text-black px-5 py-3 font-medium transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
