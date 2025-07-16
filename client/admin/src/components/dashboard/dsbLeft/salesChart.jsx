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

// Fetch sales data for a given range from the API
const fetchSalesData = async (range) => {
  const response = await fetch('/api/getSalesData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ range }),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch sales data');
  }
  const data = await response.json();
  console.log(data);
  // data.data is an array of order objects with createdAt and total
  if (!Array.isArray(data.data)) return [];

  // Group sales by hour
  const salesByHour = {};
  data.data.forEach(order => {
    const date = new Date(order.createdAt);
    const hour = date.getHours();
    if (!salesByHour[hour]) {
      salesByHour[hour] = 0;
    }
    salesByHour[hour] += order.total || 0;
  });

  // For display, show from 8:00 to 22:00
  const result = [];
  for (let hour = 8; hour <= 22; hour++) {
    const now = new Date();
    const time = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour, 0, 0, 0
    );
    result.push({
      time,
      sales: salesByHour[hour] || 0,
    });
  }
  return result;
};

const SalesChart = ({ dateRange = 'today' }) => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchSalesData(dateRange).then(setSalesData);
  }, [dateRange]);

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
