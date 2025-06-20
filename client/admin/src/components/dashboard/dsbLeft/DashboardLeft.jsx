import React from 'react';
import styles from './DashboardLeft.module.css';
import SalesChart from './salesChart';

export default function DashboardLeft() {

    const greetName = 'Niram';

    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning " + greetName;
        if (hour < 18) return "Good Afternoon " + greetName;
        return "Good Evening " + greetName;
    };

    return (
        <div className={styles.dashboardLeft}>
            <div className={styles.greet}>{getGreeting()}</div>
            <div className={styles.summaryCont}>
                <div className={styles.summaryHead}>
                    <div className={styles.summaryTitle}>Finance Overview</div>
                    <div className={styles.datePicker}>
                        <select className={styles.dateDropdown}>
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                            <option value="thisWeek">This Week</option>
                            <option value="thisMonth">This Month</option>
                            <option value="thisYear">This Year</option>
                            <option value="lifetime">Lifetime</option>
                        </select>
                        <input type="date" className={styles.calendarIconOnly} />
                    </div>

                </div>
                <div className={styles.overViewBoxCont}>
                    <div className={styles.overviewBox}>
                        <span className={styles.overviewTitle}>Customers</span>
                        <span className={styles.overviewItem}>54</span>
                    </div>
                    <div className={styles.overviewBox}>
                        <span className={styles.overviewTitle}>Items Sold</span>
                        <span className={styles.overviewItem}>234</span>
                    </div>
                    <div className={styles.overviewBox}>
                        <span className={styles.overviewTitle}>Revenue</span>
                        <span className={styles.overviewItem}>RS. 35100</span>
                    </div>
                    <div className={styles.overviewBox}>
                        <span className={styles.overviewTitle}>Profit</span>
                        <span className={styles.overviewItem}>RS. 25100</span>
                    </div>
                </div>
            </div>

            <SalesChart />
        </div>
    );
}
