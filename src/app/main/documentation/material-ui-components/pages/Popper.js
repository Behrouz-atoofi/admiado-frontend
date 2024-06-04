import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PopperDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/popper"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        پاپر(Popper)
      </Typography>
      <Typography className="description">
      از یک Popper می توان برای نمایش برخی از محتواها روی دیگری استفاده کرد. این جایگزینی برای react-popper است.
      </Typography>

      <Typography className="mb-40" component="div">
      برخی از ویژگی های مهم کامپوننت <code>Popper</code>:
      </Typography>
      <ul>
        <li>
          🕷 Popper برای موقعیت یابی کامل به کتابخانه شخص ثالث (<a href="https://popper.js.org/">Popper.js</a>) متکی است.
        </li>
        <li>💄این یک API جایگزین برای react-popper است. هدف آن سادگی است.</li>
        <li>
          📦 <a href="/size-snapshot/">24.9 kB gzipped</a>.
        </li>
        <li>
        فرزندان{' '} <a href="/material-ui/react-portal/"> <code>Portal</code> </a>{' '}به بدنه سند هستند تا از بروز مشکلات جلوگیری کنند. می توانید این رفتار را با <code>disablePortal</code> غیرفعال کنید.
        </li>
        <li>
        اسکرول مانند مؤلفه{' '} <a href="/material-ui/react-popover/"> <code>Popover</code> </a>{' '} مسدود نشده است.محل قرار گیری  دادن popper   با منطقه موجود در viewport به روز رسانی می‌شود.
        </li>
        <li>
        کلیک کردن بر روی کامپوننت <code>Popper</code> پنهان نمی شود. اگر به این رفتار نیاز دارید، می‌توانید از{' '} <a href="/material-ui/react-click-away-listener/"> <code>ClickAwayListener</code></a>{' '}- استفاده کنید مثال را در {' '}<a href="/material-ui/react-menu/#menulist-composition">بخش اسناد منو</a> ببینید.
        </li>
        <li>
        <code>anchorEl</code> به عنوان آبجکت مرجع برای ایجاد یک نمونه{' '} <code>Popper.js</code> جدید ارسال می شود.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       پاپر اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimplePopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/SimplePopper.js').default}
          raw={require('!raw-loader!../components/popper/SimplePopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ترنزیشن ها
      </Typography>
      <Typography className="mb-40" component="div">
      استیت   باز/بستن پاپر را می توان با یک رندر prop child و یک کامپوننت ترنزیشن متحرک کرد. این کامپوننت باید شرایط زیر را رعایت کند:
      </Typography>
      <ul>
        <li>فرزند مستقیم پاپر باشید.</li>
        <li>
        هنگامی که ترنزیشن enter شروع می شود، کالبک   <code>onEnter</code> را فراخوانی کنید.
        </li>
        <li>
        هنگامی که ترنزیشن خروج کامل شد،   callback <code>onExited</code> را فراخوانی کنید. این دو callback به popper اجازه می‌دهد تا محتوای فرزند را در صورت بسته شدن و انتقال کامل از حالت نصب خارج کند.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      پاپر از{' '} <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a> پشتیبانی داخلی دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/TransitionsPopper.js').default}
          raw={require('!raw-loader!../components/popper/TransitionsPopper.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید از <a href="https://github.com/pmndrs/react-spring">react-spring</a> استفاده کنید
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpringPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/SpringPopper.js').default}
          raw={require('!raw-loader!../components/popper/SpringPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پاپر دارای پوزیشن
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/PositionedPopper.js').default}
          raw={require('!raw-loader!../components/popper/PositionedPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        پلی گراند اسکرول
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollPlayground.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/ScrollPlayground.js').default}
          raw={require('!raw-loader!../components/popper/ScrollPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       المنت مجازی
      </Typography>
      <Typography className="mb-40" component="div">
      مقدار پراپ <code>anchorEl</code> می تواند مرجعی به المنت DOM جعلی باشد. شما باید یک آبجکت به شکل{' '}<a href="https://popper.js.org/docs/v2/virtual-elements/"> <code>VirtualElement</code></a> ایجاد کنید
        .
      </Typography>
      <Typography className="mb-40" component="div">
      قسمتی از متن را برجسته کنید تا پاپر را ببینید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VirtualElementPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/VirtualElementPopper.js').default}
          raw={require('!raw-loader!../components/popper/VirtualElementPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
     کمک کننده   PopupState 
      </Typography>
      <Typography className="mb-40" component="div">
      یک بسته شخص ثالث وجود دارد{' '}<a href="https://github.com/jcoreio/material-ui-popup-state"><code>material-ui-popup-state</code> </ a>{' '} که در اکثر موارد از وضعیت popper برای شما مراقبت می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PopperPopupState.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/PopperPopupState.js').default}
          raw={require('!raw-loader!../components/popper/PopperPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default PopperDoc;
