import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart({ principalLoanAmount, totalInterest, totalPayment }) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          // labels: ['Principal Loan Amount', 'Total Interest','totalPayment'],
          labels: ['Principal Loan Amount', 'Total Interest'],
          datasets: [{
            // data: [principalLoanAmount, totalInterest, totalPayment],
            data: [principalLoanAmount, totalInterest],
            // backgroundColor: ['hsl(204, 82%, 57%)', 'hsl(295, 76%, 57%)'],
            // hoverBackgroundColor: ['hsl(204, 82%, 57%)', 'hsl(295, 76%, 57%)'],

            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              // 'rgba(255, 206, 86, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
            ],
              hoverBackgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              // 'rgba(255, 206, 86, 0.8)',
            ]
          }]
        },
        options: {
          radius: '90%', // Set the radius to control the size of the pie chart
          aspectRatio: 1, // Set the aspect ratio to 1 for a square pie
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.label || '';
                  if (label) {
                    label += ': ';
                  }
                  const value = context.raw || '';
                  const percentage = ((value / (principalLoanAmount + totalInterest)) * 100).toFixed(2) + '%';
                  return label + value + ' (' + percentage + ')';
                }
              },
              // Set font style for tooltip labels
              bodyFont: {
                weight: 'bold'
              }
            },
            legend: {
              position: 'bottom', // Display legend at the bottom              
              // Set font style for legend labels
              labels: {
                font: {
                  family: "'Roboto Bold', sans-serif",
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    }
  }, 
  // [principalLoanAmount, totalInterest, totalPayment]);
  [principalLoanAmount, totalInterest]);


  return <canvas ref={chartContainer} className="Pie-chart"></canvas>;
}

export default PieChart;
