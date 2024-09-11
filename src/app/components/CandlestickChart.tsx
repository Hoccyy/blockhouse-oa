import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { AnyAaaaRecord } from 'dns';

Chart.register(...registerables, CandlestickController, CandlestickElement);

interface CandlestickChart {
  data: any
}

const CandlestickChart: React.FC<CandlestickChart> = ({
  data,
}) => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    const chartData = data.map((point: any) => ({
      x: new Date(point.x),
      o: point.open,
      h: point.high,
      l: point.low,
      c: point.close,
    }));

    myChartRef.current = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [{
          label: 'Candlestick Chart',
          data: chartData,
          borderColor: 'rgba(0, 150, 0, 0.8)',
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Price',
            },
            beginAtZero: false,
          },
        },
      },
    });

    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas title='Candelestick Chart Example' ref={chartRef} style={{
    width: '100%',
    height: '96%'
  }} />;
};

export default CandlestickChart;
