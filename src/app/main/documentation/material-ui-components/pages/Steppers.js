import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SteppersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/steppers"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        استپر(Stepper)
      </Typography>
      <Typography className="description">
      استپر ها پیشرفت را از طریق گام های شماره دار منتقل می کنند. این یک گردش کار جادوگر مانند را فراهم می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      استپر ها پیشرفت را از طریق دنباله‌ای از مراحل منطقی و شماره‌دار نشان می‌دهند. آنها همچنین ممکن است برای ناوبری استفاده شوند. استپرها ممکن است یک پیام بازخورد گذرا را پس از ذخیره یک مرحله نشان دهند.
      </Typography>
      <ul>
        <li>
        <strong>انواع استپ</strong>: قابل ویرایش، غیرقابل ویرایش، موبایل، اختیاری
        </li>
        <li>
        <strong>انواع Stepper</strong>: افقی، عمودی، خطی، غیر خطی
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      :::نکته این کامپوننت دیگر در <a href="https://m2.material.io/">دستورالعمل‌های طراحی مواد</a> مستند نیست، اما رابط کاربری Material UI همچنان از آن پشتیبانی می‌کند. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استپر افقی
      </Typography>
      <Typography className="mb-40" component="div">
      استپرهای افقی زمانی ایده آل هستند که محتویات یک مرحله به مرحله قبلی بستگی داشته باشد.
      </Typography>
      <Typography className="mb-40" component="div">
      از به کار بردن نام های طولانی در استپرهای افقی خودداری کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       خطی
      </Typography>
      <Typography className="mb-40" component="div">
      یک استپر خطی به کاربر این امکان را می دهد که مراحل را به ترتیب انجام دهد.
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Stepper</code> را می توان با عبور از نمایه استپ فعلی (مبتنی بر صفر) به عنوان پراپ <code>activeStep</code> کنترل کرد.. جهت‌گیری <code>Stepper</code> با استفاده از پراپ <code>orientation</code> تنظیم می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال همچنین استفاده از یک مرحله اختیاری را با قرار دادن پراپ <code>optional</code> روی کامپوننت<code>Step</code> دوم نشان می دهد.. توجه داشته باشید که مدیریت زمانی که یک مرحله اختیاری رد می شود به عهده شماست. هنگامی که این را برای یک مرحله خاص تعیین کردید، باید
<code>{`completed={false}`}</code> را تنظیم کنید تا به این معنی باشد که حتی اگر نمایه مرحله فعال فراتر از مرحله اختیاری رفته است، در واقع کامل نیست.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalLinearStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/HorizontalLinearStepper.js').default}
          raw={require('!raw-loader!../components/steppers/HorizontalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      غیر خطی
      </Typography>
      <Typography className="mb-40" component="div">
      استپر های غیر خطی به کاربر این امکان را می دهند که در هر نقطه وارد یک جریان چند مرحله ای شود.
      </Typography>
      <Typography className="mb-40" component="div">
      مرحله را کامل کنید این مثال شبیه به استپ افقی معمولی است، با این تفاوت که مراحل دیگر به طور خودکار بر اساس پراپ <code>activeStep</code> روی <code>{`disabled={true}`}</code> تنظیم نمی شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      استفاده از <code>StepButton</code> در اینجا برچسب‌های مرحله قابل کلیک و همچنین تنظیم پرچم <code>تکمیل شده</code> را نشان می‌دهد.با این حال، از آنجایی که مراحل را می‌توان به صورت غیر خطی در دسترس قرار داد، تعیین اینکه چه زمانی تمام مراحل تکمیل شده‌اند (یا حتی اگر باید تکمیل شوند) به عهده خودتان است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalNonLinearStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/HorizontalNonLinearStepper.js').default}
          raw={require('!raw-loader!../components/steppers/HorizontalNonLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      لیبل   جایگزین
      </Typography>
      <Typography className="mb-40" component="div">
      لیبل ها را می توان در زیر آیکون استپ با تنظیم پراپ alternativeLabel در کامپوننت Stepper قرار داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalLinearAlternativeLabelStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('../components/steppers/HorizontalLinearAlternativeLabelStepper.js').default
          }
          raw={require('!raw-loader!../components/steppers/HorizontalLinearAlternativeLabelStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       استپ خطا
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalStepperWithError.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/HorizontalStepperWithError.js').default}
          raw={require('!raw-loader!../components/steppers/HorizontalStepperWithError.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      استپر افقی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. شما می توانید در مورد این در
        <a href="/material-ui/customization/how-to-customize/">صفحه اسناد overrid</a> بیشتر مطالعه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSteppers.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/CustomizedSteppers.js').default}
          raw={require('!raw-loader!../components/steppers/CustomizedSteppers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استپر عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      استپر های عمودی برای اندازه های صفحه نمایش باریک طراحی شده اند. آنها برای موبایل ایده آل هستند. تمامی ویژگی های استپر افقی قابل پیاده سازی است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalLinearStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/VerticalLinearStepper.js').default}
          raw={require('!raw-loader!../components/steppers/VerticalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کارایی
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای یک استپ زمانی که بسته می‌شود خارج می‌شود.اگر نیاز دارید که محتوا را در دسترس موتورهای جستجو قرار دهید یا در حین بهینه‌سازی، درخت‌های کامپوننت غنی را در داخل مدال خود ارائه دهید
  پاسخگویی تعامل ممکن است ایده خوبی باشد که گام را با آن ثابت نگه دارید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<StepContent TransitionProps={{ unmountOnExit: false }} />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       استپر موبایل
      </Typography>
      <Typography className="mb-40" component="div">
      این کامپوننت یک استپر فشرده مناسب برای یک دستگاه تلفن همراه پیاده سازی می کند. عملکرد محدودتری نسبت به استپر عمودی دارد. برای الهام گرفتن از آن به <a href="https://m1.material.io/components/steppers.html#steppers-types-of-steps"> استپ های موبایل </a> مراجعه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      استپر موبایل از سه نوع برای نمایش پیشرفت در مراحل موجود پشتیبانی می کند: متن، نقطه و پیشرفت.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        متن
      </Typography>
      <Typography className="mb-40" component="div">
      استپ فعلی و تعداد کل مراحل به صورت متن نمایش داده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/TextMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/TextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      متن با افکت  کروسل
      </Typography>
      <Typography className="mb-40" component="div">
      این نسخه نمایشی از <a href="https://github.com/oliviertassinari/react-swipeable-views"> react-swipeable-views </a>{' '} برای ایجاد یک کروسل استفاده می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableTextMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/SwipeableTextMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/SwipeableTextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        نقطه ها
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی تعداد مراحل کم است از نقطه استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DotsMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/DotsMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/DotsMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پیشرفت
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که مراحل زیادی وجود دارد، یا اگر مراحلی وجود دارد که باید در طول فرآیند درج شوند (بر اساس پاسخ به مراحل قبلی) از نوار پیشرفت استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ProgressMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/ProgressMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/ProgressMobileStepper.js')}
        />
      </Typography>
    </>
  );
}

export default SteppersDoc;
