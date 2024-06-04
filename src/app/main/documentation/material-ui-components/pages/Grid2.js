import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function Grid2Doc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/grid2"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
       گرید نسخه 2
      </Typography>
      <Typography className="description">
      شبکه گرید ریسپانسیو با اندازه و جهت صفحه نمایش سازگار می‌شود و از یکنواختی در بین طرح‌بندی‌ها اطمینان می‌دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      کامپوننت <code>Grid</code> برای طرح‌بندی با تعداد مشخصی از ستون‌ها به خوبی کار می‌کند. ستون ها را می توان با چندین نقطه شکست پیکربندی کرد تا طول ستون هر فرزند را مشخص کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چه چیزی تغییر کرده است
      </Typography>
      <Typography className="mb-40" component="div">
      ما کامپوننت <code>Grid</code> را از ابتدا ساختیم تا:
      </Typography>
      <ul>
        <li>
        <a href="https://github.com/mui/material-ui/pull/32746">مشکلات شناخته شده</a> معرفی شده در Material UI نسخه 5 را برطرف کنیم.
        </li>
        <li>
        منطق را با متغیرهای CSS ساده کنیم پراپ <code>item</code> غیر ضروری را حذف کنیم و ویژگی CSS را کاهش دهیم.
        </li>
        <li>
        با جابجایی بین رویکردهای مارجین منفی، راه حل مناسبی برای <a href="#prevent-scrollbar">جلوگیری از نوار پیمایش</a> معرفی کنیم.
        </li>
        <li>به طور پیش فرض مارجین های منفی با اندازه مساوی را در همه طرف کانتینر گرید  تنظیم کنیم.</li>
      </ul>
      <Typography className="mb-40" component="div">
      از آنجایی که پیاده‌سازی جدید یک تغییر قطعی در نظر گرفته می‌شود، آن را به‌عنوان{' '}<code>Unstable_Grid2</code> معرفی کردیم تا قبل از اینکه در نسخه اصلی بعدی Material UI، بازخوردهای جامعه را جمع‌آوری کنیم.
      </Typography>
      <Typography className="mb-40" component="div">
      ما همه را تشویق می‌کنیم تا نسخه جدید <code>Grid</code> را با بازدید از{' '} <a href="/material-ui/migration/migration-grid-v2/">راهنمای مهاجرت Grid v2 امتحان کنند.</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        :::نکته از این پس، <code>Grid</code> v1 و <code>Grid</code> v2 به ایمپورت به صورت زیر اشاره می‌کنند:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چگونه کار می کند
      </Typography>
      <Typography className="mb-40" component="div">
      سیستم گرید با کامپوننت <code>Grid</code> پیاده سازی می شود:
      </Typography>
      <ul>
        <li>
        از <a href="https://www.w3.org/TR/css-flexbox-1/">CSS Flexbox</a> (به جای CSS Grid) برای انعطاف پذیری بالا استفاده می کند.
        </li>
        <li>
        گرید همیشه یک فلکس آیتم است. برای افزودن یک فلکس کانتینر از پراپ <code>container</code> استفاده کنید.
        </li>
        <li>
        عرض آیتم ها بر حسب درصد تنظیم می شود، بنابراین آنها همیشه فلوید و نسبت به عنصر اصلی خود سایز می شوند.
        </li>
        <li>
        پنج نقطه شکست گرید پیش‌فرض وجود دارد: xs، sm، md، lg و xl. اگر به نقاط شکست سفارشی نیاز دارید، <a href="#custom-breakpoints">گرید نقاط شکست سفارشی</a> را بررسی کنید.
        </li>
        <li>

        می‌توانید برای هر نقطه شکست مقادیر صحیح بدهید تا مشخص کنید که چه تعداد از 12 ستون موجود توسط کامپوننت اشغال می‌شود، زمانی که عرض دید درگاه  <a href="/material-ui/customization/breakpoints/#default-breakpoints">
        محدودیت های نقطه شکست
          </a> را برآورده می‌کند.

    
        </li>
        <li>
        از مارجین منفی و padding برای ایجاد شکاف بین فرزندان استفاده می‌کند که رفتاری مشابه با ویژگی   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap">
             <code>gap</code> CSS 
          </a> دارد.

    
        </li>
        <li>
        این از پوشش ردیف پشتیبانی <em> نمی کند</em>.المنت های فرزند نمی توانند چندین ردیف را پوشش دهند.توصیه می کنیم در صورت نیاز به این قابلیت از{' '} <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid</a> استفاده کنید.
        </li>
        <li>
        به طور خودکار فرزندان را <em>نمی</em> قرار  <em>نمی دهد</em>
        سعی می کند تک تک فرزندان را جا بیاندازد و اگر فضای کافی نباشد بقیه فرزندان از خط بعدی شروع می کنند و به همین ترتیب. اگر به جایگذاری خودکار نیاز دارید، توصیه می کنیم به جای آن از    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">
            CSS Grid
          </a>{' '} استفاده کنید.
       
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        :::هشدار کامپوننت <code>Grid</code> یک شبکه <em>طرح بندی</em> است، نه یک شبکه <em>داده</em>{' '}. 
        . اگر به شبکه داده نیاز دارید، کامپوننت    <a href="/x/react-data-grid/">
          the MUI X <code>DataGrid</code> 
        </a> را بررسی کنید.
        . :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       گرید های فلوید
      </Typography>
      <Typography className="mb-40" component="div">
      گرید های فلوید از ستون‌هایی استفاده می‌کنند که محتوا را مقیاس و اندازه می‌دهند.طرح بندی  گرید های فلوید می تواند از نقاط شکست برای تعیین اینکه آیا چیدمان نیاز به تغییر چشمگیر دارد یا خیر استفاده کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        گرید اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      برای ایجاد یک طرح بندی گرید ، به یک کانتینر نیاز دارید.از پراپ <code>container</code> برای ایجاد یک کانتینر گرید  استفاده کنید که موارد گرید را بپیچد (<code>Grid</code> همیشه یک آیتم است).
      </Typography>
      <Typography className="mb-40" component="div">
      عرض ستون ها مقادیر صحیحی بین 1 و 12 هستند. آنها را می توان در هر نقطه شکست برای نشان دادن تعداد ستون های اشغال شده توسط کامپوننت اعمال کرد.
      </Typography>
      <Typography className="mb-40" component="div">
      مقداری که به یک نقطه انفصال داده می‌شود، برای تمام نقاط شکست گسترده‌تر دیگر اعمال می‌شود، مگر اینکه لغو شود—برای جزئیات به <a href="#multiple-breakpoints">نقطه‌های شکست چندگانه</a> مراجعه کنید.. برای مثال، یک کامپوننت با <code>{`xs={12}`}</code> بدون در نظر گرفتن اندازه آن، کل عرض درگاه نمایش را اشغال می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/BasicGrid.js').default}
          raw={require('!raw-loader!../components/grid2/BasicGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      چندین نقطه شکست
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت ها ممکن است دارای چند عرض تعریف شده باشند که باعث می شود طرح در نقطه شکست تعریف شده تغییر کند. مقادیر عرض داده شده به نقاط شکست بزرگتر، مقادیر داده شده به نقاط شکست کوچکتر را لغو می کند.
      </Typography>
      <Typography className="mb-40" component="div">

      به عنوان مثال، یک کامپوونت با <code>{`xs={12} sm={6}`}</code> زمانی که درگاه دید    <a href="/material-ui/customization/breakpoints/#default-breakpoints">
      عرض کمتر از 600 پیکسل
        </a> باشد، کل عرض درگاه نمایش را اشغال می کند.
        .هنگامی که نمای دید از این اندازه بیشتر می شود، مولفه نیمی از عرض کل را اشغال می کند - شش ستون به جای 12.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/FullWidthGrid.js').default}
          raw={require('!raw-loader!../components/grid2/FullWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        فاصله
      </Typography>
      <Typography className="mb-40" component="div">
      از پراپ <code>spacing</code> برای کنترل فضای بین فرزندان استفاده کنید.مقدار فاصله می تواند هر عدد مثبت (شامل اعشار) یا یک رشته باشد.
      prop با استفاده از کمک کننده    <a href="/material-ui/customization/spacing/">
          <code>theme.spacing()</code>
        </a>{' '}  به یک ویژگی CSS تبدیل می شود.
 
      </Typography>
      <Typography className="mb-40" component="div">
      نسخه ی نمایشی زیر استفاده از پراپ <code>spacing</code> را نشان می دهد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpacingGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/SpacingGrid.js').default}
          raw={require('!raw-loader!../components/grid2/SpacingGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      فاصله سطر و ستون
      </Typography>
      <Typography className="mb-40" component="div">
      پراپس های <code>rowSpacing</code> و <code>columnSpacing</code> به شما امکان می‌دهند شکاف‌های سطر و ستون را مستقل از یکدیگر مشخص کنید..
      آنها مشابه با ویژگی های <code>row-gap</code> و <code>column-gap</code>  <a href="/system/grid/#row-gap-amp-column-gap">CSS Grid</a> رفتار می کنند.
     
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RowAndColumnSpacing.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/RowAndColumnSpacing.js').default}
          raw={require('!raw-loader!../components/grid2/RowAndColumnSpacing.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مقادیر ریسپانسیو
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید مقادیر prop را تنظیم کنید تا زمانی که یک نقطه شکست معین فعال است تغییر کند. 
    
      همانطور که در نسخه ی نمایشی زیر مشاهده می شود، می توانیم شبکه طرح بندی پاسخگوی  <a href="https://m2.material.io/design/layout/responsive-layout-grid.html"> پیشنهادی</a> Material Design را پیاده سازی کنیم:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/ResponsiveGrid.js').default}
          raw={require('!raw-loader!../components/grid2/ResponsiveGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        مقادیر ریسپانسیو توسط این ها پشتیبانی میشوند : 
      </Typography>
      <ul>
        <li>
          <code>columns</code>
        </li>
        <li>
          <code>columnSpacing</code>
        </li>
        <li>
          <code>direction</code>
        </li>
        <li>
          <code>rowSpacing</code>
        </li>
        <li>
          <code>spacing</code>
        </li>
        <li>
        تمام  <a href="#system-props">پراپس های دیگر سیستم MUI</a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      طرح بندی خودکار
      </Typography>
      <Typography className="mb-40" component="div">
      ویژگی طرح‌بندی خودکار فضای یکسانی را به همه موارد موجود می‌دهد. وقتی عرض یک مورد را تنظیم می کنید، بقیه به طور خودکار اندازه آن را تغییر می دهند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AutoGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/AutoGrid.js').default}
          raw={require('!raw-loader!../components/grid2/AutoGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      محتوای عرض متغیر
      </Typography>
      <Typography className="mb-40" component="div">

      وقتی مقدار نقطه شکست به جای درست یا عدد به صورت <code>{`"auto"`}</code> داده می شود، اندازه ستون به طور خودکار برای مطابقت با عرض محتوای آن تنظیم می شود. نسخه ی نمایشی زیر نشان می دهد که چگونه این کار می کند:
    
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariableWidthGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/VariableWidthGrid.js').default}
          raw={require('!raw-loader!../components/grid2/VariableWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گرید تو در تو
      </Typography>
      <Typography className="mb-40" component="div">

      کانتینر گریدی که در داخل یک کانتینر گرید  دیگر رندر می شود، یک گرید تو در تو است که   <a href="#columns">
          <code>columns</code>
        </a>{' '}  و <a href="#spacing">
          <code>spacing</code>
        </a>{' '} آن را از سطح بالایی به ارث می برد. همچنین اگر آن پراپس را دریافت کند، پراپس گرید سطح بالا را به ارث خواهد برد.
  
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ارث بردن ستون ها
      </Typography>
      <Typography className="mb-40" component="div">
      یک  گرید کانتینر تودرتو، ستون‌ها را از والد خود به ارث می‌برد، مگر اینکه پراپ{' '}<code>columns</code> برای نمونه مشخص شده باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedGridColumns.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/NestedGridColumns.js').default}
          raw={require('!raw-loader!../components/grid2/NestedGridColumns.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      به ارث بردن فاصله
      </Typography>
      <Typography className="mb-40" component="div">
      یک گرید کانتینر  تودرتو فاصله ردیف و ستون را از والد خود به ارث می برد مگر اینکه{' '}<code>spacing</code> prop برای نمونه مشخص شده باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/NestedGrid.js').default}
          raw={require('!raw-loader!../components/grid2/NestedGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ستون ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای تغییر تعداد ستون‌های پیش‌فرض (12) در گرید مانند شکل زیر، از پراپ <code>columns</code> استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColumnsGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/ColumnsGrid.js').default}
          raw={require('!raw-loader!../components/grid2/ColumnsGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        آفست (Offset)
      </Typography>
      <Typography className="mb-40" component="div">
      پراپس های افست (مانند <code>smOffset</code>، <code>mdOffset</code>) یک مورد را به سمت راست گرید فشار می دهند. این پراپس ها  می پذیرند:
      </Typography>
      <ul>
        <li>
        اعداد—به عنوان مثال، <code>{`mdOffset={2}`}</code> زمانی که اندازه پورت نمای برابر یا بزرگتر از نقطه شکست <code>md</code> باشد، یک مورد را دو ستون به سمت راست فشار می دهد.
        </li>
        <li>
        <code>{`"auto"`}</code>—این مورد را به سمت راست انتهایی گرید کانتینر که هدایت می‌کند.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      نسخه ی نمایشی زیر نحوه استفاده از پراپس افست را نشان می دهد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OffsetGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/OffsetGrid.js').default}
          raw={require('!raw-loader!../components/grid2/OffsetGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نقاط شکست سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      اگر نقاط شکست سفارشی را در موضوع مشخص کنید، می‌توانید از آن نام‌ها به‌عنوان پراپ آیتم گرید  در مقادیر ریسپانسیو استفاده کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Demo() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
            <div>{index + 1}</div>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        :::نکته نقاط شکست سفارشی بر روی اندازه و افست تأثیر می گذارد:
      </Typography>

      <FuseHighlight component="pre" className="language-diff">
        {` 
- <Grid xs={6} xsOffset={2}>
+ <Grid mobile={6} mobileOffset={2}>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        :::
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        تایپ اسکریپت
      </Typography>
      <Typography className="mb-40" component="div">
      شما باید افزایش ماژول را در رابط نقاط شکست موضوع تنظیم کنید.ویژگی های تنظیم شده روی{' '} <code>true</code> به صورت <code>{`{key}`}</code>(size prop) و{' '} <code>{`{key}Offset نشان داده می شود `}</code> (پراپ افست).
      </Typography>

      <FuseHighlight component="pre" className="language-ts">
        {` 
declare module '@mui/system' {
  interface BreakpointOverrides {
    // نقاط شکست سفارشی شما
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    //نقاط شکست پیش فرض را حذف کنید
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       غیرفعال کردن اسکرول بار
      </Typography>
      <Typography className="mb-40" component="div">
      اگر از گرید به عنوان یک کانتینر در یک نمای کوچک استفاده می کنید، ممکن است یک نوار اسکرول افقی را ببینید زیرا مارجین منفی در همه طرف گرید کانتینر اعمال می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      برای غیرفعال کردن این اسکرول، پراپ <code>disableEqualOverflow</code> را روی{' '} <code>true</code> تنظیم کنید. این کار مارجین های منفی را از سمت راست و پایین گرید حذف می کند تا از سرریز شدن آن جلوگیری شود.
      </Typography>
      <Typography className="mb-40" component="div">
      نسخه ی نمایشی زیر نشان می دهد که چگونه این کار می کند:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OverflowGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/OverflowGrid.js').default}
          raw={require('!raw-loader!../components/grid2/OverflowGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار  زمانی که{' '}
<code>disableEqualOverflow</code> <code>true</code> است زیرا مارجین منفی (که فقط در بالا و سمت چپ اعمال می‌شود) باعث می‌شود گرید از نظر بصری نادرست باشد. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
     المنت های وسط چین
      </Typography>
      <Typography className="mb-40" component="div">
      برای ئسط چین کردن  محتوای یک آیتم  گرید <code>{`display="flex"`}</code> را مستقیماً روی آیتم مشخص کنید. سپس از <code>justifyContent</code> و/یا <code>alignItems</code> برای تنظیم موقعیت محتوا استفاده کنید، همانطور که در زیر نشان داده شده است:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CenteredElementGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/CenteredElementGrid.js').default}
          raw={require('!raw-loader!../components/grid2/CenteredElementGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار  از پراپ  <code>container</code> در این شرایط کار نمی کند زیرا گرید کانتینر منحصراً برای بسته بندی گرید آیتم ها طراحی شده است. نمی تواند المنت های  دیگر را بپیچد.
        :::
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       بردر کامل
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullBorderedGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/FullBorderedGrid.js').default}
          raw={require('!raw-loader!../components/grid2/FullBorderedGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       بوردر نصف
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HalfBorderedGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid2/HalfBorderedGrid.js').default}
          raw={require('!raw-loader!../components/grid2/HalfBorderedGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      جهت ستون و معکوس
      </Typography>
      <Typography className="mb-40" component="div">
      عرض ستون (xs، ...، xl) و پایه‌های افست در کانتینرهایی که از جهت = "column" یا جهت "column-reverse" استفاده می‌کنند، پشتیبانی نمی‌شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      پراپس های اندازه و آفست تعداد ستون هایی را که جزء برای یک نقطه شکست معین استفاده می کند، تعیین می کند.آنها برای کنترل عرض با استفاده از پایه انعطاف پذیر در کانتینرهای ردیفی در نظر گرفته شده اند، اما آنها بر ارتفاع در کانتینرهای ستون تأثیر می گذارند. در صورت استفاده، این پراپس ها ممکن است اثرات نامطلوبی بر ارتفاع عناصر آیتم Grid داشته باشند.
      </Typography>
    </>
  );
}

export default Grid2Doc;
