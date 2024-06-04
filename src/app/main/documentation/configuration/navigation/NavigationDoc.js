import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function NavigationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        ناوبری
      </Typography>

      <Typography className="mb-24" variant="h5">
      پیکربندی پیش فرض
      </Typography>

      <Typography className="mb-16" component="p">
      آرایه ناوبری تم در <code>app/configs/navigationConfig.js</code> قرار دارد
      </Typography>

      <Typography className="mb-16" component="p">
      این پیکربندی استیت اولیه حالت Fuse.navigation redux است.
      </Typography>

      <Typography className="mb-16" component="p">
      آیتم های ناوبری را می توان به روز رسانی کرد، حذف کرد، با اقدامات redux از هر نقطه از برنامه اضافه کرد.
      </Typography>

      <Typography className="mb-16" component="p">
      جزئیات کامپوننت FuseNavigation را برای اقدامات redux، انواع موارد و غیره در این آدرس بررسی کنید:{' '} <Link to="/documentation/fuse-components/fuse-navigation">FuseNavigation Docs</Link>
      </Typography>
    </>
  );
}

export default NavigationDoc;
