import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PaperDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/paper"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Paper
      </Typography>
      <Typography className="description">
      در طراحی material خواص فیزیکی Paper به صفحه نمایش ترجمه می شود.{' '}
      </Typography>

      <Typography className="mb-40" component="div">
      پس زمینه یک برنامه کاربردی شبیه بافت مسطح و مات یک ورق Paper است و رفتار یک برنامه کاربردی از توانایی Paper برای تغییر اندازه، به هم ریختن و چسباندن به یکدیگر در چندین ورق تقلید می کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      Paper اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimplePaper.js"
          className="my-24"
          iframe={false}
          component={require('../components/paper/SimplePaper.js').default}
          raw={require('!raw-loader!../components/paper/SimplePaper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      انواع
      </Typography>
      <Typography className="mb-40" component="div">
      اگر به یک سطح مشخص نیاز دارید، از پراپ <code>Variant</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Variants.js"
          className="my-24"
          iframe={false}
          component={require('../components/paper/Variants.js').default}
          raw={require('!raw-loader!../components/paper/Variants.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      ارتفاع
      </Typography>
      <Typography className="mb-40" component="div">
      از ارتفاع می توان برای ایجاد سلسله مراتبی بین مطالب دیگر استفاده کرد. از نظر عملی، ارتفاع، اندازه سایه اعمال شده روی سطح را کنترل می کند. در حالت تاریک، بالا بردن ارتفاع نیز سطح را روشن تر می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Elevation.js"
          className="my-24"
          iframe={false}
          component={require('../components/paper/Elevation.js').default}
          raw={require('!raw-loader!../components/paper/Elevation.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      تغییر سایه در حالت تاریک با اعمال یک گرادیان نیمه شفاف به ویژگی{' '} <code>background-image</code> انجام می شود.. این می‌تواند منجر به سردرگمی در هنگام نادیده گرفتن سبک‌های <code>Paper</code> شود، زیرا فقط تنظیم ویژگی <code>background-color</code> روی سایه‌زنی مربوط به ارتفاع تأثیری نخواهد داشت. . برای نادیده گرفتن سایه‌زنی و تنظیم رنگ پس‌زمینه که تحت تأثیر ارتفاع قرار نمی‌گیرد در حالت تاریک، ویژگی پس‌زمینه (یا هر دو رنگ پس‌زمینه و تصویر پس‌زمینه) را لغو کنید.
      </Typography>
    </>
  );
}

export default PaperDoc;
