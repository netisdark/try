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

const DonutChart = ({ items = [] }) => {
  // items is now an array of arrays: [ [name, count], ... ]
  const safeItems = Array.isArray(items) ? items : [];
  // Convert to objects for easier handling
  const parsedItems = safeItems.map(arr => ({
    name: arr[0],
    sales: arr[1]
  }));

  // Sort by sales descending
  const sorted = [...parsedItems].sort((a, b) => b.sales - a.sales);
  const top4 = sorted.slice(0, 4);
  // Sum the rest as "Others"
  const othersTotal = sorted.slice(4).reduce((sum, item) => sum + item.sales, 0);

  const labels = [...top4.map(item => item.name), 'Others'];
  const data = [...top4.map(item => item.sales), othersTotal];

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ['#34D399', '#60A5FA', '#FBBF24', '#F472B6', '#D1D5DB'],
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
