import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChart {
    data: any
}

const BarChart: React.FC<BarChart> = ({
    data,
}) => {
    if (!data) {
        return null;
    }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Value',
        data: data.data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div title='Bar Chart Example'>
      <Bar data={chartData} options={options} style={{
        width: `80%`,
        height: '300px',
        backgroundColor: '#262626',
        borderRadius: '5px',
        padding: '4px'
        }}/>
    </div>
  );
};

export default BarChart;
