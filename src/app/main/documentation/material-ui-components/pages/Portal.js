import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PortalDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/portal"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      پورتال
      </Typography>
      <Typography className="description">
      کامپوننت Portal به شما امکان می دهد فرزندان خود را به یک گره DOM تبدیل کنید که خارج از سلسله مراتب DOM خود پورتال وجود دارد.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      این سند منتقل شده است
      </Typography>
      <Typography className="mb-40" component="div">
      :::هشدار لطفاً برای دمو و جزئیات استفاده به صفحه کامپوننت <a href="/base/react-portal/">Portal</a> در اسناد MUI Base مراجعه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      پورتال بخشی از کتابخانه کامپوننت <a href="/base/getting-started/overview/">پراپ MUI</a>{' '} مستقل است.در حال حاضر مجدداً از <code>@mui/material</code> برای شما صادر می شود
راحت است، اما پس از اینکه {' '} <code>@mui/base</code> یک نسخه پایدار دریافت کرد، در نسخه اصلی بعدی از این بسته حذف خواهد شد. :::
      </Typography>
    </>
  );
}

export default PortalDoc;
