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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend
);

const generateFakeSales = (date) => {
    const sales = [];
    for (let i = 0; i < 24; i++) {
      sales.push({
        time: new Date(date.setHours(i, 0, 0, 0)),
        sales: Math.floor(Math.random() * 100),
      });
    }
    return sales;
  };

const SalesChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeRange, setTimeRange] = useState('today');
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    let data = [];

    switch (timeRange) {
      case 'week':
        for (let i = 0; i < 7; i++) {
          const day = subDays(new Date(), i);
          data = [...data, ...generateFakeSales(new Date(day))];
        }
        break;
      case 'month':
        for (let i = 0; i < 30; i++) {
          const day = subDays(new Date(), i);
          data = [...data, ...generateFakeSales(new Date(day))];
        }
        break;
      case 'year':
        for (let i = 0; i < 12; i++) {
          const monthStart = new Date(new Date().getFullYear(), new Date().getMonth() - i, 1);
          data = [...data, ...generateFakeSales(new Date(monthStart))];
        }
        break;
      case 'lifetime':
        for (let i = 0; i < 60; i++) {
          const day = subDays(new Date(), i);
          data = [...data, ...generateFakeSales(new Date(day))];
        }
        break;
      default:
        data = generateFakeSales(new Date(selectedDate));
    }

    setSalesData(data);
  }, [selectedDate, timeRange]);

  const chartData = {
    labels: salesData.map((s) => s.time),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map((s) => s.sales),
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };
  

  const options = {
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
          unit: 'hour',
        },
        min: new Date(new Date().setHours(8, 0, 0, 0)),
        max: new Date(new Date().setHours(22, 0, 0, 0)),
        ticks: {
          callback: function (value) {
            const hour24 = new Date(value).getHours();
            let hour12 = hour24 % 12;
            if (hour12 === 0) hour12 = 12;
            return hour12.toString();
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
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.filtersContainer}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            setTimeRange('today');
          }}
          className={styles.datePicker}
        />
        <select
          className={styles.selectFilter}
          onChange={(e) => setTimeRange(e.target.value)}
          value={timeRange}
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="lifetime">Lifetime</option>
        </select>
      </div>
      <Line className={styles.chart} data={chartData} options={options} />
    </div>
  );
};

export default SalesChart;
