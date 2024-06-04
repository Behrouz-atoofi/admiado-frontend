import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TextFieldsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/text-fields"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        فیلد متنی
      </Typography>
      <Typography className="description">فیلد های متنی به کاربران اجازه وارد کردن و ویرایش متن را میدهند.</Typography>

      <Typography className="mb-40" component="div">
      فیلدهای متنی به کاربران اجازه می دهد متن را در یک رابط کاربری وارد کنند. آنها معمولاً در فرم ها و دیالوگ ها ظاهر می شوند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
 فیلد های متنی پایه ای
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت  <code>TextField</code> یک کنترل فرم کامل شامل برچسب، اینپوت و متن راهنما است که دارای سه نوع است: مشخص شده (پیش فرض)، پر شده و استاندارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/BasicTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/BasicTextFields.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      :::نکته نوع استاندارد فیلد متنی دیگر در{' '} <a href="https://m2.material.io/">Material Design guidelines</a> ( <a href= "https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03"> این مقاله دلیل </a> را توضیح می‌دهد، اما Material UI همچنان از آن پشتیبانی می‌کند. :::
        
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       پراپس فرم
      </Typography>
      <Typography className="mb-40" component="div">
      ویژگی های فرم استاندارد پشتیبانی می شوند به عنوان مثال. الزامی، غیرفعال، تایپ، و غیره و همچنین یک متن کمکی که برای ارائه زمینه در مورد اینپوت یک فیلد، مانند نحوه استفاده از اینپوت استفاده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormPropsTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/FormPropsTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/FormPropsTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اعتبار سنجی
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>error</code> وضعیت خطا را تغییر می دهد. سپس می توان از پراپ <code>helperText</code> برای ارائه بازخورد به کاربر در مورد خطا استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ValidationTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/ValidationTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/ValidationTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
   چند خطی (Multiline)  
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ  <code>multiline</code>، فیلد متن را به یک المنت   <a href="/material-ui/react-textarea-autosize/">TextareaAutosize</a> تبدیل می کند.

      مگر اینکه پراپ{' '}<code>rows</code> تنظیم شده باشد، ارتفاع فیلد متنی به صورت داینامیگ با محتوای آن مطابقت دارد (با استفاده از <a href="/material-ui/react-textarea-autosize /">TextareaAutosize</a>).
      می‌توانید از پراپ <code>minRows</code> و <code>maxRows</code> برای اتصال آن استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultilineTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/MultilineTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/MultilineTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        انتخاب (select)
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>select</code> باعث می‌شود که فیلد متن از کامپوننت {' '} <a href="/material-ui/react-select/">select</a> به صورت داخلی استفاده کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/SelectTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/SelectTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        آیکون ها
      </Typography>
      <Typography className="mb-40" component="div">
      راه های مختلفی برای نمایش یک آیکون با یک فیلد متنی وجود دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InputWithIcon.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/InputWithIcon.js').default}
          raw={require('!raw-loader!../components/text-fields/InputWithIcon.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      تزئینات اینپوت (Input Adornments)
      </Typography>
      <Typography className="mb-40" component="div">
      راه اصلی با <code>InputAdornment</code> است. این می تواند برای افزودن یک پیشوند، پسوند یا یک عمل به یک اینپوت استفاده شود. برای مثال، می‌توانید از یک دکمه آیکون برای مخفی کردن یا نمایش دادن رمز عبور استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InputAdornments.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/InputAdornments.js').default}
          raw={require('!raw-loader!../components/text-fields/InputAdornments.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      اینپوت های کوچکتر را دوست دارید؟ از پراپ <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextFieldSizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/TextFieldSizes.js').default}
          raw={require('!raw-loader!../components/text-fields/TextFieldSizes.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      ارتفاع اینپوت نوع <code>filled</code> را می توان با رندر کردن لیبل در خارج از آن کاهش داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextFieldHiddenLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/TextFieldHiddenLabel.js').default}
          raw={require('!raw-loader!../components/text-fields/TextFieldHiddenLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        مارجین
      </Typography>
      <Typography className="mb-40" component="div">
      از پراپ <code>margin</code> می تواند برای تغییر فاصله عمودی فیلد متن استفاده شود.
      استفاده از <code>none</code> (پیش‌فرض) حاشیه‌هایی را برای <code>FormControl</code>{' '} اعمال نمی‌کند، در حالی که <code> dense</code> و <code>normal</code > این کار را انجام میدهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LayoutTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/LayoutTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/LayoutTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       تمام عرض
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توان از <code>fullWidth</code> استفاده کرد تا اینپوت تمام عرض کانتینر خود را بگیرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthTextField.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/FullWidthTextField.js').default}
          raw={require('!raw-loader!../components/text-fields/FullWidthTextField.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کنترل نشده در مقابل کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت می تواند کنترل شده یا غیر قابل کنترل باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StateTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/StateTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/StateTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        کامپوننت ها
      </Typography>
      <Typography className="mb-40" component="div">
      <code>TextField</code> از کامپوننت های کوچکتری تشکیل شده است مانند(
        <a href="/material-ui/api/form-control/">
          <code>FormControl</code>
        </a>
        ,
        <a href="/material-ui/api/input/">
          <code>Input</code>
        </a>
        ,
        <a href="/material-ui/api/filled-input/">
          <code>FilledInput</code>
        </a>
        ,
        <a href="/material-ui/api/input-label/">
          <code>InputLabel</code>
        </a>
        ,
        <a href="/material-ui/api/outlined-input/">
          <code>OutlinedInput</code>
        </a>
        , و{' '}
        <a href="/material-ui/api/form-helper-text/">
          <code>FormHelperText</code>
        </a>
        ) که می توانید مستقیماً برای سفارشی کردن اینپوت های فرم خود به طور مستقیم از آن استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین ممکن است متوجه شده باشید که برخی از خصوصیات اینپوت HTML بومی در کامپوننت {' '} <code>TextField</code> وجود ندارد. که این از عمد است. این کامپوننت از پر استفاده ترین پراپرتی ها مراقبت می کند.
      سپس، این به کاربر بستگی دارد که از کامپوننت اصلی نشان داده شده در نسخه آزمایشی زیر استفاده کند. با این حال، اگر می‌خواهید ازboilerplate  جلوگیری کنید، می‌توانید از <code>inputProps</code> (و ویژگی‌های <code>InputProps</code>,{' '}<code>InputLabelProps</code>) استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ComposedTextField.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/ComposedTextField.js').default}
          raw={require('!raw-loader!../components/text-fields/ComposedTextField.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اینپوت ها
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Inputs.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/Inputs.js').default}
          raw={require('!raw-loader!../components/text-fields/Inputs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>color</code> هنگام فوکوس، رنگ برجسته فیلد متن را تغییر می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/ColorTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/ColorTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/"> overrides documentation page </a> درباره این موضوع بیشتر بیاموزید.
      
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedInputs.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/CustomizedInputs.js').default}
          raw={require('!raw-loader!../components/text-fields/CustomizedInputs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      سفارشی سازی در CSS متوقف نمی شود. شما می توانید از ترکیب برای ساخت کامپوننت های سفارشی استفاده کنید و به برنامه خود حس منحصر به فردی بدهید. در زیر نمونه‌ای با استفاده از کامپوننت {' '} <a href="/material-ui/api/input-base/"> <code>InputBase</code></a>{' '}، با الهام از نقشه‌های Google آورده شده است. .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedInputBase.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/CustomizedInputBase.js').default}
          raw={require('!raw-loader!../components/text-fields/CustomizedInputBase.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨اگر به دنبال الهام هستید، می‌توانید{' '}<a href="https://mui-treasury.com/styles/text-field/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید.
         .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>هوک useFormControl</code>
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده سفارشی سازی پیشرفته، یک هوک <code>useFormControl()</code> در معرض دید قرار می گیرد. این هوک مقدار زمینه کامپوننت پدر <code>FormControl</code> را برمی گرداند.
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>API</strong>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { useFormControl } from '@mui/material/FormControl';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <strong>برمیگرداند</strong>
      </Typography>
      <Typography className="mb-40" component="div">
        <code>مقدار </code> (<em>آبجکت</em>):
      </Typography>
      <ul>
        <li>
        <code>value.adornedStart</code> (bool): نشان می دهد که آیا کامپوننت فرزند اینپوت یا Select دارای start adornment است یا خیر.
         
        </li>
        <li>
        <code>value.setAdornedStart</code> (<em>func</em>): تابع تنظیم کننده برای مقدار حالت{' '}<code>adornedStart</code>.
        </li>
        <li>
        <code>value.color</code> (<em>رشته</em>): رنگ طرح زمینه در حال استفاده  از پراپس های {' '}<code>FormControl</code> <code>color</code> به ارث رسیده است
        </li>
        <li>
          <code>value.disabled</code> (<em>bool</em>): مشخص میکند که  کامپوننتی که در حالت غیرفعال نمایش داده می شود، که از <code>FormControl</code>{' '} <code>disabled</code> به ارث رسیده است.
        </li>
        <li>
          <code>value.error</code> (<em>bool</em>): مشخص مکیند که آیا کامپوننت که از پراپس های <code>FormControl</code> <code>error</code> به ارث رسیده است،در حالت خطا نمایش داده می شود یا نه
        </li>
        <li>
          <code>value.filled</code> (<em>bool</em>): مشخص میکند که آیا اینپوت پر شده است یا خیر
        </li>
        <li>
          <code>value.focused</code> (<em>bool</em>):مشخص میکند که آیا کامپوننت و فرزندان آن در حالت فوکس نمایش داده می شوند یا خیر
        </li>
        <li>
          <code>value.fullWidth</code> (<em>bool</em>): مشخص میکند که آیا کامپوننت تمام عرض کانتینرخود  که از پراپس های  <code>FormControl</code><code>fullWidth</code> به  ارث رسیده  را می گیرد یا خیر،

        </li>
        <li>
          <code>value.hiddenLabel</code> (<em>bool</em>): نشان می دهد که آیا لیبل در حال پنهان شدن است، به ارث رسیده از <code>FormControl</code> <code>hiddenLabel</code>
        </li>
        <li>
          <code>value.required</code> (<em>bool</em>): نشان دهید که آیا لیبل نشان می دهد که ورودی، اینپوت مورد نیاز است، که از پراپ <code>FormControl</code>{' '} <code>require</code> به ارث رسیده است
        </li>
        <li>
          <code>value.size</code> (<em>string</em>): اندازه کامپوننت  ،  از پراپس های {' '} <code>FormControl</code> <code>size</code>به ارث رسیده  است.
        </li>
        <li>
          <code>value.variant</code> (<em>string</em>): این نوع توسط  کامپوننت  {' '} <code>FormControl</code> و فرزندان آن که از{' '}<code>FormControl</code> <code>Variant</code> به ارث رسیده استفاده می شود
        </li>
        <li>
          <code>value.onBlur</code> (<em>func</em>): زمانی که اینپوت blurr است باید فراخوانی شود
        </li>
        <li>
          <code>value.onFocus</code> (<em>func</em>):هنگامی که روی اینپوت فوکس شده است، باید فراخوانی شود
        </li>
        <li>
          <code>value.onEmpty</code> (<em>func</em>): هنگامی که اینپوت خالی می شود، باید فراخوانی شود
        </li>
        <li>
          <code>value.onFilled</code> (<em>func</em>): زمانی که اینپوت پر شد باید فراخوانی شود
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <strong>مثال</strong>
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseFormControl.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/UseFormControl.js').default}
          raw={require('!raw-loader!../components/text-fields/UseFormControl.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کوچک شدن
      </Typography>
      <Typography className="mb-40" component="div">
      استیت لیبل اینپوت "shrink" همیشه درست نیست.. لیبل اینپوت قرار است به محض اینکه اینپوت چیزی را نشان می دهد کوچک شود. در برخی شرایط، ما نمی توانیم "کوچک شدن" را تعیین کنیم. استیت (اینپوت عدد، اینپوت تاریخ، اینپوت نوار). ممکن است متوجه همپوشانی شوید.
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
       <img src="/material-ui-static/images/text-fields/shrink.png" alt="shrink" />
      </Typography>
      <Typography className="mb-40" component="div">
      برای حل این مشکل، می توانید استیت "shrink" لیبل را فورس کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField InputLabelProps={{ shrink: true }} />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        یا
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel shrink>Count</InputLabel>
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       لیبل شناور
      </Typography>
      <Typography className="mb-40" component="div">
        لیبل شناور دارای پوزیشن absolute میباشد.بر روی طرح بندی صفحه تاثیر نمی گذارد. مطمئن شوید که اینپوت بزرگتر از لیبل است تا به درستی نمایش داده شود.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        type=&quot;number&quot;
      </Typography>
      <Typography className="mb-40" component="div">
      ورودی های type="number" دارای مشکلات بالقوه قابلیت استفاده هستند:
      </Typography>
      <ul>
        <li>
        مجاز کردن نویسه‌های غیر عددی خاص ('e'، '+'، '-'، '.') و کنار گذاشتن بی‌صدا سایر کاراکترها
        </li>
        <li>
        عملکرد اسکرول به افزایش/کاهش تعداد می تواند باعث تغییرات تصادفی و به سختی قابل توجه شود.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
       و بیشتر - {' '}
        <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">
         این مقاله
        </a>{' '}
        توسط تیم سیستم طراحی GOV.UK برای توضیح دقیق تر. را ببینید
      </Typography>
      <Typography className="mb-40" component="div">
      برای اعتبار سنجی اعداد، یکی از گزینه های قابل اجرا استفاده از ورودی پیش فرض type="text" با ویژگی الگو است، به عنوان مثال:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      در آینده، ممکن است یک{' '} <a href="https://github.com/mui/material-ui/issues/19154">کامپوننت اینپوت شماره</a> ارائه دهیم.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       متن کمکی
      </Typography>
      <Typography className="mb-40" component="div">
      متن کمکی بر ارتفاع فیلد متن تأثیر می گذارد. اگر دو فیلد متنی در کنار هم قرار گیرند، یکی با متن کمکی و دیگری بدون، ارتفاع متفاوتی خواهند داشت. مثلا:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HelperTextMisaligned.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/HelperTextMisaligned.js').default}
          raw={require('!raw-loader!../components/text-fields/HelperTextMisaligned.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      این را می توان با ارسال یک کاراکتر فاصله به پراپ <code>helperText</code> برطرف کرد:

      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HelperTextAligned.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/HelperTextAligned.js').default}
          raw={require('!raw-loader!../components/text-fields/HelperTextAligned.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      ادغام با کتابخانه های اینپوت شخص ثالث
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از کتابخانه های شخص ثالث برای قالب بندی اینپوت استفاده کنید. شما باید یک پیاده سازی سفارشی از المنت <code>{`<input>`}</code> با ویژگی <code>inputComponent</code>{' '} ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
       دموی زیر از کتابخانه های  <a href="https://github.com/uNmAnNeR/imaskjs">react-imask</a>{' '}
        و <a href="https://github.com/s-yadav/react-number-format">react-number-format</a>{' '}
        استفاده می کند. همین مفهوم را می توان در مورد{' '}
        <a href="https://github.com/mui/material-ui/issues/16037">e.g. react-stripe-element</a> به کار برد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormattedInputs.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/FormattedInputs.js').default}
          raw={require('!raw-loader!../components/text-fields/FormattedInputs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت اینپون ارائه شده باید یک ref با مقداری را نشان دهد که رابط زیر را پیاده سازی می کند:
      </Typography>

      <FuseHighlight component="pre" className="language-ts">
        {` 
interface InputElement {
  focus(): void;
  value?: string;
}
`}
      </FuseHighlight>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const MyInputComponent = React.forwardRef((props, ref) => {
  const { component: Component, ...other } = props;

  // implement \`InputElement\` interface
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      // منطق فوکس کامپوننت رندر شده از شخص ثالث به اینجا تعلق دارد
    },
    // hiding the value e.g. react-stripe-elements
  }));

  // \`Component\` از زیر \`SomeThirdPartyComponent\` شما خواهد بود
  return <Component {...other} />;
});

// usage
<TextField
  InputProps={{
    inputComponent: MyInputComponent,
    inputProps: {
      component: SomeThirdPartyComponent,
    },
  
/>;
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      برای اینکه فیلد متن قابل دسترسی باشد،{' '} <strong>اینپوت باید به لیبل و متن کمکی پیوند داده شود</strong>.گره های DOM زیرین باید این ساختار را داشته باشند:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<div className="form-control">
  <label for="my-input">آدرس ایمیل</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">ما هرگز ایمیل شما را به اشتراک نمی گذاریم.</span>
</div>
`}
      </FuseHighlight>
      <ul>
        <li>
        اگر از کامپوننت <code>TextField</code> استفاده می کنید، فقط باید یک{' '} <code>id</code> منحصر به فرد ارائه دهید، مگر اینکه فقط از سمت کلاینت <code>TextField</code> استفاده کنید. . تا زمانی که رابط کاربری هیدراته نشود <code>TextField</code> بدون <code>id</code> صریح، برچسب‌های مرتبطی نخواهد داشت.
        </li>
        <li>اگر کامپوننت را می سازید:</li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<FormControl>
  <InputLabel htmlFor="my-input">آدرس ایمیل</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">ما هرگز ایمیل شما را به اشتراک نمی گذاریم.</FormHelperText>
</FormControl>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <ul>
        <li>
          <a href="https://react-hook-form.com/">react-hook-form</a>: React hook برای اعتبار سنجی فرم.
        </li>
        <li>
          <a href="https://github.com/dohomi/react-hook-form-mui">react-hook-form-mui</a>: MUI و React-hook-form ترکیب شده اند.
        </li>
        <li>
          <a href="https://github.com/stackworx/formik-mui">formik-material-ui</a>: پابند برای استفاده از MUI با <a href="https://formik.org/">formik</a>.
        </li>
        <li>
          <a href="https://github.com/erikras/redux-form-material-ui">redux-form-material-ui</a>:
          پابند برای استفاده از MUI با <a href="https://redux-form.com/">فرم Redux</a>.
        </li>
        <li>
          <a href="https://github.com/lookfirst/mui-rff">mui-rff</a>: 
          
          پابند برای استفاده از MUI با{' '} <a href="https://final-form.org/react">فرم  React Final</a>.
     
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@ui-schema/ds-material">@ui-schema/ds-material</a>{' '}
          پابند برای استفاده از  Material UI  با{' '}<a href="https://github.com/ui-schema/ui-schema">Schema UI</a>.
          
          JSON Schema سازگار است.
        </li>
        <li>
          <a href="https://www.data-driven-forms.org/provided-mappers/mui-component-mapper">
            @data-driven-forms/mui-component-mapper
          </a>
          :پابند برای استفاده Material UI با{' '}
          <a href="https://github.com/data-driven-forms/react-forms">Data Driven Forms</a>.
        </li>
      </ul>
    </>
  );
}

export default TextFieldsDoc;
