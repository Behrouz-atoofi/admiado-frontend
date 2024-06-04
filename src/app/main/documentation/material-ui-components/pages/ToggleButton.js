import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ToggleButtonDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/toggle-button"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
    دکمه سوئیچ (Toggle Button)
      </Typography>
      <Typography className="description">
      برای گروه بندی گزینه های مرتبط می توان از دکمه سوئیچ استفاده کرد.
      </Typography>

      <Typography className="mb-40" component="div">
      برای تأکید بر گروه‌های دکمه‌های Toggle مرتبط، هر گروه باید در یک کانتینر مشترک قرار بگیرد.{' '} <code>ToggleButtonGroup</code> استیت انتخابی دکمه‌های فرزند خود را هنگامی که پراپ<code>value</code> خود داده می‌شود، کنترل می‌کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      انتخاب انحصاری
      </Typography>
      <Typography className="mb-40" component="div">
      با انتخاب انحصاری، انتخاب یک گزینه هر گزینه دیگری را از حالت انتخاب خارج می کند.
      </Typography>
      <Typography className="mb-40" component="div">
      در این مثال، دکمه‌های سوئیچ text justify، گزینه‌هایی را برای متن چپ، مرکز، راست و کاملاً توجیه‌شده (غیرفعال) ارائه می‌کنند که هر بار تنها یک مورد برای انتخاب در دسترس است.
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>نکته</strong>: انتخاب انحصاری باعث نمی شود که یک دکمه باید حتما فعال باشد. برای این اثر به <a href="#enforce-value-set"> enforce value set</a> مراجعه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/ToggleButtons.js').default}
          raw={require('!raw-loader!../components/toggle-button/ToggleButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      انتخاب چندگانه
      </Typography>
      <Typography className="mb-40" component="div">
      انتخاب چندگانه به گزینه‌های گروه‌بندی منطقی مانند bold، italics و underline اجازه می‌دهد تا چندین گزینه انتخاب شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtonsMultiple.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/ToggleButtonsMultiple.js').default}
          raw={require('!raw-loader!../components/toggle-button/ToggleButtonsMultiple.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      برای دکمه های بزرگتر یا کوچکتر، از پراپس  <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtonSizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/ToggleButtonSizes.js').default}
          raw={require('!raw-loader!../components/toggle-button/ToggleButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorToggleButton.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/ColorToggleButton.js').default}
          raw={require('!raw-loader!../components/toggle-button/ColorToggleButton.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه های عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌ها را می‌توان به صورت عمودی با پراپ <code>orientation</code> روی &quot;عمودی&quot; تنظیم کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalToggleButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/VerticalToggleButtons.js').default}
          raw={require('!raw-loader!../components/toggle-button/VerticalToggleButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Enforce value set
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می‌خواهید تنظیم مقدار را اعمال کنید، حداقل یک دکمه باید فعال باشد، می‌توانید تابع handleChange خود را تطبیق دهید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};

const handleDevices = (event, newDevices) => {
  if (newDevices.length) {
    setDevices(newDevices);
  }
};
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ToggleButtonNotEmpty.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/ToggleButtonNotEmpty.js').default}
          raw={require('!raw-loader!../components/toggle-button/ToggleButtonNotEmpty.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه سوئیچ مستقل
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StandaloneToggleButton.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/StandaloneToggleButton.js').default}
          raw={require('!raw-loader!../components/toggle-button/StandaloneToggleButton.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا مثالی از سفارشی سازی کامپوننت آورده شده است. شما میتوانید  در این باره اطلاعات بیشتری را در {' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>{' '} کسب کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedDividers.js"
          className="my-24"
          iframe={false}
          component={require('../components/toggle-button/CustomizedDividers.js').default}
          raw={require('!raw-loader!../components/toggle-button/CustomizedDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <ul>
        <li>
          ToggleButtonGroup دارای <code>{`role="group"`}</code> میباشد. شما باید یک برچسب دسترس پذیر با  <code>{`aria-label="label"`}</code>, <code>{`aria-labelledby="id"`}</code> یا{' '}
          <code>{`<label>`}</code> ارائه دهید.
        </li>
        <li>
        ToggleButton <code>{`aria-pressed="<bool>"`}</code> را با توجه به وضعیت دکمه تنظیم می کند. شما باید هر دکمه را با <code>aria-label</code> لیبل بزنید.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        کیبورد
      </Typography>
      <Typography className="mb-40" component="div">
      در حال حاضر، دکمه های سوئیچ به ترتیب DOM هستند. با کلید تب بین آنها حرکت کنید. رفتار دکمه از معنای استاندارد صفحه کلید پیروی می کند.
      </Typography>
    </>
  );
}

export default ToggleButtonDoc;
