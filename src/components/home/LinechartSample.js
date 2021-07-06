import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartSample = ({ data }) => {
  return (
    <div>
      <LineChart width={200} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="식중독지수"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <LineChart width={200} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="천식폐질환가능지수"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <LineChart width={200} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="뇌졸증가능지수"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <LineChart width={200} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="피부질환가능지수"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default LineChartSample;
