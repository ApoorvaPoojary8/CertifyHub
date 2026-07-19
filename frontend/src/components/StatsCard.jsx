import { TrendingUp } from "lucide-react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color = "blue",
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

          <div className="flex items-center gap-1 mt-3 text-green-600 text-sm">
            <TrendingUp size={16} />
            <span>Updated</span>
          </div>
        </div>

        <div
          className={`bg-${color}-100 p-4 rounded-full`}
        >
          <Icon
            size={32}
            className={`text-${color}-600`}
          />
        </div>

      </div>

    </div>
  );
}