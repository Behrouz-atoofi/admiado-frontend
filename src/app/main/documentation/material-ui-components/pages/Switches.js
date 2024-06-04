import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SwitchesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/switches"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        سوئیج (Switch)
      </Typography>
      <Typography className="description">
      سوئیچ ها وضعیت یک استیت را روشن یا خاموش می کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      سوئیچ ها روش ترجیحی برای تنظیم تنظیمات در تلفن همراه هستند. گزینه ای که سوئیچ کنترل می کند، و همچنین استیتی که در آن قرار دارد، باید از لیبل درون خطی مربوطه مشخص شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سوئیچ های اصلی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSwitches.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/BasicSwitches.js').default}
          raw={require('!raw-loader!../components/switches/BasicSwitches.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        برچسب
      </Typography>
      <Typography className="mb-40" component="div">
      به لطف کامپوننت <code>FormControlLabel</code> می‌توانید یک لیبل برای <code>سوئیچ</code> ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchLabels.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/SwitchLabels.js').default}
          raw={require('!raw-loader!../components/switches/SwitchLabels.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      برای تغییر اندازه سوئیچ از پراپس <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchesSize.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/SwitchesSize.js').default}
          raw={require('!raw-loader!../components/switches/SwitchesSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorSwitches.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/ColorSwitches.js').default}
          raw={require('!raw-loader!../components/switches/ColorSwitches.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        کنترل  شده
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید سوئیچ را با پراپس های <code> checked</code> و <code>onChange</code> کنترل کنید:
   
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledSwitches.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/ControlledSwitches.js').default}
          raw={require('!raw-loader!../components/switches/ControlledSwitches.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     سوئیچ با FormGroup
      </Typography>
      <Typography className="mb-40" component="div">
      <code>FormGroup</code> یک بسته بندی مفید است که برای گروه بندی اجزای کنترل انتخاب استفاده می شود که API آسان تری را ارائه می دهد..
   با این حال، اگر چندین کنترل مرتبط مورد نیاز باشد ، توصیه میشود از  <a href="/material-ui/react-checkbox/">Checkboxes</a> به جای آن استفاده کنید.
   (به: <a href="#when-to-use">زمان استفاده</a> مراجعه کنید).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchesGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/SwitchesGroup.js').default}
          raw={require('!raw-loader!../components/switches/SwitchesGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در{' '} <a href="/material-ui/customization/how-to-customize/">صفحه اسناد override</a> در مورد این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSwitches.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/CustomizedSwitches.js').default}
          raw={require('!raw-loader!../components/switches/CustomizedSwitches.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      🎨 اگر به دنبال الهام هستید، می‌توانید{' '} <a href="https://mui-treasury.com/styles/switch/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید
         .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     جایگذاری لیبل
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید محل قرارگیری لیبل را تغییر دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormControlLabelPosition.js"
          className="my-24"
          iframe={false}
          component={require('../components/switches/FormControlLabelPosition.js').default}
          raw={require('!raw-loader!../components/switches/FormControlLabelPosition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       زمان استفاده
      </Typography>
      <ul>
        <li>
          <a href="https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8">
           چک باکس در مقابل سوئیچ
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <ul>
        <li>
        المنتی با نقش <code>checkbox</code> و نه نقش <code>switch</code> ارائه می‌کند زیرا این نقش هنوز به طور گسترده پشتیبانی نمی‌شود..لطفاً ابتدا تست کنید که آیا فناوری کمکی مخاطبان هدف شما از این نقش به درستی پشتیبانی می کند یا خیر. سپس می‌توانید نقش را با <code>{`<Switch inputProps={{ role: 'switch' }}>`}</code> تغییر دهید
        </li>
        <li>
        همه کنترل‌های فرم باید دارای لیبل باشند، و این شامل دکمه‌های رادیویی، چک باکس‌ها و سوئیچ‌ها می‌شود. در بیشتر موارد، این کار با استفاده از المنت<code>{`<label>`}</code> ( <a href="/material-ui/api/form-control-label/">FormControlLabel</a> انجام می‌شود ).
        </li>
        <li>
        هنگامی که نمی توان از یک لیبل استفاده کرد، لازم است یک ویژگی مستقیماً به کامپوننت ورودی اضافه شود..
        در این مورد،میتوانید از اتریبیوت های اضافی (برای مقال   <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code> )  از طریق پراپ  <code>inputProps</code> استفاده کنید. 
        
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Switch value="checkedA" inputProps={{ 'aria-label': 'سوئیچ الف' }} />
`}
      </FuseHighlight>
    </>
  );
}

export default SwitchesDoc;
