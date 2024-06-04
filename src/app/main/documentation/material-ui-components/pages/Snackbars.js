import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SnackbarsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/snackbars"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        اسنک بار (Snackbar)
      </Typography>
      <Typography className="description">
      اسنک بارها اعلان های مختصری ارائه می دهند. این کامپوننت به عنوان toast نیز شناخته می شود.
      </Typography>

      <Typography className="mb-40" component="div">
      اسنک بارها به کاربران از فرآیندی اطلاع می دهند که یک برنامه انجام داده یا انجام خواهد داد.آنها به طور موقت، به سمت پایین صفحه ظاهر می شوند.آنها نباید تجربه کاربر را قطع کنند و برای ناپدید شدن نیازی به ورودی کاربر ندارند.
      </Typography>
      <Typography className="mb-40" component="div">
      اسنکبارها حاوی یک خط متن هستند که مستقیماً با عملیات انجام شده مرتبط است. آنها ممکن است حاوی یک عمل متنی باشند، اما هیچ آیکونی ندارند. می توانید از آنها برای نمایش اعلان ها استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>تكرار</strong>: فقط یک snackbar ممکن است در یک زمان نمایش داده شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اسنک بارهای ساده
      </Typography>
      <Typography className="mb-40" component="div">
      یک اسنکبار اولیه که هدف آن بازتولید رفتار اسنکبار Google Keep است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/SimpleSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/SimpleSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
    سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در <a href="/material-ui/customization/how-to-customize/">صفحه اسناد نادیده overrides </a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSnackbars.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/CustomizedSnackbars.js').default}
          raw={require('!raw-loader!../components/snackbars/CustomizedSnackbars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      موقعیت اسنک بار ها
      </Typography>
      <Typography className="mb-40" component="div">
      در طرح‌بندی‌های گسترده، اسنک بارها می‌توانند در تراز چپ یا وسط قرار گیرند، اگر به طور مداوم در یک نقطه در پایین صفحه قرار گیرند، اما ممکن است شرایطی وجود داشته باشد که قرارگیری اسنک بار باید انعطاف‌پذیرتر باشد.. شما می توانید موقعیت  اسنک بار را با تعیین پراپ <code>anchorOrigin</code> کنترل کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/PositionedSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/PositionedSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      طول پیام
      </Typography>
      <Typography className="mb-40" component="div">
      برخی از اسنک بارها با طول پیام متفاوت میباشند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LongTextSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/LongTextSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/LongTextSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ترنزیشن ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      اسنک بارهای متوالی
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که به‌روزرسانی‌های چندگانه اسنک بار ضروری است، باید یکی یکی ظاهر شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ConsecutiveSnackbars.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/ConsecutiveSnackbars.js').default}
          raw={require('!raw-loader!../components/snackbars/ConsecutiveSnackbars.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      اسنک بارها و دکمه های اکشن شناور (FAB)
      </Typography>
      <Typography className="mb-40" component="div">
       اسنک بارها باید بالای FAB ها (در موبایل) ظاهر شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FabIntegrationSnackbar.js"
          className="my-24"
          iframe
          component={require('../components/snackbars/FabIntegrationSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/FabIntegrationSnackbar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      تغییر ترنزیشن
      </Typography>
      <Typography className="mb-40" component="div">
      <a href="/material-ui/transitions/#grow">Grow</a> ترنزیشن پیش‌فرض است، اما می‌توانید از ترنزیشن های دیگر نیز استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/TransitionsSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/TransitionsSnackbar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      جهت اسلاید را کنترل کنید
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید جهت ترنزیشن <a href="/material-ui/transitions/#slide">اسلاید</a>{' '}را تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
      مثالی از انجام ترنزیشن اسلاید به چپ:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import Slide from '@mui/material/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function MyComponent() {
  return <Snackbar TransitionComponent={TransitionLeft} />;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
       مثال های دیگر:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DirectionSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/DirectionSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/DirectionSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        notistack
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        <img src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars" alt="stars"/> <img src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads" />
      </Typography>
      <Typography className="mb-40" component="div">stack
      این مثال نحوه استفاده از{' '} <a href="https://github.com/iamhosseindhv/notistack">notistack</a> را نشان می‌دهد. notistack دارای یک <strong>API ضروری</strong> است که نمایش اسنک بارها را آسان می کند، بدون اینکه نیازی به کنترل استیت باز/بستن آنها باشد..همچنین به شما امکان می‌دهد آنها را روی هم <strong>stack</strong> کنید (اگرچه دستورالعمل‌های material design  از این کار جلوگیری می‌کنند).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IntegrationNotistack.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/IntegrationNotistack.js').default}
          raw={require('!raw-loader!../components/snackbars/IntegrationNotistack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-1.1/#alert">
          https://www.w3.org/TR/wai-aria-1.1/#alert
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض،  اسنک بار  به صورت خودکار پنهان نمی شود.با این حال، اگر تصمیم به استفاده از پراپ {' '}<code>autoHideDuration</code> دارید، توصیه می‌شود به کاربر <a href="https://www.w3.org/TR/UNDERSTANDING بدهید -WCAG20/time-limits.html">زمان کافی</a> برای پاسخگویی بدهید.
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی اسنک بار باز است، اگر <kbd className="key">Escape</kbd> فشار داده شود، <strong>هر</strong> <code>Snackbar</code> حذف می‌شود.مگر اینکه <code>onClose</code> را با دلیل <code>{`"escapeKeyDown"`}</code> مدیریت نکنید. اگر می‌خواهید این رفتار را به رد کردن قدیمی‌ترین Snackbar در حال حاضر محدود کنید، <code>event.preventDefault</code> در <code>onClose</code> را فراخوانی کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
export default function MyComponent() {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        onClose={(event, reason) => {
          // \`reason === 'escapeKeyDown'\` اگر \`Escape\` فشار داده شد
          setOpen(false);
          // فراخوانی کنید \`event.preventDefault\` برای بستن فقط یک اسنک بار در یک زمان..
        
      />
      <Snackbar open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
    </>
  );
}

export default SnackbarsDoc;
