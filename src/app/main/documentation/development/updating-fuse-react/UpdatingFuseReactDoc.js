import Typography from '@mui/material/Typography';

function UpdatingFuseReactDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      به روز رسانی Fuse React
      </Typography>

      <Typography className="mb-16" component="p">
      Fuse React یک محصول نهایی یا یک افزونه نیست، بنابراین هیچ راه آسانی برای به روز رسانی پروژه وجود ندارد. به دلیل ماهیت برنامه‌ها، نمی‌توانیم دستورالعمل‌های مجموعه‌ای برای به‌روزرسانی Fuse React ارائه دهیم. این به شدت به پروژه شما بستگی دارد و این به شما بستگی دارد که کد خود را به روز کنید. با این حال، چند نکته وجود دارد که می خواهیم مطرح کنیم که کمک کند ری اکت شما به روز باشد:
      </Typography>

      <Typography className="my-16" component="div">
        <ol>
          <li className="mb-16">
          مهمترین چیز این است که دایرکتوری /@fuse را دستکاری نکنید، اما گاهی اوقات این امر اجتناب ناپذیر است و در این موارد، سعی کنید تغییرات را به حداقل برسانید.
          </li>
          <li className="mb-16">
          معمولاً کتابخانه های React و Material UI تغییرات اساسی انجام می دهند و ما را مجبور می کنند تا فایل ها را تغییر دهیم. در این موارد، بهتر است که تغییرات رسمی آنها را بررسی کنید تا ببینید چه کاری انجام داده اند. معمولاً آنها دستورالعمل های واضح و حتی ابزار کمکی را ارائه می دهند
            update your code.
          </li>
          <li className="mb-16">
          قبل از شروع پروژه جدید,{' '}
            <a
              href="http://support.withinpixels.com/github"
              target="_blank"
              rel="noreferrer noopener"
            >
             به مخزن Github ما بپیوندید
            </a>
            , آن را فورک کنید و برنامه خود را در بالای آن فورک بسازید. به این ترتیب در آینده می توانید به راحتی تغییرات را از مخزن اصلی در فورک خود ادغام یا مقایسه کنید. این به ادغام بسیاری از تغییرات به صورت دستی نیاز دارد، اما این بهترین راه برای به روز نگه داشتن Fuse React است.
          </li>
        </ol>
      </Typography>
    </>
  );
}

export default UpdatingFuseReactDoc;
