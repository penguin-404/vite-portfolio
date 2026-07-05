import React from 'react'

export default function Home() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center px-6 py-20">
      <div className="max-w-2xl w-full mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-[#B45309] dark:text-[#FBBF24] mb-4">
          GET /whoami
        </p>

        <div className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#151719] overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-black/[0.08] dark:border-white/[0.08]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
            <span className="ml-3 font-mono text-xs text-[#6B7280] dark:text-[#8A8F98]">whoami.js</span>
          </div>

          <div className="p-6 font-mono text-sm sm:text-base leading-relaxed text-[#1B1F27] dark:text-[#E8E6DE]">
            <p><span className="text-[#16A34A] dark:text-[#4ADE80]">$</span> node whoami.js</p>
            <p className="mt-3"><span className="text-[#6B7280] dark:text-[#8A8F98]">name:</span> Kaushal Yadav</p>
            <p><span className="text-[#6B7280] dark:text-[#8A8F98]">role:</span> Backend Developer</p>
            <p><span className="text-[#6B7280] dark:text-[#8A8F98]">stack:</span> Node.js, Express, MongoDB, PostgreSQL</p>
            <p><span className="text-[#6B7280] dark:text-[#8A8F98]">focus:</span> APIs, data modeling, system design</p>
            <p className="mt-3">
              <span className="text-[#6B7280] dark:text-[#8A8F98]">status:</span>{' '}
              <span className="text-[#16A34A] dark:text-[#4ADE80]">●</span> open to backend roles
            </p>
          </div>
        </div>

        <p className="mt-8 text-base sm:text-lg text-[#1B1F27]/80 dark:text-[#E8E6DE]/80 leading-relaxed">
          I design and build the parts of an app users never see directly — APIs, databases,
          and the systems that keep them fast and reliable under real load.
        </p>
      </div>
    </section>
  )
}
