import React, { useState, useEffect } from 'react';
import styles from './DashboardRight.module.css';
import DonutChart from './DonutChart';
import PeakHoursChart from './PeakHoursChart';

export default function DashboardRight() {
  // add a fetch request to get the top 5 selling items
  const fetchTopSellingItems = async () => {
    const response = await fetch('/api/getTopSellingItems');
    const data = await response.json();
    return data;
  };

  const [topSellingItems, setTopSellingItems] = useState([]);

  useEffect(() => {
    fetchTopSellingItems().then(setTopSellingItems);
  }, []);


  return (
    <div className={styles.dashboardRight}>
      <div className={styles.topSellingCont}>
        <div className={styles.topSellingTitle}>Top Selling Items</div>
        <div className={styles.donutChartCont}>
          <DonutChart items={topSellingItems} />
        </div>
      </div>
      <PeakHoursChart />
    </div>
  );
}
