import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TooltipsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tooltips"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        تولتیپ(Tooltip)
      </Typography>
      <Typography className="description">
      هنگامی که کاربران ماوس را روی یک المنت می‌برند، روی آن تمرکز می‌کنند یا روی آن ضربه می‌زنند، تولتیپ متن حاوی اطلاعات آن را نمایش می‌دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      هنگامی که تولتیپ فعال می شود، لیبل متنی را نشان می دهد که یک المنت را شناسایی می کند، مانند شرح عملکرد آن.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     تولتیپ پایه و ساده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTooltip.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/BasicTooltip.js').default}
          raw={require('!raw-loader!../components/tooltips/BasicTooltip.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       تولتیپ پوزیشن دار
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Tooltip</code> دارای 12 انتخاب <strong>مکان</strong> است.
      آنها فلش جهت دار ندارند. در عوض، آنها برای انتقال جهت به حرکتی که از منبع سرچشمه می‌گیرد تکیه می‌کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/PositionedTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/PositionedTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در <a href="/material-ui/customization/how-to-customize/">صفحه اسناد override</a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/CustomizedTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/CustomizedTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       تولتیپ های فلش دار
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پراپ <code>arrow</code> استفاده کنید تا به  تولتیپ خود فلشی بدهید که نشان می‌دهد به کدام المنت اشاره دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ArrowTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/ArrowTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/ArrowTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      المنت فرزند سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      تولتیپ  باید ایونت لیسنر(Event Listener) DOM را در المنت فرزند خود اعمال کند.. اگر فرزند یک المنت  React سفارشی است، باید مطمئن شوید که پراپس های خود را به المنت  DOM زیرین گسترش می‌دهد.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  پراپس ها را در المنت DOM زیرین پخش کنید.
  return (
    <div {...props} ref={ref}>
      Bin
    </div>
  );
});

// ...

<Tooltip title="Delete">
  <MyComponent />
</Tooltip>;
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      می‌توانید مفهوم مشابهی را در راهنمای{' '} <a href="/material-ui/guides/composition/#wrapping-components"> wrapping components </a>{' '} بیابید.
      </Typography>
      <Typography className="mb-40" component="div">
      اگراز کلاس کامپوننت به عنوان فرزند  استفاده می‌کنید، باید اطمینان حاصل کنید که ref به المنت DOM زیرین ارسال می‌شود. (ارجاع  ref به خود کلاس کامپوننت  کار نخواهد کرد.)
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
class MyComponent extends React.Component {
  render() {
    const { innerRef, ...props } = this.props;
    //   پراپس ها را در المنت DOM زیرین پخش کنید.
    return (
      <div {...props} ref={innerRef}>
        Bin
      </div>
    );
  }
}

// همانطور که از Tooltip انتظار می رود، MyComponent را wrao کنید تا ref را ارسال کنید
const WrappedMyComponent = React.forwardRef(function WrappedMyComponent(props, ref) {
  return <MyComponent {...props} innerRef={ref} />;
});

// ...

<Tooltip title="Delete">
  <WrappedMyComponent />
