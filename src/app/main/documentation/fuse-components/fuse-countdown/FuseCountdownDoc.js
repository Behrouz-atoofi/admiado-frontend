import FuseCountdown from '@fuse/core/FuseCountdown';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function FuseCountdownDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseCountdown
      </Typography>

      <Typography className="mb-16" component="p">
      <code>FuseCountdown</code> یک کامپوننت فیوز سفارشی ساخته شده است که به شما امکان می دهد شمارش معکوس ایجاد کنید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        استفاده
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
          <FuseCountdown endDate="2024-10-29" className="my-48"/>
        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پیش نمایش
      </Typography>

      <FuseCountdown endDate="2024-10-29" className="my-48" />

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      دموها
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/pages/coming-soon/classic">به زودی</Link>
        </li>
      </ul>
    </>
  );
}

export default FuseCountdownDoc;
