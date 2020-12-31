import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Debt } from '../lib/data-service';

type ChartProps = {
  data: [Debt];
};

const Chart: React.FC<ChartProps> = ({ data }) => (
  <div style={{ width: '100%', height: '200px' }}>
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} tickLine={false} dataKey="date" />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Area
          legendType="none"
          activeDot={{ stroke: 'red', strokeWidth: 4, r: 2 }}
          dot={{ stroke: '#2E71F3', strokeWidth: 2 }}
          type="monotone"
          dataKey="value"
          stroke="#2E71F3"
          strokeWidth="3px"
          fill="rgba(46, 113, 243, 0.1)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
