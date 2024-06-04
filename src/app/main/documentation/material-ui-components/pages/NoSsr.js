import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function NoSsrDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/no-ssr"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      بدون SSR
      </Typography>
      <Typography className="description">
      کامپوننت No-SSR رندر کامپوننت های فرزند را از سرور به کلاینت موکول می کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      این سند منتقل شده است
      </Typography>
      <Typography className="mb-40" component="div">
      :::هشدار لطفاً برای دمو و جزئیات استفاده به صفحه کامپوننت <a href="/base/react-no-ssr/">No-SSR</a> در اسناد MUI Base مراجعه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        No-SSR بخشی از کتابخانه کامپوننت <a href="/base/getting-started/overview/">MUI Base</a>{' '} مستقل است.. در حال حاضر برای راحتی شما از <code>@mui/material</code> دوباره صادر می شود، اما در نسخه اصلی بعدی، پس از{' '} <code>@mui/base' از این بسته حذف خواهد شد </code> یک نسخه پایدار دریافت می کند. :::
      </Typography>
    </>
  );
}

export default NoSsrDoc;
