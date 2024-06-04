import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function RadioButtonsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/radio-buttons"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
       گروه رادیویی
      </Typography>
      <Typography className="description">
      گروه رادیویی به کاربر این امکان را می دهد که یک گزینه را از یک مجموعه انتخاب کند.
      </Typography>

      <Typography className="mb-40" component="div">
      زمانی که کاربر نیاز دارد همه گزینه های موجود را ببیند از دکمه های رادیویی استفاده کنید. اگر گزینه‌های موجود را می‌توان جمع کرد، از <a href="/material-ui/react-select/">انتخاب جزء</a>{' '} استفاده کنید زیرا فضای کمتری مصرف می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه های رادیویی باید به طور پیش فرض دارای پرکاربردترین گزینه باشند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه رادیویی
      </Typography>
      <Typography className="mb-40" component="div">
      <code>RadioGroup</code> یک بسته بندی مفید است که برای گروه بندی کامپوننت های <code>رادیو</code> استفاده می شود که یک API آسان تر و دسترسی مناسب صفحه کلید را برای گروه فراهم می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/RadioButtonsGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/RadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        جهت
      </Typography>
      <Typography className="mb-40" component="div">
      برای چیدمان افقی دکمه ها، prop <code>row</code> را تنظیم کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RowRadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/RowRadioButtonsGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/RowRadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید رادیو را با پراپس های <code>value</code> و <code>onChange</code> کنترل کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledRadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/ControlledRadioButtonsGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/ControlledRadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه های رادیویی مستقل
      </Typography>
      <Typography className="mb-40" component="div">
      <code>رادیو</code> را نیز می توان به صورت مستقل، بدون پوشش RadioGroup استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/RadioButtons.js').default}
          raw={require('!raw-loader!../components/radio-buttons/RadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      از پراپ <code>size</code> استفاده کنید یا اندازه فونت آیکون های svg را برای تغییر اندازه رادیوها سفارشی کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeRadioButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/SizeRadioButtons.js').default}
          raw={require('!raw-loader!../components/radio-buttons/SizeRadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorRadioButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/ColorRadioButtons.js').default}
          raw={require('!raw-loader!../components/radio-buttons/ColorRadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       محل قرار گیری لیبل
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید محل قرارگیری برچسب را با پراپ <code>FormControlLabel</code>{' '} کامپوننت <code>labelPlacement</code> تغییر دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormControlLabelPlacement.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/FormControlLabelPlacement.js').default}
          raw={require('!raw-loader!../components/radio-buttons/FormControlLabelPlacement.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     نمایش خطا
      </Typography>
      <Typography className="mb-40" component="div">
      به طور کلی، دکمه های رادیویی باید دارای یک مقدار انتخاب شده به طور پیش فرض باشند. اگر اینطور نیست، اگر هنگام ارسال فرم هیچ مقداری انتخاب نشده باشد، می توانید یک خطا نمایش دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ErrorRadios.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/ErrorRadios.js').default}
          raw={require('!raw-loader!../components/radio-buttons/ErrorRadios.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/">صفحه اسناد overrides </a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedRadios.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/CustomizedRadios.js').default}
          raw={require('!raw-loader!../components/radio-buttons/CustomizedRadios.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>هوک useRadioGroup</code>
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده سفارشی سازی پیشرفته، یک هوک <code>useRadioGroup()</code> در معرض دید قرار می گیرد. مقدار متن گروه رادیویی والد را برمی گرداند. کامپوننت رادیو از این هوک به صورت داخلی استفاده می کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        API
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { useRadioGroup } from '@mui/material/RadioGroup';
`}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        برمیگرداند
      </Typography>
      <Typography className="mb-40" component="div">
        <code>مقدار</code> (<em>آبجکت</em>):
      </Typography>
      <ul>
        <li>
        <code>value.name</code> (<em>رشته</em> [اختیاری]): نامی که برای ارجاع به مقدار کنترل استفاده می شود.
        </li>
        <li>
        <code>value.onChange</code> (<em>func</em> [اختیاری]): هنگامی که یک دکمه رادیویی انتخاب می شود،  کالبگ  انجام می شود.
        </li>
        <li>
        <code>value.value</code> (<em>any</em> [اختیاری]): مقدار دکمه رادیویی انتخاب شده.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        مثال
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseRadioGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/UseRadioGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/UseRadioGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چه موقع باید استفاده کرد
      </Typography>
      <ul>
        <li>
          <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/">
          چک باکس ها در مقابل دکمه های رادیویی
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/radio/">
          https://www.w3.org/WAI/ARIA/apg/patterns/radio/
        </a>
        )
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
          همه کنترل‌های فرم باید دارای برچسب باشند، و این شامل دکمه‌های رادیویی، چک باکس‌ها و سوئیچ‌ها می‌شود. در بیشتر موارد، این کار با استفاده از المنت <code>{`<label>`}</code> ( <a href="/material-ui/api/form-control-label/">FormControlLabel</a> انجام می‌شود ).
          </Typography>
        </li>
        <li>
          <Typography className="mb-40" component="div">
          زمانی که نمی توان از یک برچسب استفاده کرد، لازم است یک ویژگی مستقیماً به کامپوننت اینپوت اضافه شود. در این مورد، می توانید ویژگی اضافی (به عنوان مثال aria-label، aria-labelledby، title) را از طریق ویژگی inputProps اعمال کنید.
          </Typography>
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Radio
  value="radioA"
  inputProps={{
    'aria-label': 'Radio A',
  
/>
`}
      </FuseHighlight>
    </>
  );
}

export default RadioButtonsDoc;
