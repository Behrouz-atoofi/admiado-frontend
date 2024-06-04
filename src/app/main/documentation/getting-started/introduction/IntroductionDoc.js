import Typography from '@mui/material/Typography';

function IntroductionDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      معرفی
      </Typography>

      <Typography className="mb-16" component="p">
      این نسخه از Fuse یک قالب مدیریت سنتی <i>نیست،</i> یک برنامه React است که به طور کامل با جاوا اسکریپت نوشته شده است و هیچ وابستگی به جی کوئری ندارد.
      </Typography>
      <Typography className="mb-16" component="p">
      در حالی که Fuse React یک ابزار و منبع عالی برای یادگیری React است، اما به حداقل سطح دانش React، Redux نیاز دارد تا بتوانید مسیر خود را در کد منبع پیدا کنید.
      </Typography>
      <Typography className="mb-32" component="p">
      در اینجا می توانید لیستی از کتابخانه های اصلی، مشخصات طراحی و استانداردهای کدگذاری را که در Fuse React استفاده می کنیم، بیابید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      'گوگل متریال دیزاین'
      </Typography>
      <Typography className="mb-16" component="p">
      همه کتابخانه ها و اجزای سفارشی ساخته شده از{' '}
        <a
          href="https://www.google.com/design/spec/material-design/introduction.html"
          target="_blank"
          rel="noreferrer noopener"
        >
        مشخصات گوگل متریال دیزاین پیروی می‌کند
        </a>
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        ری اکت
      </Typography>
      <Typography className="mb-16" component="p">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
          ری اکت
        </a>{' '}
        هسته قالب ما است. اگر نمی‌دانید React چیست یا نمی‌دانید چگونه از آن استفاده کنید، توصیه می‌کنیم قبل از شروع هر کاری ،با ری اکت Fuse را بررسی کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      متریال یو آی
      </Typography>
      <Typography className="mb-16" component="p">
        <a href="https://mui.com" target="_blank" rel="noreferrer noopener">
        متریال یو آی
        </a>{' '}
        یک کتابخانه react UI است که مشخصات گوگل متریال دیزاین را پیاده سازی می کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        تیلویند سی اس اس
      </Typography>
      <Typography className="mb-16" component="p">
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">
        تیلویند سی اس اس
        </a>{' '}
        هسته پیکربندی استایل است و تقریباً برای هر قانون CSS موجود کلاس های کاربردی را ارائه می دهد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Create React App (CLI)
      </Typography>
      <Typography className="mb-16" component="p">
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
   دستور        Create React App
        </a>{' '}
        ابزاری است که توسط توسعه دهندگان فیس بوک ساخته شده است تا به شما در ساخت برنامه های React کمک کند. این ابزار شما را از راه اندازی و پیکربندی وقت گیر نجات می دهد.
      </Typography>
    </>
  );
}

export default IntroductionDoc;
