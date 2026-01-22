import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 700 },
  { name: "May", users: 900 },
  { name: "Jun", users: 1200 },
  { name: "Jul", users: 1000 },
  { name: "Aug", users: 800 },
  { name: "Sept", users: 1100 },
  { name: "Oct", users: 1300 },
  { name: "Nov", users: 1500 },
  { name: "Dec", users: 1800 },

];

export default function ChartCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-[350px]">
      <h2 className="text-lg font-semibold mb-4">User Growth</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
