
import React, { useState } from 'react';
import './Dashboard.css';
import Chart from './Chart';

const Dashboard = () => {
  const [totalProjects] = useState(10);
  const [closedProjects] = useState(3);
  const [runningProjects] = useState(4);
  const [overdueProjects] = useState(1);
  const [cancelledProjects] = useState(2);

  return (
    <div className="dashboard">
      <div className="counters">
        <div className="counter-box">
          <h3>Total Projects</h3>
          <p>{totalProjects}</p>
        </div>
        <div className="counter-box">
          <h3>Closed Projects</h3>
          <p>{closedProjects}</p>
        </div>
        <div className="counter-box">
          <h3>Running Projects</h3>
          <p>{runningProjects}</p>
        </div>
        <div className="counter-box">
          <h3>Overdue Projects</h3>
          <p>{overdueProjects}</p>
        </div>
        <div className="counter-box">
          <h3>Cancelled Projects</h3>
          <p>{cancelledProjects}</p>
        </div>
      </div>

      <div className="section-one">
        <h3>Department Wise - Total vs Closed</h3>
        <Chart></Chart>
      </div>
    </div>
  );
};

export default Dashboard;
