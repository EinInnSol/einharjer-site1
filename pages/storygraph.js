
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '90802', engagements: 112 },
  { name: '90805', engagements: 78 },
  { name: '90813', engagements: 156 },
];

export default function StoryGraphPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-4">📊 StoryGraph™ Dashboard</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="engagements" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
