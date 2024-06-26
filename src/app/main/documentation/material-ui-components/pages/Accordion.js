import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AccordionDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/accordion"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      آکاردئون
      </Typography>
      <Typography className="description">
      مولفه آکاردئون به کاربر این امکان را می دهد که بخش هایی از محتوای مرتبط را در یک صفحه نشان دهد و پنهان کند.
      </Typography>

      <Typography className="mb-40" component="div">
      آکاردئون یک نگهدارنده سبک وزن است که می تواند به صورت مستقل استفاده شود یا به یک سطح بزرگتر مانند کارت متصل شود.
      </Typography>
  
      <Typography className="mb-40" component="div">
        :::اطلاعات این کامپوننت دیگر در دستورالعمل‌های طراحی متریال مستند نیست، اما{' '}
        <a href="https://m2.material.io/">رابط کاربری Material UI</a>, همچنان از آن پشتیبانی می‌کند:::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آکاردئون پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicAccordion.js"
          className="my-24"
          iframe={false}
          component={require('../components/accordion/BasicAccordion.js').default}
          raw={require('!raw-loader!../components/accordion/BasicAccordion.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آکاردئون کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      رفتار پیش‌فرض را برای ایجاد آکاردئون با مولفه <code>Accordion</code> گسترش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledAccordions.js"
          className="my-24"
          iframe={false}
          component={require('../components/accordion/ControlledAccordions.js').default}
          raw={require('!raw-loader!../components/accordion/ControlledAccordions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در <a href="/material-ui/customization/how-to-customize/">صفحه اسناد   </a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedAccordions.js"
          className="my-24"
          iframe={false}
          component={require('../components/accordion/CustomizedAccordions.js').default}
          raw={require('!raw-loader!../components/accordion/CustomizedAccordions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کارایی
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای آکاردئون ها به طور پیش فرض نصب می شود حتی اگر آکاردئون گسترش نیابد. این رفتار پیش‌فرض رندر سمت سرور و سئو را در ذهن دارد. اگر درخت‌های جزء گران‌قیمت را در جزئیات آکاردئون خود رندر می‌کنید یا به سادگی آکاردئون‌های زیادی را رندر می‌کنید، ممکن است ایده خوبی باشد که این رفتار پیش‌فرض را با فعال کردن <code>unmountOnExit</code> در <code>TransitionProps</code> تغییر دهید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Accordion TransitionProps={{ unmountOnExit: true }} />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      مانند هر بهینه سازی عملکرد، این یک گلوله نقره ای نیست. حتما ابتدا تنگناها را شناسایی کنید و سپس این استراتژی های بهینه سازی را امتحان کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">
          https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      برای دسترسی بهینه، توصیه می‌کنیم <code>id</code> و{' '}<code>aria-controls</code> را در
<code>خلاصه آکاردئونی</code>. <code>آکاردئون</code>{' '}<code>aria-labelledby</code> و <code>id</code> لازم را برای ناحیه محتوای آکاردئون بدست می‌آورد.
      </Typography>
    </>
  );
}

export default AccordionDoc;
