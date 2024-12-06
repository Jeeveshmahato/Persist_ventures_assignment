import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {

    const kpi1 = {
        dates: ["A", "B", "C", "D", "E"],
        docCount: [8.12, 6.22, 3.77, 3.63, 4.07],
        title: 'Engagement rate for last 5 posts'
    };

    // Convert dates to categories
    const categories = kpi1.dates;

    // Use docCount as series data
    const seriesData = kpi1.docCount;

    // Create series object required by ApexCharts
    const series = [{
        name: kpi1.title,
        data: seriesData
    }];

    // Define options for the chart
    const options = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false // Set toolbar to false to remove the menu option
            }
        },
        xaxis: {
            categories: categories,
            labels: {
                style: {
                    colors: '#ffffff' // Set text color to white
                }
            }
        },
        yaxis: {
          
            labels: {
                style: {
                    colors: '#ffffff' // Set text color to white
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false
        },
        colors: ['#1a56db'],
        title: {
            text: kpi1.title,
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: 'DMSans',
                color: '#ffffff' ,
            }
        }
    };

    return (
        <div className='w-full h-[300px] selection: rounded-[16px]'>
            <Chart
                options={options}
                series={series}
                type="bar"
                height={'100%'}
                className='bg-[#1f2937] rounded-[8px] shadow'
            />
        </div>
    );
};

export default BarChart;
