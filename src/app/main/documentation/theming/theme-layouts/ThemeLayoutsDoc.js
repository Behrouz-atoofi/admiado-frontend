import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function ThemeLayoutsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      طرح بندی تم
      </Typography>

      <Typography className="mb-16" component="p">
      فیوز دارای طرح‌بندی‌های مختلف تم است که می‌توانید آن‌ها را از نوار کناری پیکربندی ببینید و امتحان کنید (روی دکمه چرخان متحرک از سمت راست صفحه خود کلیک کنید).
      </Typography>

      <Typography className="mb-16" component="p">
      این طرح‌بندی‌ها از فهرست <code>/app/theme-layouts</code> قابل دسترسی هستند و می‌توانید هر طور که دوست دارید آنها را تغییر دهید. هر طرح بندی گزینه های خاص خود را دارد. این گزینه ها به شما امکان می دهند عناصر طرح بندی مانند نوار ابزار، پاورقی و نوار ناوبری را پیکربندی کنید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      ساختار فایل
      </Typography>

      <Typography className="my-16" component="div">
      داخل فهرست <code>/app/theme-layouts</code>
        <ul className="my-8 list-disc ml-16">
          <li className="mb-8">
            <b>/طرح-1</b> :
            <ul className="my-8 ml-12">
              <li className="mb-8">
                <b>/components</b> : حاوی عناصر Layout مانند Toolbar، Footer و Navbar است.
              </li>
              <li className="mb-8">
                <b>/Layout1.js</b> :کامپوننت طرح - 1
              </li>
              <li className="mb-8">
                <b>/Layout1.config.js</b> : شامل عنوان، تنظیمات پیش‌فرض و گزینه‌های فرم طرح‌بندی است.
              </li>
            </ul>
          </li>
          <li className="mb-8">
            <b>/shared components</b> : هر طرح بندی اجزای این دایرکتوری را به اشتراک می گذارد
          </li>
          <li className="mb-8">
            <b>/themeLayoutConfigs.js</b> :تمام تنظیمات طرح بندی را وارد می کند
          </li>
          <li className="mb-8">
            <b>/themeLayouts.js</b> : تمام کاپوننت های طرح را وارد می کند.
          </li>
          <li className="mb-8">
            <b>/طرح-2</b>
          </li>
          <li className="mb-8">
            <b>/طرح-3</b>
          </li>
        </ul>
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پیکر بندی کردن
      </Typography>

      <Typography className="mb-16" component="p">
      Fuse React دارای یک سیستم چیدمان قدرتمند است که به شما امکان می دهد در هر مسیر یک طرح بندی متفاوت را پیکربندی و استفاده کنید
      </Typography>

      <Typography className="mb-16" component="p">
      هر مسیر می‌تواند پیکربندی طرح‌بندی خاص خود را داشته باشد، به این معنی که داشتن صفحاتی مانند صفحه ورود که در آن نوار ابزار یا نوار ناوبری نمایش داده نمی‌شود، بدون خروج از FuseReact بسیار آسان است.
      </Typography>

      <Typography className="mb-16" component="p">
      می‌توانید اطلاعات بیشتری درباره پیکربندی مسیر و استفاده از آن از{' '} <Link to="/documentation/configuration/routing">صفحه مستندات مسیریابی</Link> دریافت کنید.
      </Typography>
    </>
  );
}

export default ThemeLayoutsDoc;
