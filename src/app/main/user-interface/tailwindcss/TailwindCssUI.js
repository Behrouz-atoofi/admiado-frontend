import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function TailwindCssUI() {
  return (
    <Root
      header={
        <div className="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-24 sm:py-32 sm:px-40">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center font-medium">
              <div>
                <Typography className="whitespace-nowrap" color="secondary.main">
                رابط کاربری
                </Typography>
              </div>
            </div>
            <div className="mt-8">
              <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
                TailwindCSS
              </Typography>
            </div>
          </div>
        </div>
      }
      content={
        <div className="flex-auto p-24 sm:p-40">
          <div>
            <Typography className="mb-16">
            همانطور که در صفحه رسمی Tailwind CSS آمده است، یک چارچوب CSS  قابل تنظیم و سطح پایین است که تمام بلوک‌های ساخت مورد نیاز برای ساخت طرح‌های سفارشی را در اختیار شما قرار می‌دهدبدون هیچ گونه سبک های آزاردهنده ای که باید برای نادیده گرفتن آنها بجنگید، در اختیار شما قرار می دهد.
            </Typography>

            <Typography className="mb-16">
            به بیان ساده، Tailwind  کلاس های کمکی را برای تقریباً هر قانون CSS موجود ارائه می دهد. فیوز به طور پیش فرض Tailwind را شامل می شود و از آن استفاده می کند و می توان از آن در هر بخشی از قالب استفاده کرد.
            </Typography>

            <Typography className="text-20 font-700 mt-32 mb-16">استایل دهی در Material-UI</Typography>

            <Typography className="mb-16" component="p">
            Fuse React بر اساس Material-UI به عنوان کتابخانه رابط کاربری توسعه یافته است.
              <a
                className="mx-4"
                href="https://mui.com/system/basics/"
                target="_blank"
                rel="noopener noreferrer"
              >
         استایل دهی  Material-UI
              </a>
              
             از emotion در هسته خود استفاده میکند.بنابراین قالب Fuse React از 
              <a
                className="mx-4"
                href="http://cssinjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Emotion
              </a>{' '}
              پشتیبانی می‌کند.
              (Emotion is a library designed for writing css styles with JavaScript)
              ( Emotion کتابخانه ای برای نوشتن استایل های css توسط جاوااسکریپت می‌باشد)
            </Typography>
          </div>

          <div>
            <Typography className="text-20 font-700 mt-32 mb-16" variant="h5">
            کلاس های کمکی با TailwindCSS
            </Typography>

            <Typography className="mb-16" component="p">
            ما مزایای JSS را می‌پذیریم، اما نمی‌توانیم <b>کلاس‌های کمکی</b> را برای توسعه سریع، سهولت استفاده، دسترسی جهانی و غیره ترک کنیم. بنابراین از هر دو در کامپوننت‌ها استفاده کرده‌ایم.
            </Typography>

            <Typography className="mb-16" component="p">
             ما از
              <a
                className="mx-4"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
              به عنوان موتوری برای تولید کلاس های کمکی استفاده می کنیم. این یک کیت UI نیست و قابل تنظیم است. می توانید فایل پیکربندی Tailwind را با نام "<b>tailwind.js</b>" در زیر ریشه Fuse React پیدا کنید.
            </Typography>
          </div>

          <Typography className="text-20 font-700 mt-32 mb-16">اسناد رسمی</Typography>

          <Typography className="my-16">
         :  مستندات رسمی 
            <Typography
              component="a"
              className="link mx-4"
              href="https://tailwindcss.com/"
              rel="noreferrer"
              target="_blank"
            >
              https://tailwindcss.com/
            </Typography>
          </Typography>
        </div>
      }
    />
  );
}

export default TailwindCssUI;
