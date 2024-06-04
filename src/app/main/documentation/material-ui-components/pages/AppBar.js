import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AppBarDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/app-bar"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
نوار برنامه
      </Typography>
      <Typography className="description">
      نوار برنامه اطلاعات و اقدامات مربوط به صفحه فعلی را نشان می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      نوار برنامه بالایی محتوا و اقدامات مربوط به صفحه فعلی را ارائه می دهد و برای برندسازی، عناوین صفحه نمایش، پیمایش و اقدامات استفاده می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
همچنین می تواند به یک نوار اقدام متنی تبدیل شود یا به عنوان نوار ناوبری استفاده شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه اصلی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/ButtonAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ButtonAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه با منو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MenuAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/MenuAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/MenuAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه با منوی ریسپانسیو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/ResponsiveAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ResponsiveAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه با فیلد جستجو
      </Typography>
      <Typography className="mb-40" component="div">
      یک نوار جستجوی جانبی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SearchAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/SearchAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/SearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه ریسپانسیو با کشو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DrawerAppBar.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/DrawerAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/DrawerAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه با فیلد جستجوی اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      یک نوار جستجوی اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PrimarySearchAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/PrimarySearchAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/PrimarySearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dense (فقط دسکتاپ)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/DenseAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/DenseAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      برجسته
      </Typography>
      <Typography className="mb-40" component="div">
      نوار برنامه برجسته
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ProminentAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/ProminentAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ProminentAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نوار برنامه پایین
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BottomAppBar.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/BottomAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/BottomAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جایگذاری  ثابت  (fixed)
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی موقعیت نوار برنامه را ثابت می کنید، ابعاد المنت بر بقیه صفحه تأثیر نمی گذارد.این می تواند باعث شود بخشی از محتوای شما در پشت نوار برنامه نامرئی شود. در اینجا 3 راه حل ممکن وجود دارد:
      </Typography>
      <ol>
        <li>
        می‌توانید از <code>{`position="sticky"`}</code> به جای fixed استفاده کنید. ⚠️ sticky توسط IE11 پشتیبانی نمی شود.
        </li>
        <li>
        می‌توانید کامپوننت دوم <code>{`<Toolbar />`}</code> را ارائه دهید:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <ol start="3">
        <li>
        می توانید از سی اس اس <code>theme.mixins.toolbar</code> استفاده کنید:
     
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اسکرول کردن
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از قلاب <code>useScrollTrigger()</code> برای پاسخ دادن به اقدامات اسکرول کاربر استفاده کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پنهان کردن نوار برنامه
      </Typography>
      <Typography className="mb-40" component="div">
      نوار برنامه در اسکرول به پایین پنهان می شود تا فضای بیشتری برای مطالعه باقی بماند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HideAppBar.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/HideAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/HideAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      نوار برنامه را بالا ببرید
      </Typography>
      <Typography className="mb-40" component="div">
      نوار برنامه در اسکرول بالا می رود تا نشان دهد کاربر در بالای صفحه نیست.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ElevateAppBar.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/ElevateAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ElevateAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      بازگشت به بالا
      </Typography>
      <Typography className="mb-40" component="div">
      یک دکمه اکشن شناور هنگام اسکرول ظاهر می شود تا بازگشت به بالای صفحه آسان شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BackToTop.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/BackToTop.js').default}
          raw={require('!raw-loader!../components/app-bar/BackToTop.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        <code>{`useScrollTrigger([options]) => trigger`}</code>
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        آرگومان ها
      </Typography>
      <ol>
        <li>
          <Typography className="mb-40" component="div">
            <code>گزینه ها</code> (<em>آبجکت</em> [اختیاری]):
          </Typography>
          <ul>
            <li>
              <code>options.disableHysteresis</code> (<em>bool</em> [اختیاری]): پیش فرض{' '}
              <code>false</code> میباشد.hysteresis را غیر فعال کنید. هنگام تعیین مقدار <code>trigger</code>، جهت اسکرول را نادیده بگیرید.
            </li>
            <li>
              <code>options.target</code> (<em>Node</em> [اختیاری]): پیش فرض{' '}
              <code>window</code> میباشد
            </li>
            <li>
              <code>options.threshold</code> (<em>number</em> [اختیاری]): پیش فرض{' '}
              <code>100</code>میباشد. زمانی که اسکرول عمودی به شدت از این آستانه عبور کرد، مقدار <code>trigger</code> را تغییر دهید (انحصاری).
            </li>
          </ul>
        </li>
      </ol>
      <Typography className="text-16 mt-16 mb-10" component="h4">
      برمی گرداند
      </Typography>
      <Typography className="mb-40" component="div">
        <code>trigger</code>:آیا موقعیت اسکرول با معیارها مطابقت دارد?
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        مثال ها
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رنگ را در حالت Dark فعال کنید
      </Typography>
      <Typography className="mb-40" component="div">
      براساس{' '}
        <a href="https://m2.material.io/design/color/dark-theme.html">دستورالعمل های طراحی MAterial </a>
        پراپ <code>color</code> هیچ تاثیری بر ظاهر نوار برنامه در حالت Dark ندارد.
        می‌توانید با تنظیم کردن پراپ <code>enableColorOnDark</code> روی{' '} <code>true</code>، این رفتار را لغو کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EnableColorOnDarkAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/EnableColorOnDarkAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/EnableColorOnDarkAppBar.js')}
        />
      </Typography>
    </>
  );
}

export default AppBarDoc;
