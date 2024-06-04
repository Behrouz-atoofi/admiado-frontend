import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ProgressDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/progress"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        پیشرفت(Progress)
      </Typography>
      <Typography className="description">
      نشانگرهای پیشرفت که معمولاً به عنوان اسپینر شناخته می شوند، زمان انتظار نامشخصی را بیان می کنند یا طول یک فرآیند را نمایش می دهند.
      </Typography>

      <Typography className="mb-40" component="div">
      شاخص‌های پیشرفت، وضعیت فرآیندهای در حال انجام، مانند بارگیری یک برنامه، ارسال فرم، یا ذخیره به‌روزرسانی‌ها را به کاربران اطلاع می‌دهند.
      </Typography>
      <ul>
        <li>
        نشانگرهای <strong>تعیین</strong> مدت زمان انجام عملیات را نشان می‌دهند.
        </li>
        <li>
        شاخص‌های <strong>نامشخص</strong> زمان انتظار نامشخصی را تجسم می‌کنند.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      انیمیشن های کامپوننت ها حتی قبل از بارگیری جاوا اسکریپت برای کار کردن تا حد امکان به CSS متکی هستند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گرد
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دایره ای نامعین
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularIndeterminate.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/CircularIndeterminate.js').default}
          raw={require('!raw-loader!../components/progress/CircularIndeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      رنگ دایره ای
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularColor.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/CircularColor.js').default}
          raw={require('!raw-loader!../components/progress/CircularColor.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       دایره ای معین 
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularDeterminate.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/CircularDeterminate.js').default}
          raw={require('!raw-loader!../components/progress/CircularDeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ادغام تعاملی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularIntegration.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/CircularIntegration.js').default}
          raw={require('!raw-loader!../components/progress/CircularIntegration.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دایره ای با برچسب
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularWithValueLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/CircularWithValueLabel.js').default}
          raw={require('!raw-loader!../components/progress/CircularWithValueLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       خطی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      خطی نامعین
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearIndeterminate.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/LinearIndeterminate.js').default}
          raw={require('!raw-loader!../components/progress/LinearIndeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       خطی رنگی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearColor.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/LinearColor.js').default}
          raw={require('!raw-loader!../components/progress/LinearColor.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        خطی معین
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearDeterminate.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/LinearDeterminate.js').default}
          raw={require('!raw-loader!../components/progress/LinearDeterminate.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      بافر خطی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearBuffer.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/LinearBuffer.js').default}
          raw={require('!raw-loader!../components/progress/LinearBuffer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      خطی با برچسب
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LinearWithValueLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/LinearWithValueLabel.js').default}
          raw={require('!raw-loader!../components/progress/LinearWithValueLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدوده های غیر استاندارد
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت هاس پیشرفت مقداری در محدوده 0 تا 100 می‌پذیرند. این کار برای کاربران صفحه‌خوان ساده‌تر می‌شود، جایی که این مقادیر حداقل/حداکثر پیش‌فرض هستند. با این حال، گاهی اوقات ممکن است با یک منبع داده کار کنید که مقادیر آن خارج از این محدوده باشد. در اینجا نحوه تبدیل یک مقدار در هر محدوده به مقیاس 0 تا 100 آمده است:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// MIN = حداقل مقدار مورد انتظار
// MAX = حداکثر مقدار مورد انتظار
// تابعی برای عادی سازی مقادیر (MIN / MAX می تواند یکپارچه شود)
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

// کامپوننت مثالی که از تابع\`normalise\` در نقطه رندر استفاده می کند.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در{' '} <a href="/material-ui/customization/how-to-customize/">صفحه اسناد overrides</a> در مورد این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedProgressBars.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/CustomizedProgressBars.js').default}
          raw={require('!raw-loader!../components/progress/CustomizedProgressBars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تاخیر در نمایش
      </Typography>
      <Typography className="mb-40" component="div">

      <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">
        3 محدودیت مهم
        </a>{' '} برای دانستن در مورد زمان پاسخ وجود دارد.
. اثر موج دار کامپوننت <code>ButtonBase</code> تضمین می کند که کاربر احساس می کند سیستم فوراً واکنش نشان می دهد.. معمولاً در تأخیرهای بیش از 0.1 اما کمتر از 1.0 ثانیه به بازخورد خاصی نیاز نیست. پس از 1.0 ثانیه، می توانید یک لودر نمایش دهید تا جریان فکر کاربر بدون وقفه بماند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DelayingAppearance.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/DelayingAppearance.js').default}
          raw={require('!raw-loader!../components/progress/DelayingAppearance.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      بار بالای CPU
      </Typography>
      <Typography className="mb-40" component="div">
      تحت بار سنگین، ممکن است انیمیشن خط تیره ضربه ای را گم کنید یا پهنای حلقه تصادفی <code>CircularProgress</code> را مشاهده کنید. شما باید عملیات فشرده پردازشگر را در یک وب کارگر یا به صورت دسته ای اجرا کنید تا رشته رندر اصلی مسدود نشود.
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        <img src="/material-ui-static/images/progress/heavy-load.gif" alt="heavy load"/>
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که امکان پذیر نیست، می توانید از پراپ <code>disableShrink</code> برای کاهش مشکل استفاده کنید. به <a href="https://github.com/mui/material-ui/issues/10327">این شماره</a> مراجعه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CircularUnderLoad.js"
          className="my-24"
          iframe={false}
          component={require('../components/progress/CircularUnderLoad.js').default}
          raw={require('!raw-loader!../components/progress/CircularUnderLoad.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      به روز رسانی با تکرار بالا
      </Typography>
      <Typography className="mb-40" component="div">
      <code>LinearProgress</code> از یک انتقال در ویژگی تبدیل CSS استفاده می کند تا یک به روز رسانی صاف بین مقادیر مختلف ارائه دهد. مدت زمان انتقال پیش‌فرض 200 میلی‌ثانیه است. در صورتی که یکی از کامپوننت های والد، پایه <code>value</code> را خیلی سریع به‌روزرسانی کند، حداقل 200 میلی‌ثانیه تأخیر بین رندر مجدد و نوار پیشرفت به‌طور کامل به‌روزرسانی می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر نیاز به انجام 30 رندر مجدد در ثانیه یا بیشتر دارید، توصیه می کنیم ترنزیشن را غیرفعال کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiLinearProgress-bar {
  transition: none;
}
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        IE 11
      </Typography>
      <Typography className="mb-40" component="div">
      انیمیشن کامپوننت پیشرفت دایره ای در IE 11 تنزل یافته است. انیمیشن خط تیره stroke کار نمی کند (معادل <code>disableShrink</code>) و انیمیشن دایره ای تکان می خورد. شما می توانید دومی را با:
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiCircularProgress-indeterminate {
  animation: circular-rotate 1.4s linear infinite;
}

@keyframes circular-rotate {
  0% {
    transform: rotate(0deg);
    /* Fix IE11 wobbly */
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
}
`}
      </FuseHighlight>
      <Typography className="mt-40" component="div">
حل کنید.
      </Typography>
    </>
  );
}

export default ProgressDoc;
