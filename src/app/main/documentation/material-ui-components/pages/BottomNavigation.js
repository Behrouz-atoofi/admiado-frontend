import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BottomNavigationDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/bottom-navigation"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
       ناوبری پایین
      </Typography>
      <Typography className="description">
      نوار ناوبری پایین امکان حرکت بین مقصدهای اصلی در یک برنامه را فراهم می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      نوارهای پیمایش پایین سه تا پنج مقصد را در پایین صفحه نمایش می دهند. هر مقصد با یک آیکون و یک لیبل متن اختیاری نشان داده می شود. هنگامی که به  یک آیکون ناوبری پایین ضربه زده میشود، کاربر به مقصد ناوبری سطح بالا مرتبط با آن آیکون هدایت می شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      ناوبری پایین
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی فقط <strong>سه</strong> عمل وجود دارد، آیکون ها و لیبل های نوشتاری را همیشه نمایش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleBottomNavigation.js"
          className="my-24"
          iframe={false}
          component={require('../components/bottom-navigation/SimpleBottomNavigation.js').default}
          raw={require('!raw-loader!../components/bottom-navigation/SimpleBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      ناوبری پایین بدون لیبل
      </Typography>
      <Typography className="mb-40" component="div">
      اگر <strong>چهار</strong> یا <strong>پنج</strong> عملکرد وجود دارد، نماهای غیرفعال را فقط به عنوان آیکون نمایش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LabelBottomNavigation.js"
          className="my-24"
          iframe={false}
          component={require('../components/bottom-navigation/LabelBottomNavigation.js').default}
          raw={require('!raw-loader!../components/bottom-navigation/LabelBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       پوزیشن fixed
      </Typography>
      <Typography className="mb-40" component="div">
      این نسخه نمایشی، بدون توجه به میزان محتوای روی صفحه، ناوبری پایین را در پایین ثابت نگه می دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedBottomNavigation.js"
          className="my-24"
          iframe
          component={require('../components/bottom-navigation/FixedBottomNavigation.js').default}
          raw={require('!raw-loader!../components/bottom-navigation/FixedBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Third-party routing کتابخانه
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت پیمایش انجام شود، بدون اینکه HTTP رفت و برگشت به سرور داشته باشد. کامپوننت <code>BottomNavigationAction</code> پراپ{' '} <code>component</code> را برای رسیدگی به این مورد استفاده فراهم می کند.در اینجا یک {' '}<a href="/material-ui/guides/routing/">راهنمای دقیق تر</a> است.
      </Typography>
    </>
  );
}

export default BottomNavigationDoc;
