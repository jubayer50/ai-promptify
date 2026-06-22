"use client";

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const TotalCopiesChart = ({ prompts }) => {
  const monthlyCopies = prompts.reduce((acc, prompt) => {
    const month = new Date(prompt.createdAt).toLocaleString("en-US", {
      month: "short",
    });

    const existingMonth = acc.find((item) => item.month === month);

    if (existingMonth) {
      existingMonth.copies += prompt.copyCount;
    } else {
      acc.push({
        month,
        copies: prompt.copyCount,
      });
    }

    return acc;
  }, []);

  return (
    <div className="border rounded-xl p-4">
      <h3 className="font-bold text-xl mb-4">Total Copies</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyCopies}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="copies" fill="#9333EA" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalCopiesChart;
