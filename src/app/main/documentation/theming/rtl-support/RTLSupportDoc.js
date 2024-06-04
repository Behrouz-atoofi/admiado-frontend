import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function RTLSupportDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        پشتیبانی راستچینن
      </Typography>

      <Typography className="mb-16" component="p">
      Fuse React از زبان های راست به چپ مانند عربی، فارسی یا عبری و غیره پشتیبانی می کند.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        توسعه
      </Typography>

      <Typography className="mb-16" component="p">
   

        ما از اصلاح‌کننده‌های    <a
          href="https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support"
          target="_blank"
          rel="noopener noreferrer"
        >rtl و ltr TailwindCss</a> و افزونه   <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
        <code>jss-rtl</code>
      </a>{' '} برای پشتیبانی از ویژگی RTL Fuse React استفاده کردیم.

      </Typography>

      <Typography className="mb-16" component="p">

      <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
          <code>jss-rtl</code>
        </a>{' '} با برگرداندن هر قانون سبک های jss در محور x، پشتیبانی از راست به چپ را فعال می کند. با استفاده از این افزونه می توانید برنامه را از چپ به راست بنویسید و سپس آن را به راست به چپ تبدیل کنید. یا می توانید از راست به چپ شروع کنید و آن را به چپ به راست تبدیل کنید.


  
      </Typography>

      <Typography className="mb-16" component="p">

      <a
          href="https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support"
          target="_blank"
          rel="noopener noreferrer"
        > <code>اصلاح‌کننده‌های rtl و ltr TailwindCss </code> </a> یک نوع جهت سفارشی برای پروژه tailwind شما هستند که به شما امکان می‌دهند قوانین CSS سفارشی برای طرح‌بندی‌های LTR و RTL داشته باشید. مثلا:



      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
            <div class="text-green text-2xl ltr:pl-4 rtl:pr-4">
                Hello, world.
            </div>
        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پیکربندی
      </Typography>

      <Typography className="mb-16" component="p">
      جهت زبان قالب به زبان قالب بستگی دارد. بنابراین نیازی به تعریف مقدار جهت نیست.{' '}
        <Link className="link mx-8" to="/documentation/mock-api">
        پیکربندی چند زبانه
        </Link>
        {' '}را بررسی کنید.
      </Typography>
    </>
  );
}

export default RTLSupportDoc;
