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
    
    const [dateRange, setDateRange] = React.useState('today');
    const [customers, setCustomers] = React.useState(0);
    const [itemsSold, setItemsSold] = React.useState(0);
    const [peakHour, setPeakHour] = React.useState('N/A');
    const [revenue, setRevenue] = React.useState(0);

    React.useEffect(() => {
    fetchDashboardData(dateRange);
}, [dateRange]);

const fetchDashboardData = (range) => {
    fetch('/api/getDashboardData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ range }),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Dashboard data fetched successfully:', result);
        const data = result.data || {};
        setCustomers(data.customers || 0);
        setItemsSold(data.itemsSold || 0);
        setPeakHour(data.peakHour || 'N/A');
        setRevenue(data.revenue || 0);
    })
    .catch(error => {
        console.error('Error fetching dashboard data:', error);
    });
};
const handleDateRangeChange = (event) => {
    const selectedRange = event.target.value;
    setDateRange(selectedRange);
}

    return (
        <div className={styles.dashboardLeft}>
            <div className={styles.greet}>{getGreeting()}</div>
            <div className={styles.summaryCont}>
                <div className={styles.summaryHead}>
                    <div className={styles.summaryTitle}>Finance Overview</div>
                    <div className={styles.datePicker}>
                        {/* Date Picker with Dropdown */}
                        <label htmlFor="dateRange" className={styles.dateLabel}>Range:</label>
                        <select
                            id="dateRange"
                            className={styles.dateDropdown}
                            value={dateRange}
                            onChange={handleDateRangeChange}
                        >
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
                        <span className={styles.overviewItem}>{ customers }</span>
                    </div>
                    <div className={styles.overviewBox}>
                        <span className={styles.overviewTitle}>Items Sold</span>
                        <span className={styles.overviewItem}>{ itemsSold }</span>
                    </div>
                    <div className={styles.overviewBox}>
                        <span className={styles.overviewTitle}>Peak Hour</span>
                        <span className={styles.overviewItem}>{ peakHour }</span>
                    </div>
                    <div className={styles.overviewBox}>
                        <span className={styles.overviewTitle}>Revenue</span>
                        <span className={styles.overviewItem}>{ revenue }</span>
                    </div>
                </div>
            </div>

            <SalesChart dateRange={dateRange} />
        </div>
    );
}
