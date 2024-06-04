import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function StackDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/stack"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        استک(Stack)
      </Typography>
      <Typography className="description">
      کامپوننت Stack چیدمان فرزندان فوری را در امتداد محور عمودی یا افقی با فاصله اختیاری و/یا تقسیم‌کننده بین هر فرزند مدیریت می‌کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استفاده
      </Typography>
      <Typography className="mb-40" component="div">
      <code>Stack</code> مربوط به طرح‌بندی‌های یک‌بعدی است، در حالی که{' '}<a href="/material-ui/react-grid/">Grid</a> با طرح‌بندی‌های دو بعدی سروکار دارد. جهت پیش فرض <code>ستون</code> است که فرزندان را به صورت عمودی روی هم قرار می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicStack.js"
          className="my-24"
          iframe={false}
          component={require('../components/stack/BasicStack.js').default}
          raw={require('!raw-loader!../components/stack/BasicStack.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل فضای بین کودکان، از پراپ <code>spacing</code> استفاده کنید. مقدار فاصله می تواند هر عددی باشد، از جمله اعشار و هر رشته. پراپ با استفاده از <a href="/material-ui/customization/spacing/"> <code>theme.spacing()</code> </a> به یک ویژگی CSS تبدیل می‌شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جهت
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، <code>Stack</code> موارد را به صورت عمودی در یک <code>ستون</code> مرتب می کند..با این حال، پراپ <code>direction</code> را می توان برای قرار دادن موارد به صورت افقی در یک{' '} <code>ردیف</code> نیز استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DirectionStack.js"
          className="my-24"
          iframe={false}
          component={require('../components/stack/DirectionStack.js').default}
          raw={require('!raw-loader!../components/stack/DirectionStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تقسیم کننده ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای درج یک المنت بین هر فرزند از پایه <code>divider</code> استفاده کنید. این به ویژه با کامپوننت <a href="/material-ui/react-divider/">Divider</a> خوب کار می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DividerStack.js"
          className="my-24"
          iframe={false}
          component={require('../components/stack/DividerStack.js').default}
          raw={require('!raw-loader!../components/stack/DividerStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     مقدار های ریسپانسیو
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید مقادیر <code>جهت</code> یا <code>فاصله</code> را بر اساس نقطه شکست فعال تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveStack.js"
          className="my-24"
          iframe={false}
          component={require('../components/stack/ResponsiveStack.js').default}
          raw={require('!raw-loader!../components/stack/ResponsiveStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     تعاملی بودن
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر یک نسخه نمایشی تعاملی وجود دارد که به شما امکان می دهد نتایج بصری تنظیمات مختلف را بررسی کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InteractiveStack.js"
          className="my-24"
          iframe={false}
          component={require('../components/stack/InteractiveStack.js').default}
          raw={require('!raw-loader!../components/stack/InteractiveStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پراپس سیستم
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک کامپوننت ابزار CSS، <code>Stack</code> از همه ویژگی‌های <a href="/system/properties/"> <code>system</code> </a>{' '} پشتیبانی می‌کند. می توانید از آنها به عنوان پراپ مستقیماً روی کامپوننت استفاده کنید. به عنوان مثال یک margin-top:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Stack mt={2}>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       گپ فلکس باکس
      </Typography>
      <Typography className="mb-40" component="div">
      برای استفاده از{' '}<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap"> flexbox <code>gap</code> </a> برای فاصله پیاده سازی، prop <code>useFlexGap</code> را روی true تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      <a href="#limitations">محدودیت‌های شناخته شده</a> اجرای پیش‌فرض را که از انتخابگر تودرتوی CSS استفاده می‌کند، حذف می‌کند.با این حال، CSS flexbox gap به طور کامل در برخی از مرورگرها پشتیبانی نمی شود.
      </Typography>
      <Typography className="mb-40" component="div">
      توصیه می‌کنیم قبل از استفاده، {' '} <a href="https://caniuse.com/?search=flex%20gap">درصد پشتیبانی</a> را بررسی کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FlexboxGapStack.js"
          className="my-24"
          iframe={false}
          component={require('../components/stack/FlexboxGapStack.js').default}
          raw={require('!raw-loader!../components/stack/FlexboxGapStack.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      برای تنظیم پراپ روی همه نمونه‌های استک یک تم با پراپ های پیش‌فرض ایجاد کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>…</Stack> {/* به طور پیش فرض از گپ flexbox استفاده می کند */}
    </ThemeProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      مارجین در فرزندان
      </Typography>
      <Typography className="mb-40" component="div">
      سفارشی کردن مارجین در فرزندان به طور پیش فرض پشتیبانی نمی شود.
      </Typography>
      <Typography className="mb-40" component="div">
      برای مثال، مارجین بالای کامپوننت <code>Button</code> در زیر نادیده گرفته می‌شود.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Stack>
  <Button sx={{ marginTop: '30px' }}>...</Button>
</Stack>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      :::success برای غلبه بر این محدودیت، {' '}<a href="#flexbox-gap"><code>useFlexGap</code> </a> prop را روی true تنظیم کنید تا به اجرای گپ  flexbox CSS بروید.
      </Typography>
      <Typography className="mb-40" component="div">
      با مراجعه به اینجا{' '} <a href="https://github.com/mui/material-ui/issues/33754">RFC</a> می‌توانید درباره این محدودیت اطلاعات بیشتری کسب کنید. :::
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        white-space: nowrap
      </Typography>
      <Typography className="mb-40" component="div">
      تنظیم اولیه در فلکس آیتم ها <code>min-width: auto</code> است. هنگامی که فرزندان از <code>white-space: nowrap;</code> استفاده می کنند، این باعث تضاد موقعیت می شود. شما می توانید مشکل را با:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Stack direction="row">
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای اینکه آیتم در داخل کانتینر بماند، باید <code>min-width: 0</code> را تنظیم کنید
        .
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Stack direction="row" sx={{ minWidth: 0 }}>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ZeroWidthStack.js"
          className="my-24"
          iframe={false}
          component={require('../components/stack/ZeroWidthStack.js').default}
          raw={require('!raw-loader!../components/stack/ZeroWidthStack.js')}
        />
      </Typography>
    </>
  );
}

export default StackDoc;
