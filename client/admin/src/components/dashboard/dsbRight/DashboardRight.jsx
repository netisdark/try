import styles from './DashboardRight.module.css';
import DonutChart from './DonutChart';
import PeakHoursChart from './PeakHoursChart';

export default function DashboardRight() {
  const dummyItems = [
    { name: 'Espresso', sales: 120 },
    { name: 'Latte', sales: 90 },
    { name: 'Cappuccino', sales: 70 },
    { name: 'Americano', sales: 50 },
    { name: 'Mocha', sales: 30 },
    { name: 'Tea', sales: 20 },
  ];

  return (
    <div className={styles.dashboardRight}>
      <div className={styles.topSellingCont}>
        <div className={styles.topSellingTitle}>Top Selling Items</div>
        <div className={styles.donutChartCont}>
          <DonutChart items={dummyItems} />
        </div>
      </div>
      <PeakHoursChart />
    </div>
  );
}
