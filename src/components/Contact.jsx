import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-[#B45309] dark:text-[#FBBF24] mb-2">
          GET /contact
        </p>
        <h2 className="text-2xl font-bold text-[#1B1F27] dark:text-[#E8E6DE] mb-8">Get in touch</h2>

        <div className="border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#151719] rounded-lg p-6 sm:p-8 space-y-6">
          <p className="text-[#1B1F27]/80 dark:text-[#E8E6DE]/80">
            Prefer email? I'm just a click away.
          </p>

          <div className="flex items-center text-[#1B1F27]/80 dark:text-[#E8E6DE]/80">
            <svg className="w-5 h-5 text-[#B45309] dark:text-[#FBBF24]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-3 text-sm font-medium">Kathmandu, Nepal</span>
          </div>

          <div className="flex items-center text-[#1B1F27]/80 dark:text-[#E8E6DE]/80">
            <svg className="w-5 h-5 text-[#B45309] dark:text-[#FBBF24]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="ml-3 text-sm font-medium">madebykaushal@gmail.com</span>
          </div>

          <a
            href="mailto:madebykaushal@gmail.com"
            className="inline-block bg-[#22C55E] hover:opacity-90 text-[#0B0C0E] font-semibold py-3 px-6 rounded-lg transition"
          >
            Send an Email →
          </a>
        </div>
      </div>
    </section>
  );
}
