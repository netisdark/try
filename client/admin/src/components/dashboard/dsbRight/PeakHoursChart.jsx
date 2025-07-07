import styles from './PeakHoursChart.module.css';

import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register required components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

// Dummy data for top 3 peak hours
const data = {
  labels: ['12 PM', '1 PM', '7 PM'], // Top peak hours
  datasets: [
    {
      label: 'Customers',
      data: [80, 65, 50],
      backgroundColor: ['#10B981', '#34D399', '#6EE7B7'], // Tailwind-inspired colors
      borderRadius: 6,
    },
  ],
};

// Chart options
const options = {
  indexAxis: 'y', // Horizontal bars
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Customers',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Time',
      },
    },
  },
};

export default function PeakHoursChart() {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartTitle}>Peak Hours</div>
      <Bar data={data} options={options} className={styles.chartCanvas} />
    </div>
  );
}
