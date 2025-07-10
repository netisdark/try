import React from 'react';
import styles from './Dashboard.module.css';
import Body from '../body';
import DashboardLeft from './dsbLeft/DashboardLeft';
import DashboardRight from './dsbRight/DashboardRight';

export default function Dashboard() {

    const greetName = 'Niram';

    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning " + greetName;
        if (hour < 18) return "Good Afternoon " + greetName;
        return "Good Evening " + greetName;
    };

    return (
        <Body>
            <div className={styles.dashboardWrap}>
                <DashboardLeft/>
                <DashboardRight/>
            </div>
        </Body>
    );
}
