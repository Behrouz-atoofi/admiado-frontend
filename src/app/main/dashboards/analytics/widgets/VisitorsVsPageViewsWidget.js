import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Tooltip } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { selectWidgets } from '../store/widgetsSlice';
import { localeConfigurationObject } from '@fuse/default-settings';
import moment from 'moment-jalaali';
function VisitorsVsPageViewsWidget(props) {
  const theme = useTheme();
  const widgets = useSelector(selectWidgets);
  const { series, averageRatio, predictedRatio, overallScore, labels } =
    widgets?.visitorsVsPageViews;

  const chartOptions = {
    chart: {
      locales: [...localeConfigurationObject],
      defaultLocale: 'fa',
      animations: {
        enabled: false,
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.palette.primary.light, theme.palette.primary.light],
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: [theme.palette.primary.dark, theme.palette.primary.light],
      opacity: 0.5,
    },
    grid: {
      show: false,
      padding: {
        bottom: -40,
        left: 0,
        right: 0,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
      x: {
        format: 'MMM dd, yyyy',
        formatter: (value) => moment(value).format('jD jMMMM jYYYY'),
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        offsetY: -20,
        rotate: 0,
        style: {
          colors: theme.palette.text.secondary,
        },
        formatter: function(value) {
          return moment(value).format('jMMMM jYYYY')
        } 
      },
      tickAmount: 3,
      tooltip: {
        enabled: false,
      },
      type: 'datetime',
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.divider,
        },
      },
      max: (max) => max + 250,
      min: (min) => min - 250,
      show: false,
      tickAmount: 5,
    },
  };

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="flex items-start justify-between m-24 mb-0">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          آمار بازدیدکنندگان + بازدید صفحه
        </Typography>
        <div className="ml-8">
          <Chip size="small" className="font-medium text-sm" label="30 روز" />
        </div>
      </div>
      <div className="flex items-start mt-24 mx-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-42 sm:gap-48">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="font-medium text-secondary leading-5">امتیاز کلی</div>
              <Tooltip title="امتیاز با استفاده از نسبت تاریخی بین بازدیدهای صفحه و بازدیدکنندگان محاسبه می شود. بهترین نمره 1000 و بدترین نمره 0 است.">
                <FuseSvgIcon className="ml-6" size={16} color="disabled">
                  heroicons-solid:information-circle
                </FuseSvgIcon>
              </Tooltip>
            </div>
            <div className="flex items-start mt-8">
              <div className="text-4xl font-bold tracking-tight leading-none">{overallScore}</div>
              <div className="flex items-center ml-8">
                <FuseSvgIcon className="text-green-500" size={20}>
                  heroicons-solid:arrow-circle-up
                </FuseSvgIcon>
                <Typography className="ml-4 text-md font-medium text-green-500">42.9%</Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="font-medium text-secondary leading-5">میانگین متوسط</div>
              <Tooltip title="میانگین نسبت بین بازدیدهای صفحه و بازدیدکنندگان است">
                <FuseSvgIcon className="ml-6" size={16} color="disabled">
                  heroicons-solid:arrow-circle-up
                </FuseSvgIcon>
              </Tooltip>
            </div>
            <div className="flex items-start mt-8">
              <div className="text-4xl font-bold tracking-tight leading-none">{averageRatio}%</div>
              <div className="flex items-center ml-8">
                <FuseSvgIcon className="text-red-500" size={20}>
                  heroicons-solid:arrow-circle-down
                </FuseSvgIcon>
                <Typography className="ml-4 text-md font-medium text-red-500">13.1%</Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="font-medium text-secondary leading-5">نسبت پیش بینی شده</div>
              <Tooltip title="نسبت پیش بینی شده با استفاده از نسبت تاریخی، روندهای فعلی و اهداف هدف شما محاسبه می شود.">
                <FuseSvgIcon className="ml-6" size={16} color="disabled">
                  heroicons-solid:information-circle
                </FuseSvgIcon>
              </Tooltip>
            </div>
            <div className="flex items-start mt-8">
              <div className="text-4xl font-bold tracking-tight leading-none">
                {predictedRatio}%
              </div>
              <div className="flex items-center ml-8">
                <FuseSvgIcon className="text-green-500" size={20}>
                  heroicons-solid:arrow-circle-up
                </FuseSvgIcon>
                <Typography className="ml-4 text-md font-medium text-green-500">22.2%</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-auto h-320 mt-12">
        <ReactApexChart
          className="flex-auto w-full h-full"
          options={chartOptions}
          series={series}
          type={chartOptions.chart.type}
          height={chartOptions.chart.height}
        />
      </div>
    </Paper>
  );
}

export default VisitorsVsPageViewsWidget;
