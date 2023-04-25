import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React from 'react';
const LineChart = () => {
    const chartConfig = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Sales',
                    data: [12, 19, 3, 5, 2, 3, 10],
                    fill: false,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 5,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    };

    return <Line data={chartConfig.data} options={chartConfig.options} />;
};

export default LineChart;
