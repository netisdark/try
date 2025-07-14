import styles from './PeakHoursChart.module.css';

import React, { useState, useEffect } from 'react';
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

// add a fetch request to get peak hours data
const fetchPeakHours = async () => {
  const response = await fetch('/api/getThreePeakHours');
  const data = await response.json();
  console.log(data);
  return data.data;
};

export default function PeakHoursChart() {
  const [peakHours, setPeakHours] = useState([]);

  useEffect(() => {
    fetchPeakHours().then(setPeakHours);
  }, []);

  

  // peakHours is an array of objects like { timeRange, orderCount, customerCount }
  const data = {
    labels: Array.isArray(peakHours) ? peakHours.map(h => h.timeRange) : [],
    datasets: [
      {
        label: 'Customers',
        data: Array.isArray(peakHours) ? peakHours.map(h => h.orderCount) : [],
        backgroundColor: ['#10B981', '#34D399', '#6EE7B7'],
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

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartTitle}>Peak Hours</div>
      <Bar data={data} options={options} className={styles.chartCanvas} />
    </div>
  );
}
