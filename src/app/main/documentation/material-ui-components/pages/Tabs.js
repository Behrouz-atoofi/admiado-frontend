import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TabsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tabs"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        تب ها(Tabs)
      </Typography>
      <Typography className="description">
      تب‌ها کاوش و جابجایی بین نماهای مختلف را آسان می کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      تب‌ها سازماندهی می‌کنند و امکان پیمایش بین گروه‌هایی از محتوای مرتبط و در همان سطح سلسله مراتب را می‌دهند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       تب های پایه ای
      </Typography>
      <Typography className="mb-40" component="div">
    یک مثال اساسی با تب پنل ها.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/BasicTabs.js').default}
          raw={require('!raw-loader!../components/tabs/BasicTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      API تجربی
      </Typography>
      <Typography className="mb-40" component="div">
        <code>@mui/lab</code> کامپوننت های ابزاری را ارائه می‌کند که برای پیاده‌سازی تب های قابل دسترسی به دنبال
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"> شیوه‌های تألیف WAI-ARIA</a>  پراپس ها را تزریق می‌کند..
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LabTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/LabTabs.js').default}
          raw={require('!raw-loader!../components/tabs/LabTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       لیبل های wrap شده
      </Typography>
      <Typography className="mb-40" component="div">
      یبل های طولانی به طور خودکار روی تب ها wrap می شوند. اگر لیبل برای تب خیلی طولانی باشد، سرریز می شود و متن قابل مشاهده نخواهد بود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TabsWrappedLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/TabsWrappedLabel.js').default}
          raw={require('!raw-loader!../components/tabs/TabsWrappedLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        تب رنگی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ColorTabs.js').default}
          raw={require('!raw-loader!../components/tabs/ColorTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        تب غیرفعال
      </Typography>
      <Typography className="mb-40" component="div">
      یک تب را می توان با تنظیم قسمت <code>disabled</code> غیرفعال کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/DisabledTabs.js').default}
          raw={require('!raw-loader!../components/tabs/DisabledTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تب های ثابت
      </Typography>
      <Typography className="mb-40" component="div">
     تب های ثابت باید با تعداد محدودی تب استفاده شوند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       تمام عرض
      </Typography>
      <Typography className="mb-40" component="div">
      پراپس <code>{`variant="fullWidth"`}</code> باید برای نماهای کوچکتر استفاده شود.. این نسخه نمایشی همچنین از{' '} <a href="https://github.com/oliviertassinari/react-swipeable-views"> react-swipeable-views </a>{' '} برای متحرک سازی انتقال Tab و امکان کشیدن برگه ها روی دستگاه های لمسی استفاده می کند، 
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/FullWidthTabs.js').default}
          raw={require('!raw-loader!../components/tabs/FullWidthTabs.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        وسط چین(Centered)
      </Typography>
      <Typography className="mb-40" component="div">
      برای نماهای بزرگتر باید از پراپس <code>مرکز</code> استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CenteredTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/CenteredTabs.js').default}
          raw={require('!raw-loader!../components/tabs/CenteredTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      برگه های قابل اسکرول
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه های اسکرول خودکار
      </Typography>
      <Typography className="mb-40" component="div">
      به‌طور پیش‌فرض، دکمه‌های اسکرول چپ و راست به‌طور خودکار روی دسک‌تاپ نمایش داده می‌شوند و در موبایل پنهان می‌شوند. (بر اساس عرض  ویوپورت)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonAuto.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonAuto.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonAuto.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه های اسکرول اجباری
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های اسکرول چپ و راست (رزرو فضا) بدون توجه به عرض درگاه نمایش با <code>{`scrollButtons={true}`}</code> <code>allowScrollButtonsMobile</code> ارائه می‌شوند:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonForce.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonForce.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonForce.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می خواهید مطمئن شوید که دکمه ها همیشه قابل مشاهده هستند، باید opacity را سفارشی کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiTabs-scrollButtons.Mui-disabled {
  opacity: 0.3;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonVisible.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonVisible.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonVisible.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه های جلوگیری از  اسکرول
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های اسکرول چپ و راست هرگز با{' '} <code>{`scrollButtons={false}`}</code> نشان داده نمی‌شوند. همه اسکرول ها باید از طریق مکانیسم‌های اسکرول عامل کاربر (مثلاً کشیدن انگشت به چپ/راست، شیفت چرخ ماوس و غیره) آغاز شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonPrevent.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonPrevent.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonPrevent.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        پیکربندی
      </Typography>
      <Typography className="mb-40" component="div">
        در اینجا مثالی از سفارشی سازی کامپوننت آورده شده است.. شما میتوانید اطلاعات بیشتری در این مورد را در {' '}
        <a href="/material-ui/customization/how-to-customize/">صفحه اسناد overrides</a> کسب نمایید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/CustomizedTabs.js').default}
          raw={require('!raw-loader!../components/tabs/CustomizedTabs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 اگر به دنبال الهام هستید، می‌توانید{' '} <a href="https://mui-treasury.com/styles/tabs/"> نمونه‌های سفارشی‌سازی MUI Treasury</a> را بررسی کنید.
         .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تب های عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      برای ایجاد تب های عمودی به جای تب های افقی پیش فرض، <code>{`orientation="vertical"`}</code> وجود دارد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/VerticalTabs.js').default}
          raw={require('!raw-loader!../components/tabs/VerticalTabs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که می توانید نوار اسکرول را با <code>visibleScrollbar</code> بازیابی کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تب های منو
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش‌فرض، تب ها از المنت <code>button</code> استفاده می‌کنند، اما شما می‌توانید تگ یا کامپوننت سفارشی خود را ارائه دهید. در اینجا نمونه ای از پیاده سازی ناوبری زبانه ای آورده شده است:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NavTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/NavTabs.js').default}
          raw={require('!raw-loader!../components/tabs/NavTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       تب های آیکونی
      </Typography>
      <Typography className="mb-40" component="div">
      لیبل های تب ممکن است تماما به صورت آیکون یا تماما به صورت متن باشند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/IconTabs.js').default}
          raw={require('!raw-loader!../components/tabs/IconTabs.js')}
        />
        <FuseExample
          name="IconLabelTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/IconLabelTabs.js').default}
          raw={require('!raw-loader!../components/tabs/IconLabelTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       موقعیت های آیکون
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، آیکون در <code>top</code> یک تب قرار دارد.
      سایر موقعیت های پشتیبانی شده عبارتند از: <code>start</code>، <code>end</code>، <code>bottom</code>.

      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconPositionTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/IconPositionTabs.js').default}
          raw={require('!raw-loader!../components/tabs/IconPositionTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کتابخانه روتینگ شخص ثالث( Third-party routing library)
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت پیمایش انجام شود، بدون اینکه HTTP رفت و برگشت به سرور داشته باشد. کامپوننت <code>Tab</code> پراپس <code>Component</code>{' '} را برای رسیدگی به این مورد استفاده فراهم می کند. در اینجا یک {' '}<a href="/material-ui/guides/routing/#tabs">راهنمای دقیق‌تر</a> است.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/">
          https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      مراحل زیر برای ارائه اطلاعات لازم برای فناوری های کمکی مورد نیاز است:
      </Typography>
      <ol>
        <li>
          برچسب <code>Tabs</code>  از طریق <code>aria-label</code> یا <code>aria-labelledby</code>.
        </li>
        <li>
          <code> تب ها</code>ها باید با تنظیم <code>id</code> صحیح به{' '} <code>{`[role="tabpanel"]`}</code> مربوطه خود متصل شوند. ، <code>aria-controls</code> و <code>aria-labelledby</code>.
        </li>
      </ol>
      <Typography className="mb-40" component="div">
      نمونه ای برای اجرای فعلی را می توان در دموهای موجود در این صفحه یافت. ما همچنین <a href="#experimental-api">یک API آزمایشی</a> را در <code>@mui/lab</code>{' '} منتشر کرده‌ایم که نیازی به کار اضافی ندارد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ناوبری صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت ها با استفاده از رفتار فعال سازی دستی، ناوبری صفحه کلید را اجرا می کنند.اگر می خواهید به انتخابی بروید که به طور خودکار از رفتار فوکوس پیروی می کند، <code>selectionFollowsFocus</code> را به کامپوننت <code>Tabs</code> منتقل کرده اید.. شیوه‌های نگارش WAI-ARIA راهنمای دقیقی در مورد <a href="https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#x6-4-deciding-when-to-make دارد. -selection-automatically-follow-focus"> چگونه تصمیم بگیریم که چه زمانی انتخاب را به صورت خودکار دنبال کنید </a>
         .
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        پیش نمایش
      </Typography>
      <Typography className="mb-40" component="div">
      دو دمو زیر فقط در رفتار ناوبری صفحه کلیدشان با هم تفاوت دارند.روی یک تب فوکوس کنید و با کلیدهای جهت‌نما پیمایش کنید تا تفاوت را متوجه شوید، به عنوان مثال <kbd className="key">پیکان سمت چپ</kbd>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
/* تب هایی که در آن selectionFollowsFocus است */
<Tabs selectionFollowsFocus />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleTabs1.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/AccessibleTabs1.js').default}
          raw={require('!raw-loader!../components/tabs/AccessibleTabs1.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
/* تب هایی که در آن هر تب باید به صورت دستی انتخاب شود */
<Tabs />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleTabs2.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/AccessibleTabs2.js').default}
          raw={require('!raw-loader!../components/tabs/AccessibleTabs2.js')}
        />
      </Typography>
    </>
  );
}

export default TabsDoc;
