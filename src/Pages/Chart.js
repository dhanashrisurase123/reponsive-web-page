import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import usersData from '../users.json';
import './Dashboard.css';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const projectStats = usersData.projectStats;
    const formattedData = projectStats.map(dept => ({
      name: `${dept.department} ${dept.success_percentage}%`,
      total: dept.total_projects,
      closed: dept.closed_projects
    }));
    setChartData(formattedData);
  }, []);

  const options = {
    chart: {
      type: 'column',
      height: '135%'
    },
    title: {
      text: null 
    },
    xAxis: {
      categories: chartData.map(dept => dept.name),
      crosshair: true
    },
    yAxis: {
      min: 0,
      max: 20,
      tickInterval: 5,
      title: {
        text: 'Projects'
      }
    },
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function() {
        return `
          <b>${this.x}</b><br/>
          <span style="color:blue">●</span> Total: ${this.points[0].y}<br/>
          <span style="color:green">●</span> Closed: ${this.points[1].y}
        `;
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.4,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'Total',
        data: chartData.map(dept => dept.total),
        color: 'blue'
      },
      {
        name: 'Closed',
        data: chartData.map(dept => dept.closed),
        color: 'green'
      }
    ]
  };

  return (
    <div className="chart-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default Chart;
