export default function Updates() {
  const updates = [
    { date: 'Jun 21, 2025', text: 'Rebuilt this site around a backend/systems-design focus instead of frontend work.' },
    { date: 'Jun 13, 2025', text: 'Shipped a movie-search React app to Netlify; next step is adding debouncing to cut down on redundant API calls.' },
    { date: 'Jun 10, 2025', text: 'Started a password-manager backend with Node.js, Express, and Clerk for auth.' },
  ];

  return (
    <section id="updates" className="px-6 pb-8">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-[#B45309] dark:text-[#FBBF24] mb-4">
          GET /updates
        </p>
        <ul className="space-y-3">
          {updates.map((update, idx) => (
            <li key={idx} className="text-sm text-[#1B1F27]/80 dark:text-[#E8E6DE]/80 border-l-2 border-black/[0.08] dark:border-white/[0.08] pl-4">
              <span className="font-mono text-[#6B7280] dark:text-[#8A8F98]">{update.date}</span> — {update.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
