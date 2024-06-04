import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function DevelopmentServerDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        سرور توسعه
      </Typography>

      <Typography className="mb-16" component="p">
      در حالی که هنوز در پوشه کاری خود هستید، دستور زیر را در برنامه کنسول اجرا کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-bash my-16">
        {` npm start `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
      و تمام. Create-react-app از همه چیز مراقبت می کند و Fuse React را راه اندازی می کند.
      </Typography>

      <Typography className="mb-16" component="p">
      برای دریافت اطلاعات بیشتر در مورد سرور می توانید برنامه کنسول خود را بررسی کنید. به طور پیش‌فرض، در <b>http://localhost:3000</b> اجرا می‌شود، اما ممکن است بسته به تنظیمات شما تغییر کند.
      </Typography>

      <div className="my-24 px-24 py-16 border-1 border-red rounded-16">
        <Typography className="mb-8 font-500 text-16 text-red">مهم:</Typography>
        <Typography className="" component="div">
        اگر در اجرای اول خطاهای زمان اجرا دارید، مطمئن شوید که حداقل از نسخه LTS Node.js استفاده می کنید. node_modules را حذف کنید و دوباره امتحان کنید.
        </Typography>
      </div>
    </>
  );
}

export default DevelopmentServerDoc;
