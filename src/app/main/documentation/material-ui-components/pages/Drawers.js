import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DrawersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/drawers"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        کشو(Drawer)
      </Typography>
      <Typography className="description">
      کشوهای ناوبری دسترسی به مقصد را در برنامه شما فراهم می کند. صفحات جانبی سطوح حاوی محتوای تکمیلی هستند که به لبه چپ یا راست صفحه متصل می شوند.
      </Typography>

      <Typography className="mb-40" component="div">
      کشوهای ناوبری (یا &quot;نوارهای کناری&quot;) دسترسی به مقاصد و عملکرد برنامه‌ها، مانند تغییر حساب‌ها را فراهم می‌کنند. آنها می توانند به طور دائم روی صفحه باشند یا با نماد منوی ناوبری کنترل شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://m2.material.io/components/sheets-side">صفحات جانبی</a> سطوح تکمیلی هستند که عمدتا در تبلت و دسکتاپ استفاده می شوند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کشوی موقت
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای ناوبری موقت می توانند باز یا بسته شوند. به طور پیش‌فرض بسته میباشد. کشو به‌طور موقت بالای همه محتوای دیگر باز می‌شود تا زمانی که یک بخش انتخاب شود.
      </Typography>
      <Typography className="mb-40" component="div">
      کشو را می توان با کلیک کردن روی همپوشانی یا فشار دادن کلید Esc لغو کرد. هنگامی که یک مورد انتخاب می‌شود، بسته می‌شود و با کنترل پراپ <code>open</code> مدیریت می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TemporaryDrawer.js"
          className="my-24"
          iframe={false}
          component={require('../components/drawers/TemporaryDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/TemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قابل کشیدن   
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید کشو را با کامپوننت <code>SwipeableDrawer</code> قابل کشیدن  کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      این کامپوننت با یک بار سربار 2 کیلوبایتی gzipped ارائه می شود. برخی از دستگاه های تلفن همراه ارزان قیمت نمی توانند انگشتان دست را با سرعت 60 فریم بر ثانیه دنبال کنند. برای کمک می توانید از پراپ <code>disableBackdropTransition</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableTemporaryDrawer.js"
          className="my-24"
          iframe={false}
          component={require('../components/drawers/SwipeableTemporaryDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/SwipeableTemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      ویژگی های زیر در این وب سایت مستندسازی برای استفاده بهینه از کامپوننت استفاده می شود:
      </Typography>
      <ul>
        <li>
        iOS بر روی دستگاه های پیشرفته میزبانی می شود. ترنزیشن پس زمینه را می توان بدون رها کردن فریم فعال کرد. عملکرد به اندازه کافی خوب خواهد بود.
        </li>
        <li>
        iOS یک &laquo;swipe to back to back دارد&raquo; ویژگی که با ویژگی کشف تداخل دارد، بنابراین کشف باید غیرفعال شود.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      لبه قابل کشیدن
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید <code>SwipeableDrawer</code> را به گونه‌ای پیکربندی کنید که هنگام بسته شدن، لبه‌ای قابل مشاهده داشته باشد.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر روی دسکتاپ هستید، می‌توانید کشو را با &quot;OPEN&quot; تغییر دهید. دکمه. اگر از تلفن همراه استفاده می‌کنید، می‌توانید نسخه نمایشی را در CodeSandbox (نماد &quot;ویرایش&quot;) باز کنید و تند بکشید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableEdgeDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/SwipeableEdgeDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/SwipeableEdgeDrawer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      KeepMounted
      </Typography>
      <Typography className="mb-40" component="div">
      Modal مورد استفاده داخلی توسط کشوی Swipeable دارای پراپ <code>keepMounted</code> به طور پیش فرض تنظیم شده است. این بدان معنی است که محتویات کشو همیشه در DOM وجود دارد.
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید این رفتار پیش‌فرض را با prop<code>ModalProps</code> تغییر دهید، اما ممکن است در React 18 با مشکل <code>keepMounted: false</code> مواجه شوید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Drawer
  variant="temporary"
  ModalProps={{
    keepMounted: false,
  
/>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     کشوی ریسپانسیو
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از نوع <code>temporary</code> برای نمایش کشو برای صفحه‌های کوچک و{' '}<code>permanent</code> برای کشو برای صفحه‌های بازتر استفاده کنید.
       
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/ResponsiveDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/ResponsiveDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کشو ماندگار
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای پیمایش دائمی می توانند باز یا بسته شوند. کشو در همان سطحی که محتوا قرار دارد، قرار می گیرد. به طور پیش فرض بسته است و با انتخاب آیکون منو باز می شود و تا زمانی که کاربر بسته شود باز می ماند. وضعیت کشو از عمل به عمل و جلسه به جلسه به یاد می‌آید.
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که کشو خارج از شبکه صفحه است و باز می شود، کشو محتوای دیگر را مجبور می کند تا اندازه را تغییر دهند و با درگاه نمایش کوچکتر سازگار شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای ناوبری دائمی برای همه اندازه های بزرگتر از موبایل قابل قبول هستند. آنها برای برنامه هایی با چندین سطح سلسله مراتبی که نیاز به استفاده از فلش رو به بالا برای پیمایش دارند، توصیه نمی شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PersistentDrawerLeft.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PersistentDrawerLeft.js').default}
          raw={require('!raw-loader!../components/drawers/PersistentDrawerLeft.js')}
        />
        <FuseExample
          name="PersistentDrawerRight.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PersistentDrawerRight.js').default}
          raw={require('!raw-loader!../components/drawers/PersistentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کشو مدل کوچک
      </Typography>
      <Typography className="mb-40" component="div">
      در این تغییر، کشوی پیمایش مداوم عرض خود را تغییر می دهد. بافی  استیت  آن مانند یک کشو کوچک در همان ارتفاع محتوا است که توسط نوار برنامه بریده شده است. هنگامی که گسترش می یابد، به عنوان کشوی ناوبری دائمی استاندارد ظاهر می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      نوع کوچک برای بخش‌های برنامه‌هایی که نیاز به دسترسی سریع به انتخاب در کنار محتوا دارند، توصیه می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MiniDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/MiniDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/MiniDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کشوی دائمی
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای پیمایش دائمی همیشه قابل مشاهده هستند و به لبه سمت چپ سنجاق می شوند، در همان ارتفاعی که محتوا یا پس زمینه وجود دارد. آنها را نمی توان بسته کرد.
      </Typography>
      <Typography className="mb-40" component="div">
      کشوهای پیمایش دائمی <strong>پیش‌فرض توصیه‌شده برای دسک‌تاپ</strong> هستند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ناوبری تمام ارتفاع
      </Typography>
      <Typography className="mb-40" component="div">
      برنامه‌هایی که بر مصرف اطلاعات متمرکز هستند و از سلسله مراتب چپ به راست استفاده می‌کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PermanentDrawerLeft.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PermanentDrawerLeft.js').default}
          raw={require('!raw-loader!../components/drawers/PermanentDrawerLeft.js')}
        />
        <FuseExample
          name="PermanentDrawerRight.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PermanentDrawerRight.js').default}
          raw={require('!raw-loader!../components/drawers/PermanentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      زیر نوار برنامه clipp شده است
      </Typography>
      <Typography className="mb-40" component="div">
      برنامه های متمرکز بر بهره وری که به تعادل در سراسر صفحه نیاز دارند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClippedDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/ClippedDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/ClippedDrawer.js')}
        />
      </Typography>
    </>
  );
}

export default DrawersDoc;
