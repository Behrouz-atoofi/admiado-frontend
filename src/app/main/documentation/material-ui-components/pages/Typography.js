import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TypographyDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/typography"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      تایپوگرافی
      </Typography>
      <Typography className="description">
      از تایپوگرافی برای ارائه طرح و محتوای خود به بالاترین حد وضوح و کارآمدی استفاده کنید.
      </Typography>

      <Typography className="mb-40" component="div">
        تایپ سایز ها و استایل های بیش از حد، میتواند هر طرح بندی ای را خراب و بهم ریخته کند.
        یک {' '} <a href="https://m2.material.io/design/typography/#type-scale">مقیاس تایپوگرافی</a> دارای مجموعه محدودی از تایپ سایز هایی است که به خوبی با یکدیگر همراه با طرح بندی شبکه کار می‌کنند
      </Typography>

     
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عمومی
      </Typography>
      <Typography className="mb-40" component="div">
      فونت <em>Roboto</em> به طور خودکار توسط MUI بارگیری نمی شود. شما مسئول بارگیری فونت های استفاده شده در برنامه خود هستید. فونت Roboto  با چند راه ساده آماده استفاده میشود. برای پیکربندی پیشرفته‌تر، <a href="/material-ui/customization/typography/">بخش سفارشی‌سازی تم</a> را بررسی کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      CDN فونت Roboto
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر یک نمونه نشانه گذاری پیوند مورد استفاده برای بارگیری فونت Roboto از یک CDN نشان داده شده است:
      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {` 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       نصب با npm
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید با اجرای یکی از دستورات زیر در ترمینال خود <a href="https://www.npmjs.com/package/@fontsource/roboto">آن را نصب کنید</a>:
      </Typography>
      <Typography className="mb-40" component="div">
        با <strong>npm</strong>:
      </Typography>
      <Typography className="mb-40" component="div">
        <code>npm install @fontsource/roboto</code>
      </Typography>
      <Typography className="mb-40" component="div">
        یا <strong>yarn</strong>:
      </Typography>
      <Typography className="mb-40" component="div">
        <code>yarn add @fontsource/roboto</code>
      </Typography>
      <Typography className="mb-40" component="div">
      سپس، می توانید آن را در نقطه ورود خود وارد کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای اطلاعات بیشتر به <a href="https://github.com/fontsource/fontsource">Fontsource</a> مراجعه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      Fontsource  را می توان برای بارگیری زیرمجموعه ها، وزن ها و استایل های خاص پیکربندی کرد. پیکربندی پیش‌فرض تایپوگرافی MUI فقط بر وزن فونت‌های 300، 400، 500 و 700 متکی است.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        کامپوننت
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت تایپوگرافی اعمال یک مجموعه پیش فرض از وزن و اندازه فونت را در برنامه شما آسان می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Types.js"
          className="my-24"
          iframe={false}
          component={require('../components/typography/Types.js').default}
          raw={require('!raw-loader!../components/typography/Types.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        تم
      </Typography>
      <Typography className="mb-40" component="div">
      در برخی شرایط ممکن است نتوانید از کامپوننت <code>تایپوگرافی</code> استفاده کنید..
     
        خوشبختانه شما ممکن است بتوانید از کلیدهای <a href="/material-ui/customization/default-theme/?expand-path=$.typography">
          <code>typography</code>
        </a>{' '} قالب استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TypographyTheme.js"
          className="my-24"
          iframe={false}
          component={require('../components/typography/TypographyTheme.js').default}
          raw={require('!raw-loader!../components/typography/TypographyTheme.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تغییر المنت معنایی
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت تایپوگرافی از پراپس <code>variantMapping</code> برای مرتبط کردن یک نوع رابط کاربری با یک المنت معنایی استفاده می کند. مهم است که بدانیم استایل یک کامپوننت تایپوگرافی مستقل از المنت زیربنایی معنایی است.
      </Typography>
      <ul>
        <li>
        می‌توانید المنت زیربنایی را برای یک موقعیت یکباره با پراپس{' '}<code>component</code> تغییر دهید:
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
{
  /* در حال حاضر یک h1 در صفحه وجود دارد، آن را کپی نکنیم. */
}
<Typography variant="h1" component="h2">
h1. heading
</Typography>;
`}
      </FuseHighlight>
      <ul>
        <li>
        می‌توانید نقشه‌برداری{' '} <a href="/material-ui/customization/typography/#adding-amp-disabling-variants"> را به صورت 'گلوبال' با استفاده از طرح زمینه تغییر دهید
           </a>
          :
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-js">
        {` 
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      افزودن &amp; غیرفعال کردن variants
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر استفاده از انواع پیش‌فرض تایپوگرافی، می‌توانید variant های سفارشی را اضافه کنید یا هر کدام را که نیاز ندارید غیرفعال کنید. مثال
        <a href="/material-ui/customization/typography/#adding-amp-disabling-variants">
        افزودن &amp; غیرفعال کردن variants
        </a>{' '}
       را برا اطلاعات بیشتر ببینید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       پراپس سیستم
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک کامپوننت ابزار CSS، <code>Typography</code> از همه ویژگی‌های <a href="/system/properties/"> <code>سیستم</code> </a> پشتیبانی می‌کند. شما می توانید آنها را به عنوان یک پراپس  به طور مستقیم بر روی کامپوننت استفاده کنید. به عنوان مثال، یک margin-top:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Typography mt={2}>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      چند فاکتور کلیدی که برای یک تایپوگرافی قابل دسترسی باید رعایت شود:
      </Typography>
      <ul>
        <li>
          <strong>رنگ</strong>.کنتراست کافی بین متن و پس‌زمینه آن ایجاد کنید،, 
        {" "}
          <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">
            WCAG 2.0 color contrast ratio
          </a>
          (4.5:1). {" "}
          را بررسی کنید
        </li>
        <li>
          <strong>فونت سایز</strong>. از{' '}
          <a href="/material-ui/customization/typography/#font-size">واحدهای نسبی (rem)</a> برای تطبیق با تنظیمات کاربران استفاده کنید.
        </li>
        <li>
          <strong>سلسله مراتب سرفصل ها</strong>.{' '}
          سطح بندی هدر ها را {' '}
          <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">نادیده نگیرید</a>{' '}
         به مظنور حل این مشکل, شما باید{' '}
          <a href="#changing-the-semantic-element">معناشناسی را از استایل جدا کنید</a>.
        </li>
      </ul>
    </>
  );
}

export default TypographyDoc;
