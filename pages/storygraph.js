
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '90802', engagements: 112 },
  { name: '90805', engagements: 78 },
  { name: '90813', engagements: 156 },
];

export default function StoryGraphPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">📊 StoryGraph™ Dashboard</h1>
      <p className="text-gray-600 max-w-xl">
        Real-time community engagement insights from ZIP-level outreach. These charts reflect the types of data we collect and report for partners, city agencies, and legal aid teams.
      </p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="engagements" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-500">Data is simulated for demo purposes.</p>
    </div>
  );
}
