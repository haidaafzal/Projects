import StatCard from "../components/StatCard";
import { stats } from "../data/stats";
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>

      {/* CHART */}
      <ChartCard />
    </div>
  );
}
