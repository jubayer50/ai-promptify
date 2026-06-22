"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const GrowthChart = ({ prompts }) => {
  const promptGrowth = prompts.reduce((acc, prompt) => {
    const month = new Date(prompt.createdAt).toLocaleString("en-US", {
      month: "short",
    });

    const existingMonth = acc.find((item) => item.month === month);

    if (existingMonth) {
      existingMonth.prompts += 1;
    } else {
      acc.push({
        month,
        prompts: 1,
      });
    }

    return acc;
  }, []);

  // const promptGrowth = [
  //   { month: "Jan", prompts: 2 },
  //   { month: "Feb", prompts: 5 },
  //   { month: "Mar", prompts: 8 },
  //   { month: "Apr", prompts: 12 },
  //   { month: "May", prompts: 18 },
  //   { month: "Jun", prompts: 24 },
  // ];

  return (
    <div className="border rounded-xl p-4">
      <h3 className="font-bold text-xl mb-4">Prompt Growth</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={promptGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="prompts"
              stroke="#EC4899"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthChart;
