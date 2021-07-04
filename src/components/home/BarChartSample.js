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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sido" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="today" fill="#8884d8" />
       
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartSample;
