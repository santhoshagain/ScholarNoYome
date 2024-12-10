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
import AdminsNavBar from './adminsNavBar';  // Import AdminsNavBar

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
    // Fetching application data from the backend
    const fetchApplicationData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/applications/all`);
        const data = await response.json();

        // Calculate status counts
        const statusCounts = {
          Accepted: 0,
          Pending: 0,
          Rejected: 0,
        };

        // Count applications based on their status
        data.forEach(application => {
          if (application.status === 'Accepted') {
            statusCounts.Accepted += 1;
          } else if (application.status === 'Pending') {
            statusCounts.Pending += 1;
          } else if (application.status === 'Rejected') {
            statusCounts.Rejected += 1;
          }
        });

        const totalApplications = data.length;
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
      } catch (error) {
        console.error("Error fetching application data:", error);
      }
    };

    fetchApplicationData();
  }, []);

  return (
    <div>
      <AdminsNavBar />  {/* Added AdminsNavBar here */}
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
    </div>
  );
};

export default ApplicationsChart;