</Tooltip>;
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محرک ها (Triggers)
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید انواع رویدادهایی را که باعث نمایش  تولتیپ می‌شوند، تعریف کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      عمل لمسی به فشار طولانی نیاز دارد زیرا پراپس enterTouchDelay به طور پیش فرض روی 700 میلی ثانیه تنظیم شده است
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TriggersTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/TriggersTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/TriggersTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     تولتیپ های کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل رفتار تولتیپ می‌توانید از پراپس های <code>open</code>، <code>onOpen</code> و <code>onClose</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/ControlledTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/ControlledTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      عرض متغیر
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Tooltip</code> به طور پیش‌فرض متن طولانی را می‌پیچد تا قابل خواندن باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariableWidth.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/VariableWidth.js').default}
          raw={require('!raw-loader!../components/tooltips/VariableWidth.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     تعاملی بودن (Interactive)
      </Typography>
      <Typography className="mb-40" component="div">
      تولتیپ ها به‌طور پیش‌فرض تعاملی هستند (برای گذراندن{' '} <a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">معیار موفقیت WCAG 2.1 1.4.13 </a> ).تولتیپ تا زمانی که کاربر موس  را روی آن قبل از منقضی شدن{' '}<code>leaveDelay</code> نگه می‌دارد، بسته نمی‌شود..
      می‌توانید این رفتار را با پاس کردن <code>disableInteractive</code> غیرفعال کنید.(بنابراین معیار موفقیتی که برای رسیدن به سطح AA لازم است شکست می خورد)
  
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NonInteractiveTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/NonInteractiveTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/NonInteractiveTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      المنت های    غیر فعال
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش‌فرض المنت های غیرفعال شده مانند <code>{`<button>`}</code> تعاملات کاربر را فعال نمی‌کنند، بنابراین یک Tooltip در رویدادهای عادی مانند هاور فعال نمی‌شود.
      برای قرار دادن المنت های غیرفعال، یک المنت پوشش ساده، مانند <code>span</code> اضافه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      :::هشدار برای کار با سافاری، حداقل به یک آیتم دیسپلی بلاک (display:block;)و یا دیسپلی فلکس (display:flex;) در زیر باکس تولتیپ نیاز دارید. :::
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/DisabledTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/DisabledTooltips.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div"
      >
        :::هشدار  اگر یک کامپوننت MUI را که از  <code>ButtonBase</code> به ارث برده است را  wrap نمی کنید،
      برای مثال یک المنت بومی <code>{`<button>`}</code>, همچنین باید ویژگی سی اس اس  <em>pointer-events: none;</em> را در صورت غیرفعال شدن به المنت خود اضافه کنید: :::
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Tooltip title="شما اجازه این کار را ندارید">
  <span>
    <button disabled={disabled} style={disabled ? { pointerEvents: 'none' } : {}}>
     دکمه غیر فعال
    </button>
  </span>
</Tooltip>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ترنزیشن ها
      </Typography>
      <Typography className="mb-40" component="div">
     از ترنزیشن متفاوت استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/TransitionsTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/TransitionsTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       دنبال کننده مکان نما (Follow Cursor)
      </Typography>
      <Typography className="mb-40" component="div">
      با تنظیم{' '} می‌توانید تولتیپ  را برای دنبال کردن مکان‌نما فعال کنید
        <code>{`followCursor={true}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FollowCursorTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/FollowCursorTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/FollowCursorTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      المنت مجازی
      </Typography>
      <Typography className="mb-40" component="div">
      در صورتی که نیاز به پیاده‌سازی یک مکان سفارشی دارید، می‌توانید از پراپس <code>anchorEl</code> استفاده کنید: مقدار پراپس <code>anchorEl</code> می‌تواند ارجاع به عنصر DOM جعلی باشد.
       شما باید یک آبجکت شبیه {' '}
        <a href="https://popper.js.org/docs/v2/virtual-elements/">
          <code>VirtualElement</code>
        </a>
       ایجاد نمایید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AnchorElTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/AnchorElTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/AnchorElTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نشان دادن و پنهان کردن
      </Typography>
      <Typography className="mb-40" component="div">
      معمولاً وقتی ماوس کاربر روی المنت قرار می‌گیرد، تولتیپ بلافاصله نشان داده می‌شود و وقتی ماوس کاربر را ترک می‌کند، بلافاصله پنهان می‌شود. تأخیر در نمایش یا پنهان کردن تولتیپ را می‌توان از طریقپراپس های <code>enterDelay</code> و <code>leaveDelay</code> اضافه کرد، همانطور که در نسخه نمایشی تولتیپ های کنترل‌شده در بالا نشان داده شده است.
      </Typography>
      <Typography className="mb-40" component="div">
      در تلفن همراه، وقتی کاربر عنصر را طولانی فشار می‌دهد و پس از 1500 میلی‌ثانیه تاخیر پنهان می‌شود،تولتیپ  نمایش داده می‌شود. می توانید این ویژگی را با پراپس <code>disableTouchListener</code>{' '} غیرفعال کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DelayTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/DelayTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/DelayTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/">
          https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، تولتیپ  فقط المنت فرزند خود را لیبل گذاری می کند. این به طور قابل‌توجهی با{' '} <code>title</code> متفاوت است که می‌تواند بسته به اینکه آیا فرزند قبلاً برچسبی داشته یا نه، <strong>یا</strong> فرزند خود را توصیف کند. برای مثال در :
      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {` 
<button title="اندکی اطلاعات بیشتر"> 
دکمه
</button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      <code>Title</code> به عنوان یک توضیح قابل دسترسی عمل می کند. اگر می‌خواهید تولتیپ به‌عنوان یک توضیح قابل دسترس عمل کند، می‌توانید <code>describeChild</code> را ارسال کنید. توجه داشته باشید که اگرتولتیپ  تنها لیبل تصویری را ارائه می‌کند، نباید از <code>describeChild</code> استفاده کنید.
      در غیر این صورت، فرزند ، نام قابل دسترسی نخواهد داشت و تولتیپ، معیار موفقیت{' '} <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"> را نقض می کند. 2.5.3 در WCAG 2.1
</a>
         .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibilityTooltips.js"
          className="my-24"
          iframe={false}
          component={require('../components/tooltips/AccessibilityTooltips.js').default}
          raw={require('!raw-loader!../components/tooltips/AccessibilityTooltips.js')}
        />
      </Typography>
    </>
  );
}

export default TooltipsDoc;
