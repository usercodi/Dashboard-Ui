import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5", uv: 5000 },
  { name: "9", uv: 4000 },
  { name: "11", uv: 3000 },
  { name: "13", uv: 2000 },
  { name: "15", uv: 2780 },
  { name: "17", uv: 1890 },
  { name: "19", uv: 2390 },
  { name: "21", uv: 15000 },
  { name: "23", uv: 6000 },
  { name: "25", uv: 10000 },
  { name: "27", uv: 5000 },
];

const ActivityChart = () => {
  return (
    <div style={{ backgroundColor: "#1E1E2F", padding: "20px", borderRadius: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <h2 style={{ color: "#FFFFFF" }}>Activity</h2>
        <select style={{
          backgroundColor: "#2C2C3D",
          color: "#FFFFFF",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
        }}>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
          <XAxis dataKey="name" stroke="#AAA" tick={{ fill: "#FFF" }} />
          <YAxis stroke="#AAA" tick={{ fill: "#FFF" }} tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2C2C3D",
              borderRadius: "5px",
              border: "none",
            }}
            itemStyle={{ color: "#FFFFFF" }}
            cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
          />
          <Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
