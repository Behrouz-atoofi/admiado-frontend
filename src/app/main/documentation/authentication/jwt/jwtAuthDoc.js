import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function JwtAuthDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      نمونه سرویس احراز هویت JWT
      </Typography>

      <Typography className="mb-16" component="p">
      با سرویس احراز هویت JWT در Fuse React.
      </Typography>

      <ul>
        <li className="mb-12">
        می توانید <Link to="/sign-up">ثبت نام کنید</Link>.
        </li>
        <li className="mb-12">
          می توانید <Link to="/sign-in">به سامانه ورود کنید</Link>.
        </li>
        <li className="mb-12">
        همچنین داده‌های کاربر (میانبرهای کاربر، تنظیمات طرح‌بندی و تم) را در دیتابیس ذخیره می‌کند.
        </li>
      </ul>

      <Typography className="mt-32 mb-16" component="p">
      پوشه خدمات مرتبط در <code>/src/app/auth/services/jwtService</code> قرار دارد
      </Typography>

      <Typography className="my-24 italic" component="p" color="text.secondary">
      توجه: مطمئن شوید که کامپوننت {`<Router>`} با {`<AuthProvider>`} در <code>src/app/App.js</code> پیچیده شده است. سرویس در مولفه AuthProvider مقداردهی اولیه می شود.
      </Typography>

      <Typography className="my-24 italic" component="p" color="text.secondary">
      مهم: ما هیچ کد بک-اندی به شما نمی دهیم. ما این بخش را با <code>@mock-api</code> نشان می دهیم (که با درخواست های https به صورت واقعی کار می کند).
      </Typography>
    </>
  );
}

export default JwtAuthDoc;
