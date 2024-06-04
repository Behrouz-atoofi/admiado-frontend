import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function CssBaselineDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/css-baseline"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      بیس لاین CSS  ( CSS Baseline)
      </Typography>
      <Typography className="description">
      کامپوننت CssBaseline به شروع یک خط پایه ظریف، سازگار و ساده برای ایجاد کمک می کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بازنشانی 'گلوبال'
      </Typography>
      <Typography className="mb-40" component="div">
      ممکن است با{' '} <a href="https://github.com/necolas/normalize.css">normalize.css</a>، مجموعه‌ای از المنت های HTML و ویژگی‌های سبک-نرمال‌سازی آشنا باشید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* بقیه اپلیکیشن شما */}
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدوده بندی بر روی فرزندان
      </Typography>
      <Typography className="mb-40" component="div">
      با این حال، ممکن است به تدریج یک وب سایت را به MUI منتقل کنید، استفاده از تنظیم مجدد گلوبال ممکن است جزو انتخاب ها نباشد.با استفاده از کامپوننت{' '} <code>ScopedCssBaseline</code>، می‌توان خط پایه را فقط برای فرزندان اعمال کرد.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/*بقیه اپلیکیشن شما  */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        ⚠️ مطمئن شوید که ابتدا <code>ScopedCssBaseline</code> را وارد کرده اید تا مانند مثال بالا از تداخل اندازه جعبه جلوگیری کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رویکرد
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        صفحه
      </Typography>
      <Typography className="mb-40" component="div">
      المنت های <code>{`<html>`}</code> و <code>{`<body>`}</code> به‌روزرسانی می‌شوند تا پیش‌فرض‌های بهتری در سراسر صفحه ارائه کنند. به طور خاص:
      </Typography>
      <ul>
        <li>حاشیه در همه مرورگرها حذف شده است.</li>
        <li>
           رنگ پس‌زمینه متریال دیزاین پیش‌فرض اعمال می‌شود. از{' '} 
           <a href="/material-ui/customization/default-theme/?expand-path=$.palette.background">
             <code>theme.palette.background.default</code>
           </a>{' '}
     برای دستگاه های استاندارد و پس زمینه سفید برای دستگاه های چاپ استفاده می کند.
         </li>
        <li>

        اگر enableColorScheme به CssBaseline ارائه شود، رنگ کامپوننت های بومی با اعمال   <a href="https://web.dev/color-scheme/">
            <code>color-scheme</code>
          </a> در <code>{`<html>`}</code> تنظیم می شود. مقدار استفاده شده توسط ویژگی theme  <code>theme.palette.mode</code> ارائه می شود.

        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        طرح بندی
      </Typography>
      <ul>
        <li>


        <code>box-sizing</code> به صورت سراسری در المنت <code>{`<html>`}</code> به <code>border-box</code> تنظیم شده است. هر المنت-از جمله <code>*::before</code> و  <code>*::after</code> برای به ارث بردن این ویژگی اعلام می شود، که تضمین می کند که از عرض اعلام شده المنت هرگز به دلیل padding یا حاشیه تجاوز نمی شود.


  
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        اسکرول بار
      </Typography>
      <Typography className="mb-40" component="div">
      :::خطا این API منسوخ شده است. به جای آن از <a href="#color-scheme">طرح رنگ</a>{' '}استفاده کنید. :::
      </Typography>
      <Typography className="mb-40" component="div">
      رنگ نوارهای اسکرول را می توان برای بهبود کنتراست سفارشی کرد (مخصوصاً در ویندوز). این کد را به تم خود اضافه کنید (برای حالت تاریک).
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import darkScrollbar from '@mui/material/darkScrollbar';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
      }),
    },
  },
});
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      اما توجه داشته باشید که استفاده از این ابزار (و سفارشی کردن <code>-webkit-scrollbar</code>) سیستم عامل مک را مجبور می کند که همیشه نوار اسکرول را نشان دهد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      طرح رنگی
      </Typography>
      <Typography className="mb-40" component="div">
      این API در @mui/material (v5.1.0) برای جابجایی بین{' '} <code>{`"light"`}</code> و <code>{`"dark"`}</code> معرفی شده است. حالت های اجزای بومی مانند نوار اسکرول، با استفاده از ویژگی CSS <code>color-scheme</code>. برای فعال کردن آن، می توانید <code>enableColorScheme=true</code> را به صورت زیر تنظیم کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<CssBaseline enableColorScheme />

// یا

<ScopedCssBaseline enableColorScheme >
  {/* بقیه برنامه شما با استفاده از طرح رنگ*/}
</ScopedCssBaseline>
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        تایپوگرافی
      </Typography>
      <ul>
        <li>
        هیچ اندازه فونت پایه در <code>{`<html>`}</code> اعلام نشده است، اما 16 پیکسل در نظر گرفته شده است (پیش‌فرض مرورگر). می‌توانید درباره پیامدهای تغییر اندازه فونت پیش‌فرض{' '}<code>{`<html>`}</code> در{' '} <a href="/material-ui/customization/typography/ اطلاعات بیشتری کسب کنید. صفحه #html-font-size"> مستندات موضوع</a>{' '}.
        </li>
        <li>
        سبک <code>theme.typography.body1</code> را روی المنت <code>{`<body>`}</code> تنظیم کنید.
        </li>
        <li>

        font-weight را برای المنت های {`<b>`} و {`<strong>`} روی theme.typography.fontWeightBold تنظیم کنید.
        
        </li>
        <li>
        font-smoothing   سفارشی برای نمایش بهتر فونت Roboto فعال است.
         </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      برای تغییر خروجی این کامپوننت ها به بخش <a href="/material-ui/customization/how-to-customize/#4-global-css-override">
        سفارشی سازی جهانی 
        </a>{' '} مستندات بروید.
        
    
      </Typography>
    </>
  );
}

export default CssBaselineDoc;
