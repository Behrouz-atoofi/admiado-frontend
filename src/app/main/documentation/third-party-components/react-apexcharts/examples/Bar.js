import { useState } from 'react';
import Chart from 'react-apexcharts';

function Bar()
{
    const [state, setState] = useState({
        options: {
            dataLabels : {
                enabled: false
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            xaxis      : {
                categories: ['شنبه', 'یکشبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
            }
        },
        series : [
            {
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }
        ],
    });

    return (
        <div className="bar">
            <Chart options={state.options} series={state.series} type="bar" width="500"/>
        </div>
    );
}

export default Bar;
