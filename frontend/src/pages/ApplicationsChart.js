import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import BACKEND_URL from './config';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ApplicationsChart = () => {
  const [applicationData, setApplicationData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Applications by Status',
        data: [],
        backgroundColor: ['#6c5ce7', '#ffb142', '#f56c6c'], // Color for each segment
        borderColor: ['#6c5ce7', '#ffb142', '#f56c6c'],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Static data for testing
    const data = [
      { status: 'Accepted', count: 30 },
      { status: 'Pending', count: 15 },
      { status: 'Rejected', count: 5 },
      { status: 'Accepted', count: 25 },
      { status: 'Pending', count: 10 },
      { status: 'Rejected', count: 8 },
      { status: 'Accepted', count: 40 },
      { status: 'Pending', count: 12 },
      { status: 'Rejected', count: 2 },
      { status: 'Accepted', count: 35 },
      { status: 'Pending', count: 22 },
      { status: 'Rejected', count: 6 },
      { status: 'Accepted', count: 50 },
      { status: 'Pending', count: 30 },
      { status: 'Rejected', count: 4 },
      { status: 'Accepted', count: 20 },
      { status: 'Pending', count: 18 },
      { status: 'Rejected', count: 7 },
      { status: 'Accepted', count: 15 },
      { status: 'Pending', count: 25 },
      { status: 'Rejected', count: 3 },
      { status: 'Accepted', count: 28 },
      { status: 'Pending', count: 14 },
      { status: 'Rejected', count: 6 },
      { status: 'Accepted', count: 45 },
      { status: 'Pending', count: 19 },
      { status: 'Rejected', count: 10 },
      { status: 'Accepted', count: 38 },
      { status: 'Pending', count: 21 },
      { status: 'Rejected', count: 5 },
      { status: 'Accepted', count: 33 },
      { status: 'Pending', count: 11 },
      { status: 'Rejected', count: 9 },
      { status: 'Accepted', count: 42 },
      { status: 'Pending', count: 17 },
      { status: 'Rejected', count: 12 },
      { status: 'Accepted', count: 39 },
      { status: 'Pending', count: 23 },
      { status: 'Rejected', count: 8 },
      { status: 'Accepted', count: 27 },
      { status: 'Pending', count: 16 },
      { status: 'Rejected', count: 4 },
      { status: 'Accepted', count: 34 },
      { status: 'Pending', count: 20 },
      { status: 'Rejected', count: 6 },
      { status: 'Accepted', count: 41 },
      { status: 'Pending', count: 28 },
      { status: 'Rejected', count: 3 },
      { status: 'Accepted', count: 36 },
      { status: 'Pending', count: 9 },
      { status: 'Rejected', count: 11 },
      { status: 'Accepted', count: 48 },
      { status: 'Pending', count: 12 },
    ];

    const statusCounts = {
      Accepted: 0,
      Pending: 0,
      Rejected: 0,
    };

    // Calculate the total and distribute counts by status
    data.forEach(item => {
      statusCounts[item.status] += item.count;
    });

    const totalApplications = data.reduce((total, item) => total + item.count, 0);
    const percentages = {
      Accepted: ((statusCounts.Accepted / totalApplications) * 100).toFixed(2),
      Pending: ((statusCounts.Pending / totalApplications) * 100).toFixed(2),
      Rejected: ((statusCounts.Rejected / totalApplications) * 100).toFixed(2),
    };

    setApplicationData({
      labels: ['Accepted', 'Pending', 'Rejected'],
      datasets: [
        {
          label: 'Applications by Status',
          data: [percentages.Accepted, percentages.Pending, percentages.Rejected],
          backgroundColor: ['#6c5ce7', '#ffb142', '#f56c6c'],
          borderColor: ['#6c5ce7', '#ffb142', '#f56c6c'],
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div
      className="chart-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Ensure full height to center
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Applications Overview</h3>
      <div
        style={{
          width: '250px', // Increase width
          height: '250px', // Increase height
        }}
      >
        <Doughnut
          data={applicationData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                  },
                },
              },
            },
          }}
          width={250} // Increased width
          height={250} // Increased height
        />
      </div>
    </div>
  );
};

export default ApplicationsChart;
