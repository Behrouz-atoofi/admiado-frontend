import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DialogsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/dialogs"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        دیالوگ
      </Typography>
      <Typography className="description">
      دیالوگ ها کاربران را در مورد یک کار آگاه می کنند و می توانند حاوی اطلاعات مهمی باشند، نیاز به تصمیم گیری داشته باشند یا چندین کار را شامل شوند.
      </Typography>

      <Typography className="mb-40" component="div">
      دیالوگ نوعی پنجره <a href="/material-ui/react-modal/">modal</a> است که برای ارائه اطلاعات مهم یا درخواست تصمیم در جلوی محتوای برنامه ظاهر می‌شود. دیالوگ‌ها همه عملکردهای برنامه را وقتی ظاهر می‌شوند غیرفعال می‌کنند و تا زمانی که تأیید، رد شده یا اقدام لازم انجام نشده باشد، روی صفحه باقی می‌مانند.
      </Typography>
      <Typography className="mb-40" component="div">
      دیالوگ ها به طور هدفمند وقفه دارند، بنابراین باید از آنها کم استفاده کرد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       دیالوگ اصلی
      </Typography>
      <Typography className="mb-40" component="div">
      دیالوگ های ساده می توانند جزئیات یا اقدامات بیشتری را در مورد یک مورد فهرست ارائه دهند. به عنوان مثال، آنها می توانند آواتارها، آیکون ها، زیرمتن روشن کننده یا اقدامات متعامد (مانند افزودن یک حساب کاربری) را نمایش دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      مکانیک لمسی:
      </Typography>
      <ul>
        <li>انتخاب یک گزینه فوراً گزینه را commit کرده و منو را می بندد</li>
        <li>
        لمس کردن خارج از کادر دیالوگ یا فشار دادن برگشت، عمل را لغو می کند و دیالوگ را می بندد
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/SimpleDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/SimpleDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       هشدار ها
      </Typography>
      <Typography className="mb-40" component="div">
      هشدارها وقفه های فوری هستند که نیاز به تایید دارند و کاربر را در مورد یک موقعیت آگاه می کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      بیشتر هشدارها نیازی به عنوان ندارند. آنها یک تصمیم را در یک یا دو جمله خلاصه می کنند:
       </Typography>
      <ul>
      <li>پرسیدن یک سوال (به عنوان مثال &quot;این مکالمه حذف شود؟&quot;)</li>
         <li>ایجاد بیانیه مربوط به دکمه های عمل</li>
      </ul>
      <Typography className="mb-40" component="div">
      از هشدارهای نوار عنوان فقط برای موقعیت‌های پرخطر، مانند از دست دادن احتمالی اتصال استفاده کنید. کاربران باید بتوانند انتخاب ها را تنها بر اساس عنوان و متن دکمه درک کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر عنوان مورد نیاز باشد:
      </Typography>
      <ul>
        <li>
        از یک سوال یا عبارت واضح با توضیح در قسمت محتوا استفاده کنید، مانند "پاک کردن حافظه USB؟"
        </li>
        <li>
        از عذرخواهی، ابهام یا سوالاتی مانند &laquo;هشدار!&raquo; یا &quot;مطمئنی؟&quot;
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlertDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/AlertDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/AlertDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ترنزیشن ها
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید ترنزیشن را عوض کنید، مثال بعدی از <code>Slide</code> استفاده می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlertDialogSlide.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/AlertDialogSlide.js').default}
          raw={require('!raw-loader!../components/dialogs/AlertDialogSlide.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       دیالوگ فرم
      </Typography>
      <Typography className="mb-40" component="div">
      دیالوگ های فرم به کاربران اجازه می دهد تا فیلدهای فرم را در یک دیالوگ پر کنند. به عنوان مثال، اگر سایت شما از مشترکین احتمالی درخواست می کند که آدرس ایمیل خود را پر کنند، آنها می توانند فیلد ایمیل را پر کنند و &#39;ارسال&#39; را لمس کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/FormDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/FormDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/">صفحه اسناد  override</a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
      این دیالوگ دارای یک دکمه بستن است که به قابلیت استفاده کمک می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedDialogs.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/CustomizedDialogs.js').default}
          raw={require('!raw-loader!../components/dialogs/CustomizedDialogs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دیالوگ های تمام صفحه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullScreenDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/FullScreenDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/FullScreenDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه های اختیاری
      </Typography>
      <Typography className="mb-40" component="div">
      با استفاده از <code>maxWidth</code> قابل شمارش در ترکیب با <code>fullWidth</code> بولین حداکثر پهنای دیالوگ را می‌توانید تنظیم کنید..وقتی پراپ  <code>fullWidth</code> true باشد، دیالوگ بر اساس مقدار <code>maxWidth</code> تطبیق می‌یابد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MaxWidthDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/MaxWidthDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/MaxWidthDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تمام صفحه ریسپانسیو
      </Typography>
      <Typography className="mb-40" component="div">
      شما میتوانید با استفاده از {' '}
        <a href="/material-ui/react-use-media-query/">
          <code>useMediaQuery</code>
        </a>
        یک دیالوگ تمام صفحه ریسپانسیو ایجاد کنید
        .
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useMediaQuery from '@mui/material/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return <Dialog fullScreen={fullScreen} />;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/ResponsiveDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/ResponsiveDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دیالوگ های تایید
      </Typography>
      <Typography className="mb-40" component="div">
      دیالوگ‌های تأیید از کاربران می‌خواهد تا قبل از تعهد یک گزینه، صریحاً انتخاب خود را تأیید کنند. برای مثال، کاربران می‌توانند به چندین آهنگ زنگ گوش دهند، اما تنها با لمس &quot;OK&quot; انتخاب نهایی را انجام دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      با لمس &laquo;لغو&raquo; در یک دیالوگ تأیید، یا فشار دادن «برگشت»، اقدام را لغو می‌کند، هر گونه تغییری را نادیده می‌گیرد، و دیالوگ را می‌بندد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ConfirmationDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/ConfirmationDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/ConfirmationDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دیالوگ قابل کشیدن
      </Typography>
      <Typography className="mb-40" component="div">

      با استفاده از <a href="https://github.com/react-grid-layout/react-draggable">react-draggable</a>. می توانید یک گفتگوی قابل کشیدن ایجاد کنید. برای انجام این کار، می‌توانید کامپوننت Draggable وارد شده را به عنوان PaperComponent کامپوننت Dialog ارسال کنید. با این کار کل دیالوگ قابل کشیدن است.
        
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DraggableDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/DraggableDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/DraggableDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اسکرول مطالب طولانی
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی دیالوگ ها برای درگاه دید کاربر یا دستگاه بیش از حد طولانی می شوند، اسکرول می کنند.
      </Typography>
      <ul>
        <li>
        <code>scroll=paper</code> محتوای دیالوگ درون المنت کاغذ اسکرول می‌شود.
        </li>
        <li>
        <code>scroll=body</code> محتوای دیالوگ در المنت بدنه حرکت می کند.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      دمو زیر را امتحان کنید تا متوجه منظور ما شوید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/dialogs/ScrollDialog.js').default}
          raw={require('!raw-loader!../components/dialogs/ScrollDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کارایی
      </Typography>
      <Typography className="mb-40" component="div">
      <a href="/material-ui/react-modal/#performance">بخش عملکرد مودال</a> را دنبال کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="mb-40" component="div">
      <a href="/material-ui/react-modal/#limitations">بخش محدودیت‌های مودال</a> را دنبال کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پروژه های تکمیلی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Material UI Confirm
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        <img src="https://img.shields.io/github/stars/jonatanklosko/material-ui-confirm" alt="stars"/>
       <img src="https://img.shields.io/npm/dm/material-ui-confirm.svg" alt="npm downloads"/>
      </Typography>
      <Typography className="mb-40" component="div">
      این بسته دیالوگ هایی را برای تأیید عملکرد کاربر بدون نوشتن کد boilerplate  ارائه می دهد.
     
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      <a href="/material-ui/react-modal/#accessibility">بخش دسترس‌پذیری مدال</a> را دنبال کنید
        .
      </Typography>
    </>
  );
}

export default DialogsDoc;
