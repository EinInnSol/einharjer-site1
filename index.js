
export default function Home() {
  return (
    <div className="p-8 space-y-6 text-center">
      <h1 className="text-4xl font-bold text-blue-900">EINHARJER INNOVATIVE SOLUTIONS</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Building trust, equity, and impact through trauma-informed outreach and real-time data storytelling.
      </p>
      <div className="space-x-4 mt-6">
        <a href="/storygraph" className="inline-block px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
          View StoryGraph™ Dashboard
        </a>
        <a href="/services" className="inline-block px-6 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-900">
          Our Services
        </a>
        <a href="/law-firms" className="inline-block px-6 py-2 bg-green-700 text-white rounded shadow hover:bg-green-800">
          For Law Firms
        </a>
      </div>
    </div>
  );
}
