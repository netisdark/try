import styles from './SalesChart.module.css';
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend,
  Filler
);

// Function to generate fake hourly sales between 8 AM and 10 PM
const generateSalesData = (date) => {
  const sales = [];
  for (let hour = 8; hour <= 22; hour++) {
    const time = new Date(date);
    time.setHours(hour, 0, 0, 0);
    sales.push({
      time,
      sales: Math.floor(Math.random() * 100),
    });
  }
  return sales;
};

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const data = generateSalesData(today);
    setSalesData(data);
  }, []);

  const chartData = {
    labels: salesData.map((d) => d.time),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map((d) => d.sales),
        borderColor: '#10B981', // green
        backgroundColor: 'rgba(16, 185, 129, 0.1)', // translucent fill
        fill: true,
        tension: 0.4, // smooth lines
        pointRadius: 4,
        pointBackgroundColor: '#10B981',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'hour',
        },
        min: new Date(new Date().setHours(8, 0, 0, 0)),
        max: new Date(new Date().setHours(22, 0, 0, 0)),
        ticks: {
          callback: (value) => {
            const hour = new Date(value).getHours();
            let displayHour = hour % 12;
            if (displayHour === 0) displayHour = 12;
            return displayHour.toString();
          },
        },
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.salesChartContainer}>
      <div className={styles.chartTitle}>Sales Chart</div>
      <div className={styles.chartWrapper}>
      <Line data={chartData} options={options} className={styles.chartCanvas}/>
      </div>
    </div>
  );
};

export default SalesChart;
