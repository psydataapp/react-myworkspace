import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartSample = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sido" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="지역별건강보건지수" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartSample;
