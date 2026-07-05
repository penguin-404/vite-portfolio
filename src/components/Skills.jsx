export default function Skills() {
  const groups = [
    {
      label: 'Languages & Runtime',
      items: ['JavaScript (ES6+)', 'TypeScript', 'Node.js'],
    },
    {
      label: 'Backend & APIs',
      items: ['Express.js', 'REST APIs', 'JWT & OAuth', 'WebSockets'],
    },
    {
      label: 'Data',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose / Prisma'],
    },
    {
      label: 'Systems & Tooling',
      items: ['Docker', 'Git & CI/CD', 'Linux', 'System Design Basics'],
    },
  ];

  return (
    <section id="stack" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-[#B45309] dark:text-[#FBBF24] mb-2">
          GET /stack
        </p>
        <h2 className="text-2xl font-bold text-[#1B1F27] dark:text-[#E8E6DE] mb-10">What I build with</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-[#6B7280] dark:text-[#8A8F98] mb-3">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#151719] px-4 py-3 text-sm text-[#1B1F27] dark:text-[#E8E6DE] hover:border-[#16A34A]/40 dark:hover:border-[#4ADE80]/40 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
