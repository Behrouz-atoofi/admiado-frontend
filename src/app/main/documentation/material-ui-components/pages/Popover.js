import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PopoverDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/popover"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
         پاپ اور(Popover)
      </Typography>
      <Typography className="description">
      از Popover می توان برای نمایش برخی از محتواها روی دیگری استفاده کرد.
      </Typography>

      <Typography className="mb-40" component="div">
      نکاتی که هنگام استفاده از کامپوننت <code>Popover</code> باید بدانید:
      </Typography>
      <ul>
        <li>
        کامپوننت در بالای کامپوننت{' '} <a href="/material-ui/react-modal/"> <code>Modal</code> </a>{' '} ساخته شده است.
        </li>
        <li>
        بر خلاف کامپوننت{' '} <a href="/material-ui/react-popper/"> <code>Popper</code> </a>، پیمایش و کلیک دور مسدود شده است.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      Popover اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicPopover.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/BasicPopover.js').default}
          raw={require('!raw-loader!../components/popover/BasicPopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        پلی گراند لنگر
      </Typography>
      <Typography className="mb-40" component="div">
      از دکمه های رادیویی برای تنظیم موقعیت های <code>anchorOrigin</code> و <code>transformOrigin</code> استفاده کنید. همچنین می توانید anchorReference را روی anchorPosition یا anchorEl تنظیم کنید. وقتی anchorPosition باشد، کامپوننت به جای anchorEl به پراپ anchorPosition اشاره می کند که می توانید آن را برای تنظیم موقعیت popover تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AnchorPlayground.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/AnchorPlayground.js').default}
          raw={require('!raw-loader!../components/popover/AnchorPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رویداد  Mouse over
      </Typography>
      <Typography className="mb-40" component="div">
      این نسخه نمایشی نحوه استفاده از کامپوننت <code>Popover</code> و رویداد mouseover را برای دستیابی به رفتار popover نشان می‌دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MouseOverPopover.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/MouseOverPopover.js').default}
          raw={require('!raw-loader!../components/popover/MouseOverPopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کمک کننده PopupState
      </Typography>
      <Typography className="mb-40" component="div">
      یک بسته شخص ثالث وجود دارد{' '} <a href="https://github.com/jcoreio/material-ui-popup-state"> <code>material-ui-popup-state</code> </ a>{' '} که در اکثر موارد از وضعیت popover برای شما مراقبت می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PopoverPopupState.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/PopoverPopupState.js').default}
          raw={require('!raw-loader!../components/popover/PopoverPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default PopoverDoc;
