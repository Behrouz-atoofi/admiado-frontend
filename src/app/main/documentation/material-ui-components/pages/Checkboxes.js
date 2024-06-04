import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function CheckboxesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/checkboxes"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        چک باکس
      </Typography>
      <Typography className="description">
      چک باکس ها به کاربر این امکان را می دهند که یک یا چند مورد را از یک مجموعه انتخاب کند.
      </Typography>

      <Typography className="mb-40" component="div">
      از چک باکس ها می توان برای روشن یا خاموش کردن یک گزینه استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر چندین گزینه در یک لیست ظاهر می‌شوند، می‌توانید با استفاده از کادرهای انتخاب به جای کلیدهای روشن/خاموش، فضا را حفظ کنید. اگر یک گزینه دارید، از استفاده از چک باکس خودداری کنید و به جای آن از کلید روشن/خاموش استفاده کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چک باکس های اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Checkboxes.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/Checkboxes.js').default}
          raw={require('!raw-loader!../components/checkboxes/Checkboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        لیبل
      </Typography>
      <Typography className="mb-40" component="div">
      به لطف کامپوننت{' '} <code>FormControlLabel</code> می‌توانید یک لیبل به <code>Checkbox</code> ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxLabels.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/CheckboxLabels.js').default}
          raw={require('!raw-loader!../components/checkboxes/CheckboxLabels.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      برای تغییر اندازه چک باکس ها، از پراپ <code>size</code> استفاده کنید یا فونت سایز آیکون های svg را سفارشی کنید..
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeCheckboxes.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/SizeCheckboxes.js').default}
          raw={require('!raw-loader!../components/checkboxes/SizeCheckboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorCheckboxes.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/ColorCheckboxes.js').default}
          raw={require('!raw-loader!../components/checkboxes/ColorCheckboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        آیکون
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconCheckboxes.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/IconCheckboxes.js').default}
          raw={require('!raw-loader!../components/checkboxes/IconCheckboxes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        کنترل  شده
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید چک باکس را با پراپس های <code>checked</code> و <code>onChange</code> کنترل کنید:

      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledCheckbox.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/ControlledCheckbox.js').default}
          raw={require('!raw-loader!../components/checkboxes/ControlledCheckbox.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نامشخص
      </Typography>
      <Typography className="mb-40" component="div">
      یک ورودی چک باکس فقط می‌تواند دو حالت در یک فرم داشته باشد: علامت زده یا بدون علامت.یا ارزش خود را ارائه می دهد یا نمی کند. از نظر بصری، <strong>سه</strong> حالتی وجود دارد که یک چک باکس می‌تواند در آن باشد: علامت‌دار، بدون علامت، یا نامشخص.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IndeterminateCheckbox.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/IndeterminateCheckbox.js').default}
          raw={require('!raw-loader!../components/checkboxes/IndeterminateCheckbox.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار  که نامشخص تنظیم می شود، مقدار پراپ <code>checked</code> فقط بر مقادیر فرم ارسال شده تأثیر می گذارد. هیچ پیامد دسترسی یا UX ندارد. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        FormGroup
      </Typography>
      <Typography className="mb-40" component="div">
        <code>FormGroup</code> یک بسته بندی مفید است که برای گروه بندی اجزای کنترل انتخاب استفاده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxesGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/CheckboxesGroup.js').default}
          raw={require('!raw-loader!../components/checkboxes/CheckboxesGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      قرار دادن لیبل
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید محل قرارگیری لیبل را تغییر دهید:
       </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormControlLabelPosition.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/FormControlLabelPosition.js').default}
          raw={require('!raw-loader!../components/checkboxes/FormControlLabelPosition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در{' '} <a href="/material-ui/customization/how-to-customize/">صفحه اسناد Override</a> در مورد این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedCheckbox.js"
          className="my-24"
          iframe={false}
          component={require('../components/checkboxes/CustomizedCheckbox.js').default}
          raw={require('!raw-loader!../components/checkboxes/CustomizedCheckbox.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨اگر به دنبال الهام هستید، می‌توانید <a href="https://mui-treasury.com/styles/checkbox/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید.
         .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       زمان استفاده
      </Typography>
      <ul>
        <li>
          <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/">
          چک باکس ها در مقابل دکمه های رادیویی
          </a>
        </li>
        <li>
          <a href="https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8">
          چک باکس ها در مقابل سوئیچ ها
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی ها
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/">
          https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
        </a>
        )
      </Typography>
      <ul>
        <li>
        همه کنترل‌های فرم باید دارای لیبل باشند، و این شامل دکمه‌های رادیویی، چک باکس‌ها و سوئیچ‌ها می‌شود. در بیشتر موارد، این کار با استفاده از عنصر <code>{`<label>`}</code> انجام می‌شود (<a href="/material-ui/api/form-control-label/">FormControlLabel</a >).
        </li>
        <li>
        هنگامی که نمی توان از یک لیبل استفاده کرد، لازم است یک ویژگی مستقیماً به کامپوننت ورودی اضافه شود. در این مورد، می‌توانید ویژگی اضافی (به عنوان مثال{' '} <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>) را از طریق{ ' '} پراپ <code>inputProps</code>.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Checkbox
  value="checkedA"
  inputProps={{
    'aria-label': 'Checkbox A',
  
/>
`}
      </FuseHighlight>
    </>
  );
}

export default CheckboxesDoc;
