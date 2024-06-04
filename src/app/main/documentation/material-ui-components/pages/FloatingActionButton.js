import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function FloatingActionButtonDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/floating-action-button"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      دکمه اکشن شناور
      </Typography>
      <Typography className="description">
      یک دکمه حرکت شناور (FAB) اولین یا رایج ترین عملکرد را روی صفحه انجام می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      یک دکمه اکشن شناور در جلوی تمام محتوای صفحه ظاهر می شود، معمولاً به صورت یک شکل دایره ای با نمادی در مرکز آن. FAB ها در دو نوع هستند: معمولی و گسترده.
      </Typography>
      <Typography className="mb-40" component="div">
      فقط در صورتی از FAB استفاده کنید که مناسب ترین راه برای ارائه عملکرد اصلی صفحه باشد. فقط یک کامپوننت در هر صفحه برای نشان دادن رایج ترین عملکرد توصیه می شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      FAB پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FloatingActionButtons.js"
          className="my-24"
          iframe={false}
          component={
            require('../components/floating-action-button/FloatingActionButtons.js').default
          }
          raw={require('!raw-loader!../components/floating-action-button/FloatingActionButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، اندازه <code>large</code> است. برای دکمه های عمل شناور کوچکتر از prop <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FloatingActionButtonSize.js"
          className="my-24"
          iframe={false}
          component={
            require('../components/floating-action-button/FloatingActionButtonSize.js').default
          }
          raw={require('!raw-loader!../components/floating-action-button/FloatingActionButtonSize.js')}
        />
        <FuseExample
          name="FloatingActionButtonExtendedSize.js"
          className="my-24"
          iframe={false}
          component={
            require('../components/floating-action-button/FloatingActionButtonExtendedSize.js')
              .default
          }
          raw={require('!raw-loader!../components/floating-action-button/FloatingActionButtonExtendedSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        انیمیشن
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه اکشن شناور به صورت پیش فرض روی صفحه به عنوان یک قطعه متریال در حال گسترش متحرک می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      یک دکمه اکشن شناور که چندین صفحه جانبی را در بر می گیرد (مانند صفحه های زبانه دار) باید برای مدت کوتاهی ناپدید شود، سپس در صورت تغییر عملکرد دوباره ظاهر شود.
      </Typography>
      <Typography className="mb-40" component="div">
      برای رسیدن به این هدف می توان از ترنزیشن زوم استفاده کرد. توجه داشته باشید که از آنجایی که انیمیشن‌های خروجی و ورودی همزمان فعال می‌شوند، از <code>enterDelay</code> استفاده می‌کنیم تا به انیمیشن خروجی Floating Action Button اجازه دهیم قبل از ورود انیمیشن جدید به پایان برسد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FloatingActionButtonZoom.js"
          className="my-24"
          iframe={false}
          component={
            require('../components/floating-action-button/FloatingActionButtonZoom.js').default
          }
          raw={require('!raw-loader!../components/floating-action-button/FloatingActionButtonZoom.js')}
        />
      </Typography>
    </>
  );
}

export default FloatingActionButtonDoc;
