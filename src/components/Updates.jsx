export default function Updates() {
  const updates = [
    { date: 'Jun 21, 2025', text: 'Redesigned my portfolio website with Tailwind + React' },
    { date: 'Jun 13, 2025', text: 'Made a React app and deployed it in Netlify that allows you to search for the movies from the keywords provided by the user. I need to implement the Debouncing concept to make the app more effective and to reduce the network overhead.' },
    { date: 'Jun 10, 2025', text: 'Started building password manager app using Next.js + Clerk' },
  ];

  return (
    <div className="h-[75vh] bg-gray-800 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-orange-400 text-left">Updates</h1>

        <ul className="space-y-4 text-lg text-justify">
          {updates.map((update, idx) => (
            <li key={idx} className="before:content-['-'] before:mr-2">
              <span className="text-gray-400 font-medium">{update.date}</span> — {update.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
