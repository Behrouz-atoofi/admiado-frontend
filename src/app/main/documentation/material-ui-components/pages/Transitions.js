import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TransitionsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/transitions"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        ترنزیشن ها
      </Typography>
      <Typography className="description">

      ترنزیشن ها ، رابط کاربری (UI) را برای استفاده رسا و آسان تر میکنند.
      </Typography>

      <Typography className="mb-40" component="div">
      MUI ترنزیشن هایی را ارائه میدهد که میتوان از آنها معرفی برخی از
        <a href="https://m2.material.io/design/motion/">حرکت های (motion)</a> اولیه به برنامه خود معرفی کرد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        کالپس (Collapse)
      </Typography>
      <Typography className="mb-40" component="div">
      از لبه ابتدایی المنت فرزند باز کنید. در صورت نیاز به کالپس  افقی از پراپ جهت گیری(<code>orientation</code>) استفاده کنید.
      پراپ <code>collapsedSize</code> را می توان برای تنظیم حداقل عرض/ارتفاع در حالت باز نشده استفاده کرد.
        
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleCollapse.js"
          className="my-24"
          iframe={false}
          component={require('../components/transitions/SimpleCollapse.js').default}
          raw={require('!raw-loader!../components/transitions/SimpleCollapse.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محو شدن (Fade)
      </Typography>
      <Typography className="mb-40" component="div">
      محو شدن از شفاف به مات.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleFade.js"
          className="my-24"
          iframe={false}
          component={require('../components/transitions/SimpleFade.js').default}
          raw={require('!raw-loader!../components/transitions/SimpleFade.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رشد  (Grow)
      </Typography>
      <Typography className="mb-40" component="div">
      از مرکز المنت فرزند به سمت بیرون منبسط می شود، در حالی که از شفاف به مات نیز محو می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      مثال دوم نحوه تغییر <code>transform-origin</code> را نشان می‌دهد، و به صورت مشروط، پراپ <code>timeout</code> را برای تغییر سرعت ورودی اعمال می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleGrow.js"
          className="my-24"
          iframe={false}
          component={require('../components/transitions/SimpleGrow.js').default}
          raw={require('!raw-loader!../components/transitions/SimpleGrow.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اسلاید
      </Typography>
      <Typography className="mb-40" component="div">
      از لبه صفحه به داخل حرکت میکند. پراپ <code>direction</code> کنترل می کند که انتقال از کدام لبه صفحه شروع می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>mountOnEnter</code> کاپومننت  Transition از mount شدن ; فرزند تا زمانی که  true باشد جلوگیری می کند.
      این امر مانع از اسکرول کامپوننت دارای پوزیشن relative از پوزیشن خارج صفحه به داخل و در دید بودن آن می شود. به طور مشابه، پراپ {' '} <code>unmountOnExit</code> پس از انتقال به خارج از صفحه، کامپوننت را از DOM حذف می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleSlide.js"
          className="my-24"
          iframe={false}
          component={require('../components/transitions/SimpleSlide.js').default}
          raw={require('!raw-loader!../components/transitions/SimpleSlide.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       اسلاید relative نسبت به کانتینر
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت Slide همچنین prop <code>container</code> را می پذیرد که ارجاع به یک گره DOM است. اگر این پایه تنظیم شود، کامپوننت Slide از لبه آن گره DOM اسلاید میشود .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SlideFromContainer.js"
          className="my-24"
          iframe={false}
          component={require('../components/transitions/SlideFromContainer.js').default}
          raw={require('!raw-loader!../components/transitions/SlideFromContainer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        زوم
      </Typography>
      <Typography className="mb-40" component="div">
      از مرکز المنت فرزند به سمت بیرون باز کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال همچنین نحوه به تاخیر انداختن ترنزیشن ورودی را نشان می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleZoom.js"
          className="my-24"
          iframe={false}
          component={require('../components/transitions/SimpleZoom.js').default}
          raw={require('!raw-loader!../components/transitions/SimpleZoom.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نیازمندی المنت  فرزند(child requirement)
      </Typography>
      <ul>
        <li>
      <strong> ارسال استایل</strong>  : برای پشتیبانی بهتر از رندر سرور، MUI برای فرزندان برخی از کامپوننت های ترنزیشن (محو شدن، رشد، زوم، اسلاید) یک پراپ  استایل ارائه می‌کند.
      پراپ <code>style</code> باید در DOM اعمال شود تا انیمیشن طبق انتظار کار کند.
        </li>
        <li>
        <strong> ارسال مرجع (ref) </strong>: کامپوننت های ترنزیشن به اولین المنت  فرزند نیاز دارند تا مرجع خود را به گره DOM ارسال کند. برای اطلاعات بیشتر در مورد ref{' '}
          <a href="/material-ui/guides/composition/#caveat-with-refs">هشدار با ref ها</a>
          را بررسی کنید
        </li>
        <li>
          <strong>تک المنت</strong>: کامپوننت های ترنزیشن فقط به یک المنت فرزند نیاز دارند (<code>React.Fragment</code> مجاز نیست).
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
//آبجکت \`props\` حاوی یک پراپ \`style\` است.
// همانطور که در اینجا نشان داده شده است باید آن را به المنت \`div\` ارائه دهید.
const MyComponent = React.forwardRef((props, ref) {
  return (
    <div ref={ref} {...props}>
      محو شدن
    </div>
  );
})

export default Main() {
  return (
    <Fade>
      {/* MyComponent باید تنها فرزند باشد */}
      <MyComponent />
    </Fade>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        گروه ترنزیشن (TransitionGroup)
      </Typography>
      <Typography className="mb-40" component="div">
      برای متحرک سازی یک کامپوننت در هنگام mount یا  unmount می توانید از کامپوننت {' '}
        <a href="http://reactcommunity.org/react-transition-group/transition-group/">
          <code>TransitionGroup</code>
        </a>{' '}
         در  <em>react-transition-group</em> استفاده کنید. زمانی که کامپوننت ها اضافه یا حذف شوند ، پراپ {' '} <code>in</code> به‌طور خودکار توسط <code>TransitionGroup</code> تغییر می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionGroupExample.js"
          className="my-24"
          iframe={false}
          component={require('../components/transitions/TransitionGroupExample.js').default}
          raw={require('!raw-loader!../components/transitions/TransitionGroupExample.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     پراپ TransitionComponent
      </Typography>
      <Typography className="mb-40" component="div">
      برخی از کامپوننت های  MUI از این ترنزیشن ها به صورت داخلی استفاده می کنند. اینها یک پراپ{' '} <code>TransitionComponent</code> را برای سفارشی کردن ترنزیشن پیش‌فرض می‌پذیرند.
      شما می توانید از هر یک از کامپوننت های فوق یا  از کامپوننت خودتان استفاده کنید. فقط باید شرایط زیر را رعایت شوند:
      </Typography>
      <ul>
        <li>
       پراپ <code>in</code> را  بپذیرد. این مربوط به حالت باز/بستن است.
        </li>
        <li>
        هنگامی که ترنزیشن enter شروع می شود،   پراپ فالبک <code>onEnter</code> را فراخوانی کند.
        </li>
        <li>
        هنگامی که ترنزیشن خروج کامل شد،   پراپ فالبک <code>onExited</code> را فراخوانی کند.این دو  فالبک اجازه می‌دهند که فرزندان خود را در حالت بسته و ترنزیشن کامل آن‌ها را به  حالت   unmount در بیاورد.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      برای کسب اطلاعات بیشتر در  زمینه ساخت ترنزیشن های سفارشی , از اسناد
        <em>react-transition-group</em>{' '}
        <a href="http://reactcommunity.org/react-transition-group/transition/">
          <code>Transition</code> 
        </a>
       بازدید  کنید. .همچنین می‌توانید از بخش‌های اختصاصی برخی از کامپوننت ها دیدن کنید:
      </Typography>
      <ul>
        <li>
          <a href="/material-ui/react-modal/#transitions">مدال</a>
        </li>
        <li>
          <a href="/material-ui/react-dialog/#transitions">دیالوگ</a>
        </li>
        <li>
          <a href="/material-ui/react-popper/#transitions">پاپر</a>
        </li>
        <li>
          <a href="/material-ui/react-snackbar/#transitions">اسنک بار</a>
        </li>
        <li>
          <a href="/material-ui/react-tooltip/#transitions">تول تیپ</a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عملکرد سئو
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای کامپوننت ترنزیشن به طور پیش‌فرض mount شده است حتی اگر{' '}
  <code>{`in={false}`}</code> باشد. این رفتار پیش‌فرض رندر سمت سرور و سئو را در ذهن دارد. اگر کامپوننت درختی غنی ای  را در داخل ترنزیشن خود ارائه می‌دهید، ممکن است ایده خوبی باشد که این رفتار پیش‌فرض را با فعال کردن قسمت <code>unmountOnExit</code> تغییر دهید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Fade in={false} unmountOnExit />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      مانند هر بهینه سازی عملکرد، این یک گلوله نقره ای نیست. حتما ابتدا تنگناها را شناسایی کنید و سپس این استراتژی های بهینه سازی را امتحان کنید.
      </Typography>
    </>
  );
}

export default TransitionsDoc;
