import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ButtonsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/buttons"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        دکمه
      </Typography>
      <Typography className="description">
      دکمه‌ها به کاربران اجازه می‌دهند تا با یک ضربه، اقداماتی انجام دهند و انتخاب کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      دکمه ها با اقداماتی  که کاربران می توانند انجام دهند ارتباط برقرار می کنند. آنها معمولاً در سرتاسر UI شما قرار می‌گیرند، در مکان‌هایی مانند:
      </Typography>
      <ul>
      <li>پنجره های مدال</li>
         <li>فرم ها</li>
         <li>کارت ها</li>
         <li>نوار ابزار</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Button</code> دارای سه نوع است: متن (پیش‌فرض)، گنجانده شده و مشخص شده.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/BasicButtons.js').default}
          raw={require('!raw-loader!../components/buttons/BasicButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       دکمه متنی
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://m2.material.io/components/buttons#text-button">دکمه های متنی</a>
        معمولاً برای اعمال کم‌تر استفاده می‌شوند، از جمله مواردی که در گفتگوها، در کارت‌ها قرار دارند. در کارت‌ها، دکمه‌های متنی به حفظ تأکید بر محتوای کارت کمک می‌کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/TextButtons.js').default}
          raw={require('!raw-loader!../components/buttons/TextButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه گنجانده شده
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://m2.material.io/components/buttons#contained-button">دکمه های گنجانده شده</a>
         تاکید بالایی دارند و با استفاده از ارتفاع و پر کردن متمایز می‌شوند. آنها حاوی اقداماتی هستند که برای برنامه شما مهم هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ContainedButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/ContainedButtons.js').default}
          raw={require('!raw-loader!../components/buttons/ContainedButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید ارتفاع را با پراپ <code>disableElevation</code> حذف کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisableElevation.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/DisableElevation.js').default}
          raw={require('!raw-loader!../components/buttons/DisableElevation.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه مشخص شده(Outlined )
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://m2.material.io/components/buttons#outlined-button"> دکمه های مشخص شده(Outlined )</a> دکمه هایی با تاکید متوسط هستند. آنها حاوی کنش‌هایی هستند که مهم هستند، اما عملکرد اصلی یک برنامه نیستند.
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های مشخص شده نیز جایگزینی با تاکید کمتر برای دکمه‌های حاوی یا یک جایگزین با تاکید بیشتر برای دکمه‌های متنی هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/OutlinedButtons.js').default}
          raw={require('!raw-loader!../components/buttons/OutlinedButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رسیدگی به کلیک ها
      </Typography>
      <Typography className="mb-40" component="div">
      همه کامپوننت ها یک کنترلر <code>onClick</code> المنت می‌پذیرند که روی المنت DOM ریشه اعمال می‌شود.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Button
  onClick={() => {
    alert('کلیک شد');
  
>
  روی من کلیک کن
</Button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که در مستندات <a href="/material ui/guides/api/#native-properties">اجتناب می‌کند</a> در بخش API کامپوننت‌ها، موارد بومی را ذکر کنید (تعداد زیادی وجود دارد).
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/ColorButtons.js').default}
          raw={require('!raw-loader!../components/buttons/ColorButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر استفاده از رنگ‌های دکمه‌های پیش‌فرض، می‌توانید رنگ‌های سفارشی اضافه کنید یا هر چیزی را که نیاز ندارید غیرفعال کنید.برای اطلاعات بیشتر به مثال{' '} <a href="/material-ui/customization/palette/#adding-new-colors">افزودن رنگ‌های جدید</a>{' '} مراجعه کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای دکمه های بزرگتر یا کوچکتر، از پراپ <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonSizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/ButtonSizes.js').default}
          raw={require('!raw-loader!../components/buttons/ButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه آپلود
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UploadButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/UploadButtons.js').default}
          raw={require('!raw-loader!../components/buttons/UploadButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه هایی با آیکون و برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      گاهی اوقات ممکن است بخواهید آیکون هایی برای دکمه های خاصی داشته باشید تا UX برنامه را بهبود ببخشید زیرا ما لوگو ها را راحت تر از متن ساده تشخیص می دهیم..به عنوان مثال، اگر یک دکمه حذف دارید، می توانید آن را با آیکون سطل زباله برچسب بزنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconLabelButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/IconLabelButtons.js').default}
          raw={require('!raw-loader!../components/buttons/IconLabelButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه آیکون
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه های آیکون معمولاً در نوارهای برنامه و نوار ابزار یافت می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      آیکونها همچنین برای دکمه‌های جابه‌جایی مناسب هستند که امکان انتخاب یا حذف یک انتخاب واحد را فراهم می‌کنند، مانند افزودن یا حذف یک ستاره به یک مورد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/IconButtons.js').default}
          raw={require('!raw-loader!../components/buttons/IconButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای دکمه های آیکون بزرگتر یا کوچکتر، از پراپ <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconButtonSizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/IconButtonSizes.js').default}
          raw={require('!raw-loader!../components/buttons/IconButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        رنگ ها
      </Typography>
      <Typography className="mb-40" component="div">
      از prop <code>color</code> برای اعمال پالت رنگ تم به کامپوننت استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconButtonColors.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/IconButtonColors.js').default}
          raw={require('!raw-loader!../components/buttons/IconButtonColors.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/">صفحه اسناد overrides </a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/CustomizedButtons.js').default}
          raw={require('!raw-loader!../components/buttons/CustomizedButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      🎨 اگر به دنبال الهام هستید، می‌توانید {' '} <a href="https://mui-treasury.com/styles/button/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید.
          .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه پیچیده
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌های متن، دکمه‌های حاوی، دکمه‌های حرکت شناور و دکمه‌های آیکون بر روی یک کامپوننت ساخته شده‌اند: <code>ButtonBase</code>. می توانید از این کامپوننت سطح پایین برای ایجاد تعاملات سفارشی استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonBase.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/ButtonBase.js').default}
          raw={require('!raw-loader!../components/buttons/ButtonBase.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کتابخانه مسیریابی شخص ثالث (Third-party routing library)
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت پیمایش انجام شود، بدون اینکه HTTP رفت و برگشت به سرور داشته باشد.کامپوننت <code>ButtonBase</code> پراپ <code>component</code> را برای رسیدگی به این مورد استفاده فراهم می کند. در اینجا یک{' '} <a href="/material-ui/guides/routing/#button">راهنمای دقیق تر</a> وجود دارد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      مکان نما مجاز نیست
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت ButtonBase <code>pointer-events: none;</code> را روی دکمه‌های غیرفعال تنظیم می‌کند، که از ظاهر مکان‌نمای غیرفعال جلوگیری می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می خواهید از <code>not-allowed</code> استفاده کنید، دو گزینه دارید:
        
      </Typography>
      <ol>
        <li>
          <strong>فقط CSS</strong>.می توانید سبک اشاره گر رویدادها را در حالت غیرفعال المنت <code>{`<button>`}</code> حذف کنید:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiButtonBase-root:disabled {
  cursor: not-allowed;
  pointer-events: auto;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      با این حال:
      </Typography>
      <ul>
        <li>
        وقتی نیاز به نمایش{' '}<a href="/material-ui/react-tooltip/#disabled-elements">نکات ابزار روی المنت های غیرفعال دارید، باید <code>pointer-events: none;</code> را اضافه کنید. </a>.
        </li>
        <li>
        اگر چیزی غیر از یک المنت دکمه، به عنوان مثال، یک المنت لینک <code>{`<a>`}</code> را ارائه دهید، مکان نما تغییر نمی کند.
        </li>
      </ul>
      <ol start="2">
        <li>
        <strong>تغییر DOM</strong>. می توانید دکمه را بپیچید:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<span style={{ cursor: 'not-allowed' }}>
  <Button component={Link} disabled>
    disabled
  </Button>
</span>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      این مزیت پشتیبانی از هر المنت را دارد، به عنوان مثال، یک المنت لینک <code>{`<a>`}</code>{' '}.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      API تجربی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دکمه لودینگ
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="/material-ui/about-the-lab/">
          <code>@mui/lab</code>
        </a>{' '}
        دکمه های لودینگ را ارائه می دهد که می توانند وضعیت لودینگ را نشان دهند و تعاملات را غیرفعال کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LoadingButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/LoadingButtons.js').default}
          raw={require('!raw-loader!../components/buttons/LoadingButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      سوئیچ لودینگ را تغییر دهید تا ترنزیشن بین استیت های مختلف را ببینید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LoadingButtonsTransition.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/LoadingButtonsTransition.js').default}
          raw={require('!raw-loader!../components/buttons/LoadingButtonsTransition.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار یک {' '} <a href="https://github.com/mui/material-ui/issues/27853">مشکل شناخته شده</a> در مورد ترجمه صفحه با استفاده از ابزارهای Chrome در صورت وجود دکمه لودینگ وجود دارد. .پس از ترجمه صفحه، با تغییر استیت لودینگ یک دکمه، برنامه از کار می افتد.برای جلوگیری از این امر، اطمینان حاصل کنید که محتویات دکمه لودینگ در داخل هر المنت HTML، مانند یک{' '}<code>{`<span>`}</code> قرار گرفته است.:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<LoadingButton loading variant="outlined">
  <span>ارسال</span>
</LoadingButton>
`}
      </FuseHighlight>
     {/*  <Typography className="mb-40" component="div">
        :::
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Material You version
      </Typography>
      <Typography className="mb-40" component="div">
        The default Button component follows the Material Design 2 specs. For the Material Design 3
        (<a href="https://m3.material.io/">Material You</a>) version, you can use the new
        experimental <code>@mui/material-next</code> package:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
import Button from '@mui/material-next/Button';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonMaterialYouPlayground.js"
          className="my-24"
          iframe={false}
          component={require('../components/buttons/ButtonMaterialYouPlayground.js').default}
          raw={require('!raw-loader!../components/buttons/ButtonMaterialYouPlayground.js')}
        />
      </Typography> */}
    </>
  );
}

export default ButtonsDoc;
