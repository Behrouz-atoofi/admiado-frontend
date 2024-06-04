import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SpeedDialDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/speed-dial"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
     شماره گیری سریع ( Speed Dial)
      </Typography>
      <Typography className="description">
      هنگامی که فشار داده می شود، یک دکمه اکشن شناور می تواند سه تا شش عملکرد مرتبط را در قالب یک شماره گیری سریع نمایش دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      اگر بیش از شش اقدام مورد نیاز است، باید از چیزی غیر از FAB برای ارائه آنها استفاده شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      شماره گیری سریع اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه اکشن شناور می تواند اقدامات مرتبط را نمایش دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/BasicSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/BasicSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        پلی گراند(Playground)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PlaygroundSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/PlaygroundSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/PlaygroundSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      شماره گیری سریع کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      استیت باز بودن کامپوننت را می توان با پراپس های <code>open</code>/<code>onOpen</code>/<code>onClose</code> کنترل کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledOpenSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/ControlledOpenSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/ControlledOpenSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آیکون بستن سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید با استفاده از <code>icon</code>{' '} و <code>openIcon</code> از کامپوننت <code>SpeedDialIcon</code> یک آیکون جایگزین برای استیت های بسته و باز ارائه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OpenIconSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/OpenIconSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/OpenIconSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
تولتیپ های اقدام مداوم
      </Typography>
      <Typography className="mb-40" component="div">
      راهنمای ابزار SpeedDialAction می‌تواند به‌طور مداوم نمایش داده شود تا کاربران مجبور نباشند برای دیدن تولتیپ در دستگاه‌های لمسی، آن را به مدت طولانی فشار دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا در همه دستگاه‌ها برای اهداف نمایشی فعال است، اما در مرحله تولید می‌تواند از منطق{' '} <code>isTouch</code> برای تنظیم مشروط پراپ استفاده کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpeedDialTooltipOpen.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/SpeedDialTooltipOpen.js').default}
          raw={require('!raw-loader!../components/speed-dial/SpeedDialTooltipOpen.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        ضروری
      </Typography>
      <ul>
        <li>
        شما باید یک <code>ariaLabel</code> برای کامپوننت شماره گیری سریع ارائه دهید.
        </li>
        <li>
        شما باید یک <code>tooltipTitle</code> برای هر اقدام شماره گیری سریع ارائه دهید.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      ارائه شده 
      </Typography>
      <ul>
        <li>
        Fab دارای ویژگی‌های <code>aria-haspopup</code>، <code>aria-expanded</code> و{' '}<code>aria-controls</code> است.
        </li>
        <li>
        محفظه اقدامات شماره گیری سریع <code>{`role="menu"`}</code> و{' '} <code>aria-orientation</code> مطابق جهت تنظیم شده است.
        </li>
        <li>
        اقدامات شماره گیری سریع دارای <code>{`role="menuitem"`}</code> و یک ویژگی <code>aria-describedby</code> هستند که به تولتیپ  مرتبط اشاره می کند.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        صفحه کلید
      </Typography>
      <ul>
      <li>شماره گیری سریع با فوکوس باز می شود.</li>
        <li>
        کلیدهای Space و Enter عمل شماره گیری سریع انتخاب شده را فعال می کنند و استیت باز بودن شماره گیری سریع را تغییر می دهند.
        </li>
        <li>
        کلیدهای مکان نما فوکوس را به شماره گیری سریع بعدی یا قبلی منتقل می کنند. (توجه داشته باشید که در ابتدا می توان از هر جهت مکان نما برای باز کردن شماره گیری سریع استفاده کرد. این رفتار مورد انتظار را برای جهت گیری واقعی یا درک شده شماره گیری سریع فعال می کند، به عنوان مثال برای کاربر صفحه خوانی که شماره گیری سریع را به عنوان یک منوی کشویی درک می کند. .)
        </li>
        <li>
        کلید Escape شماره گیری سریع را می بندد و اگر یک عمل شماره گیری سریع فوکوس شده بود، فوکوس را به Fab برمی گرداند.
        </li>
      </ul>
    </>
  );
}

export default SpeedDialDoc;
