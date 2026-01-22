export default function StatCard({ title, value, change }) {
  const isPositive = change.includes("+");

  return (
    <div className="bg-white dark:bg-black p-2 rounded-xl shadow 
                    border border-black/10 dark:border-white/10">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm">
        {title}
      </h3>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-xl font-bold text-black dark:text-white">
          {value}
        </span>

        <span
          className={`text-sm font-medium ${
            isPositive ? "text-green-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
