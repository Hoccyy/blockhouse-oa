import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface LineChart {
    data: any
}

const LineChart: React.FC<LineChart>  = ({
    data,
}) => {

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Line Chart Data',
        data: data.data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div title='Line Chart Example'>
      <Line data={chartData} style={{
        width: `80%`,
        height: '300px',
        backgroundColor: '#262626',
        borderRadius: '5px',
        padding: '4px'}}/>
    </div>
  );
};

export default LineChart;
