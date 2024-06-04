import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AlertDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/alert"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      هشدار
      </Typography>
      <Typography className="description">

        یک هشدار یک پیام کوتاه و مهم را به گونه ای نمایش می دهد که توجه کاربر را بدون ایجاد تداخل در تسک کاربر جلب می کند
      </Typography>

      <Typography className="mb-40" component="div">
      اطلاعات  ::: این کامپوننت در{' '} <a href="https://m2.material.io/">دستورالعمل‌های طراحی مواد</a> مستند نشده است، اما در رابط کاربری Material موجود است. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      هشدارهای اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      این هشدار چهار سطح شدت را ارائه می دهد که یک آیکون و رنگ متمایز را تعیین می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/BasicAlerts.js').default}
          raw={require('!raw-loader!../components/alert/BasicAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      شرح
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از کامپوننت <code>AlertTitle</code> برای نمایش عنوان قالب بندی شده در بالای محتوا استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DescriptionAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/DescriptionAlerts.js').default}
          raw={require('!raw-loader!../components/alert/DescriptionAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اقدامات
      </Typography>
      <Typography className="mb-40" component="div">
      یک هشدار می تواند عملکردی داشته باشد، مانند دکمه بستن یا لغو. پس از پیام، در پایان هشدار ارائه می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      گر یک  کال بک <code>onClose</code> ارائه شده باشد و هیچ اقدامی تنظیم نشده باشد، یک آیکون بسته نمایش داده می شود.
      پراپس <code>action</code> را می توان برای ارائه یک عمل جایگزین استفاده کرد، به عنوان مثال با استفاده از دکمه یا IconButton.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActionAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/ActionAlerts.js').default}
          raw={require('!raw-loader!../components/alert/ActionAlerts.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ترنزیشن
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از یک <a href="/material-ui/transitions/">کامپوننت ترنزیشن</a> مانند{' '} <code>کوچک کردن</code> برای ترنزیشن ظاهر هشدار استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/TransitionAlerts.js').default}
          raw={require('!raw-loader!../components/alert/TransitionAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        آیکون ها
      </Typography>
      <Typography className="mb-40" component="div">
      پراپس <code>icon</code> به شما امکان می دهد یک آیکون را به ابتدای  کامپوننت هشدار اضافه کنید.که آیکون پیش فرض را برای شدت مشخص شده لغو خواهد کرد.
      </Typography>
      <Typography className="mb-40" component="div">
      
        می‌توانید شدت پیش‌فرض را به icon mapping با پراپس <code>iconMapping</code> تغییر دهید. که  می‌تواند به صورت  گلوبال با استفاده از    <a href="/material-ui/customization/theme-components/#theme-default-props">
          سفارشی سازی قالب
        </a>{' '} تعریف شود.
      </Typography>
      <Typography className="mb-40" component="div">
      با تنظیم پراپس آیکون روی false، آیکون به طور کلی حذف می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/IconAlerts.js').default}
          raw={require('!raw-loader!../components/alert/IconAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
    Variant ها
      </Typography>
      <Typography className="mb-40" component="div">
        دو variant دیگر موجود است : outlined و filled
     
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Outlined
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/OutlinedAlerts.js').default}
          raw={require('!raw-loader!../components/alert/OutlinedAlerts.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      هنگام استفاده از هشدار outlined با کامپوننت  
        <a href="/material-ui/react-snackbar/#customization">
          <code>Snackbar</code> 
        </a>
       محتوایپسزمینه قابل مشاهده  است.  شما می‌توانید با افزودن <code>{`bgcolor: 'background.paper'`}</code> به
        <a href="/material-ui/customization/how-to-customize/#the-sx-prop">
          <code>sx</code> prop
        </a>{' '}
  در کامپوننت <code>Alert</code> از این امر جلوگیری کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Filled
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FilledAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/FilledAlerts.js').default}
          raw={require('!raw-loader!../components/alert/FilledAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Toast
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از snackbar برای  
        <a href="/material-ui/react-snackbar/#customization">نمایش یک Toast</a> با آلرت استفاده کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>color</code> رنگ پیش‌فرض را برای شدت مشخص شده باطل می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/ColorAlerts.js').default}
          raw={require('!raw-loader!../components/alert/ColorAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/">
          https://www.w3.org/WAI/ARIA/apg/patterns/alert/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      هنگامی که کامپوننت به صورت داینامیک نمایش داده می شود، محتوا به طور خودکار توسط اکثر صفحه خوان ها اعلام می شود. در این زمان، صفحه خوان ها کاربران را از هشدارهایی که هنگام بارگیری صفحه وجود دارد، مطلع نمی کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      استفاده از رنگ برای افزودن معنی فقط یک نشانه بصری ارائه می دهد،, که به کاربران فناوری های کمکی مانند صفحه خوان ها منتقل  نخواهد شد..اطمینان حاصل کنید که اطلاعات مشخص شده با رنگ، نیز از خود محتوا واضح تر  باشد(مثلاً متن قابل مشاهده), یا از طریق ابزارهای جایگزین، مانند متن پنهان اضافی، گنجانده شود است.
      </Typography>
      <Typography className="mb-40" component="div">
      اکشن ها باید دارای تب ایندگس 0 باشند تا  فقط کاربرانی که از کیبورد استفاده میکنند بتوانند به آنها دسترسی پیدا کنند.
      </Typography>
    </>
  );
}

export default AlertDoc;
