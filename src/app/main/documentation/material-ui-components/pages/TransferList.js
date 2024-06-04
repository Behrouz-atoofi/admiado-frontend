import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TransferListDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/transfer-list"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      لیست انتقال(Transfer List)
      </Typography>
      <Typography className="description">
      یک لیست انتقال (یا "شاتل") به کاربر امکان می دهد یک یا چند مورد لیست را بین لیست ها جابجا کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست انتقال پایه 
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال شامل دکمه‌هایی برای "انتقال همه" است، اما هر لیست انتقالی به آنها نیاز ندارد
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransferList.js"
          className="my-24"
          iframe={false}
          component={require('../components/transfer-list/TransferList.js').default}
          raw={require('!raw-loader!../components/transfer-list/TransferList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست انتقال پیشرفته
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال دکمه های "حرکت همه" را با کادر چک "انتخاب همه / انتخاب هیچ" مبادله می کند و یک شمارنده اضافه می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectAllTransferList.js"
          className="my-24"
          iframe={false}
          component={require('../components/transfer-list/SelectAllTransferList.js').default}
          raw={require('!raw-loader!../components/transfer-list/SelectAllTransferList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت با چند محدودیت همراه است:
      </Typography>
      <ul>
        <li>
        فقط روی دسکتاپ کار می کند.اگر تعداد محدودی گزینه برای انتخاب دارید، کامپوننت <a href="/material-ui/react-autocomplete/#multiple-values">تکمیل خودکار</a> را ترجیح دهید. اگر پشتیبانی تلفن همراه برای شما مهم است، نگاهی به {' '}<a href="https://github.com/mui/material-ui/issues/27579">#27579</a> بیندازید.
        </li>
        <li>
        هیچ کامپوننت سطح بالایی از npm اکسپورت نشده است. دموها بر اساس ترکیب بندی هستند..
        اگر این مورد  برای شما مهم است، به{' '}
          <a href="https://github.com/mui/material-ui/issues/27579">#27579</a>
          نگاهی بیاندازید..
        </li>
      </ul>
    </>
  );
}

export default TransferListDoc;
