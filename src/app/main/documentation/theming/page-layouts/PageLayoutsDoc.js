import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function PageLayoutsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      طرح بندی صفحات
      </Typography>

      <Typography className="mb-16" component="p">
      یکی از نقاط قوت Fuse React کامپوننت های طرح بندی صفحات آن است.
      </Typography>
      <Typography className="mb-16" component="p">
      هر اپلیکیشن، صفحات از پیش ساخته شده از کامپوننت طرح بندی صفحه Fuse React استفاده می کند.
      </Typography>
      <Typography className="mb-16" component="p">
      به سادگی، کامپوننت طرح‌بندی صفحه، طرح‌بندی‌های از پیش ساخته شده‌ای هستند که می‌توانید به سادگی آن‌ها را کپی/پیست کنید و شروع به ساخت صفحه یا اپلیکیشن خود بر اساس آن کنید.
      </Typography>
      <Typography className="mb-16" component="p">
        زیرا تکرار هر استایل صفحه ای که می توانید در Fuse React پیدا کنید بسیار آسان است.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
       کامپوننت طرح  بندی صفحات
      </Typography>

      <Typography className="my-16" component="div">
        <ul>
          <li className="mb-8">
            <Link to="/documentation/fuse-components/fuse-page-simple">FusePageSimple</Link>
          </li>
          <li className="mb-8">
            <Link to="/documentation/fuse-components/fuse-page-carded">FusePageCarded</Link>
          </li>
        </ul>
      </Typography>
    </>
  );
}

export default PageLayoutsDoc;
