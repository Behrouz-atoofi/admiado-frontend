import { useState } from 'react';
import Chart from 'react-apexcharts';

function Line()
{
    const [state, setState] = useState({
        options: {
            stroke : {
                curve: 'smooth'
            },
            markers: {
                size: 0
            },
            xaxis  : {
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
        <div className="line">
            <Chart options={state.options} series={state.series} type="line" width="500"/>
        </div>
    );
}

export default Line;
