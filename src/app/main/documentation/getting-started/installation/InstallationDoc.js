import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function InstallationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        نصب
      </Typography>

      <Typography className="text-20 mb-10 font-700" variant="h5">
      پیش نیازها
      </Typography>

      <Typography className="mb-16" component="p">
      در این بخش اطلاعاتی در مورد ابزارهایی که نیاز دارید به شما ارائه می شود.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        نود.جی اس
      </Typography>

      <Typography className="mb-16" component="p">
      برای نصب و استفاده از Fuse React، باید  <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">Node.js    </a>{' '} را روی رایانه خود نصب کنید.
    
    
      ما به جزئیات زیادی در مورد Node.js نمی پردازیم زیرا خارج از محدوده این مستندات است. همچنین، نیازی به استفاده از Node.js نخواهید داشت، فقط برای فرآیند توسعه مورد نیاز است.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        نصب
      </Typography>

      <Typography className="text-16 mt-24 mb-10 font-700" variant="h6">
      الف. نصب پیش نیازها
      </Typography>

      <Typography className="" component="div">
      حداقل <b>LTS</b> یا آخرین نسخه  <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">Node.js </a>{' '} را از وب سایت آن دانلود و نصب کنید.
       
   
    
      </Typography>

      <Typography className="text-16 mt-24 mb-10 font-700" variant="h6">
      ب. نصب Fuse React
      </Typography>

      <Typography className="" component="div">
      قبل از شروع نصب Fuse، پوشه‌ای را آماده کنید تا بتوانید فایل zip. دانلود شده را از حالت فشرده خارج کنید.
      </Typography>

      <div className="mx-16 my-32">
        <Typography className="flex text-15 mb-10 font-700" variant="h7">
        ب.1. نسخه ای را که می خواهید نصب کنید انتخاب کنید
        </Typography>

        <Typography className="" component="div">
        هنگامی که فایل .zip را که از Themeforest دانلود کرده اید از حالت فشرده خارج می کنید، 2 فایل .zip اضافی را به همراه فایل های دیگر خواهید دید. یکی از آن فایل‌های zip نسخه آزمایشی و دیگری نسخه Skeleton است:
        </Typography>

        <ul className="list-disc mx-16">
          <li>
            <Typography className="mt-12" component="div">
              نسخه نمایشی <b>Fuse-react-x.x.x-demo.zip</b>
            </Typography>
            <Typography className="mt-12" component="div">
            این فایل .zip شامل نسخه آزمایشی است که شامل تمام برنامه‌ها، صفحات و بخش‌های رابط کاربری از برنامه آزمایشی است. این نسخه فقط برای مقاصد ارجاع است و باید فقط برای کپی کد/ماژول از آن استفاده شود.
            </Typography>
            <Typography className="mt-12" component="div">
            از نسخه آزمایشی برای ساخت برنامه خود استفاده <b>نکنید،</b> در غیر این صورت از همان ابتدا حجم غیر ضروری زیادی برای برنامه خود خواهید داشت و این باعث تجربه توسعه ضعیف خواهد شد.
            </Typography>
          </li>

          <li>
            <Typography className="mt-12" component="div">
              Skeleton <b>Fuse-react-x.x.x-skeleton.zip</b>
            </Typography>
            <Typography className="mt-12" component="div">
            این فایل .zip شامل نسخه Skeleton است که شامل تمام اجزای اصلی و عملکرد Fuse بدون برنامه‌های آزمایشی، صفحات و بخش‌های رابط کاربری است. از نسخه Skeleton برای ساخت برنامه خود در بالا استفاده کنید
            </Typography>
          </li>
        </ul>

        <Typography className="flex text-15 mt-32 mb-10 font-700" variant="h7">
        ب.2. از حالت فشرده خارج کردن
        </Typography>

        <Typography className="" component="div">
        پس از انتخاب نسخه ای که می خواهید نصب کنید، فایل .zip آن نسخه را در پوشه فضای کاری خود از حالت فشرده خارج کنید.
        </Typography>
      </div>

      <Typography className="text-16 mt-24 mb-10 font-700" variant="h6">
      ج- دستور نصب را اجرا کنید
      </Typography>

      <Typography className="mb-16" component="div">
      یک پنجره کنسول/ترمینال را باز کنید و به دایرکتوری فضای کاری خود بروید. برای اجرای دستورات باید در همان پوشه ای که فایل package.json قرار دارد، باشید
      </Typography>

      <Typography className="mb-16" component="div">
      برای تکمیل نصب، دستور زیر را وارد کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-bash mb-16">
        {` npm install `}
      </FuseHighlight>

      <Typography className="mb-16" component="div">
      این دستور کمی زمان‌بر  خواهد بود و تمام کتابخانه های مورد نیاز را در دایرکتوری node_modules نصب می کند تا شما شروع به توسعه  وبسایت کنید.
      </Typography>

      <Box className="mb-24 px-24 py-16 border-1 rounded-16" sx={{ borderColor: 'secondary.main' }}>
        <Typography className="" component="div">
        پس از اتمام نصب، ممکن است هشدارهایی در مورد بسته های منسوخ شده و خطرات امنیتی مشاهده کنید. می‌توانید با خیال راحت آن پیام‌ها را نادیده بگیرید زیرا Fuse (و سایر برنامه‌های React) از Node.js فقط برای محیط توسعه استفاده می‌کنند. <br /> <br /> مگر اینکه به صراحت یک بسته را به لیست وابستگی های خود در فایل package.json اضافه کنید، آنها در برنامه نهایی گنجانده نمی شوند، بنابراین هیچ خطر امنیتی ایجاد نمی کنند.
        </Typography>
      </Box>
    </>
  );
}

export default InstallationDoc;
