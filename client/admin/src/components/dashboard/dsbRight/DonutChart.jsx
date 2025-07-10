import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import styles from './DashboardRight.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ items }) => {
  const sorted = [...items].sort((a, b) => b.sales - a.sales);
  const top3 = sorted.slice(0, 3);
  const othersTotal = sorted.slice(3).reduce((sum, item) => sum + item.sales, 0);

  const labels = [...top3.map(item => item.name), 'Others'];
  const data = [...top3.map(item => item.sales), othersTotal];

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ['#34D399', '#60A5FA', '#FBBF24', '#D1D5DB'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '60%', 
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
        },
      },
    },
  };

  return (
    <div className={styles.donutChartWrapper}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DonutChart;
