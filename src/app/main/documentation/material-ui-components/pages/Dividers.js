import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DividersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/dividers"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        تقسیم کننده ها
      </Typography>
      <Typography className="description">
      تقسیم‌کننده خط باریکی است که محتوا را در فهرست‌ها و طرح‌بندی‌ها گروه‌بندی می‌کند.
      </Typography>

      <Typography className="mb-40" component="div">
      تقسیم‌کننده‌ها محتوا را به گروه‌های واضح جدا می‌کنند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تقسیم کننده های لیست
      </Typography>
      <Typography className="mb-40" component="div">
      تقسیم کننده به طور پیش فرض به صورت <code>{`<hr>`}</code> ارائه می شود. می توانید با استفاده از پراپ <code>divider</code> در کامپوننت <code>ListItem</code> رندر این المنت DOM را ذخیره کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ListDividers.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/ListDividers.js').default}
          raw={require('!raw-loader!../components/dividers/ListDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مشخصات HTML5
      </Typography>
      <Typography className="mb-40" component="div">
      در یک لیست، باید مطمئن شوید که <code>Divider</code> به صورت <code>{`<li>`}</code> برای مطابقت با مشخصات HTML5 ارائه شده است. مثال های زیر دو راه برای دستیابی به این هدف را نشان می دهد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تقسیم کننده های داخلی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InsetDividers.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/InsetDividers.js').default}
          raw={require('!raw-loader!../components/dividers/InsetDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تقسیم کننده های سرفصل
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SubheaderDividers.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/SubheaderDividers.js').default}
          raw={require('!raw-loader!../components/dividers/SubheaderDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تقسیم کننده وسط
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MiddleDividers.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/MiddleDividers.js').default}
          raw={require('!raw-loader!../components/dividers/MiddleDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تقسیم کننده با متن
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می توانید یک تقسیم کننده را با محتوا ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DividerText.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/DividerText.js').default}
          raw={require('!raw-loader!../components/dividers/DividerText.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار هنگامی که از مولفه تقسیم کننده برای تزئین بصری استفاده می کند، مانند یک عنوان، به صراحت <code>{`role="presentation"`}</code>  را برای تقسیم کننده مشخص کنید تا مطمئن شوید صفحه خوان ها می توانند محتوای آن را اعلام کنند.
      
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
<Divider component="div" role="presentation">
  {/*
  هر  عنصر تودرتو در داخلrole="presentation" معنایی خود را حفظ می کند.

  <Typography variant="h2">My Heading</Typography>
</Divider>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     تقسیم‌کننده عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید با استفاده از پراپ <code>orientation</code> یک تقسیم‌کننده را به صورت عمودی رندر کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalDividers.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/VerticalDividers.js').default}
          raw={require('!raw-loader!../components/dividers/VerticalDividers.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::نکته به استفاده از پراپ <code>flexItem</code> برای قرار دادن فلکس کانتینر توجه کنید. :::
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      عمودی با وسط متغیر
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید یک تقسیم‌کننده عمودی را با <code>{`variant="middle"`}</code> رندر کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalDividerMiddle.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/VerticalDividerMiddle.js').default}
          raw={require('!raw-loader!../components/dividers/VerticalDividerMiddle.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      عمودی با متن
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می توانید یک تقسیم کننده عمودی را با محتوا ارائه دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalDividerText.js"
          className="my-24"
          iframe={false}
          component={require('../components/dividers/VerticalDividerText.js').default}
          raw={require('!raw-loader!../components/dividers/VerticalDividerText.js')}
        />
      </Typography>
    </>
  );
}

export default DividersDoc;
