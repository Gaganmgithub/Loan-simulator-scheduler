import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './AmortizationChart.css';

function AmortizationChart({ repaymentSchedule }) {
    const [amortizationChart, setAmortizationChart] = useState(null);

    useEffect(() => {
        if (repaymentSchedule.length > 0) {
            const labels = repaymentSchedule.map(payment => `${payment.month} ${payment.year}`);
            // const labels = repaymentSchedule.map(payment => `Month ${payment.month}`);
            const principalData = repaymentSchedule.map(payment => parseFloat(payment.principal));
            const interestData = repaymentSchedule.map(payment => parseFloat(payment.interest));
            const ctx = document.getElementById('amortization-chart');

            if (ctx) {
                if (amortizationChart) {
                    amortizationChart.destroy();
                }

                setAmortizationChart(new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Principal',
                                data: principalData,
                                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1                                
                            },
                            {
                                label: 'Interest',
                                data: interestData,
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        scales: {
                            y: {
                                stacked: true,
                                ticks: {
                                    beginAtZero: true
                                }
                            },
                            x: {
                                stacked: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                // text: 'Amortization Chart',
                                font: {
                                    family: 'Arial', // Set font family
                                    weight: 'bold' // Make the title text bold
                                }
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }
                }));
            }
        }
    }, [repaymentSchedule]);

    return (
        <div>
            {repaymentSchedule.length > 0 ? (
                <canvas id="amortization-chart" className='chart'></canvas>
            ) : (
                <p>No data available for the amortization chart.</p>
            )}
        </div>
    );
}

export default AmortizationChart;
