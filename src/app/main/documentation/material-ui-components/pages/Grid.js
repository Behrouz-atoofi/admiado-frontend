import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function GridDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/grid"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        گرید(Grid)
      </Typography>
      <Typography className="description">
      شبکه گرید ریسپانسیو Material Design با اندازه و جهت صفحه‌نمایش سازگار می‌شود و از یکنواختی در طرح‌بندی‌ها اطمینان می‌دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      <a href="https://m2.material.io/design/layout/responsive-layout-grid.html">grid</a> یکپارچگی بصری بین طرح‌بندی‌ها ایجاد می‌کند و در عین حال امکان انعطاف‌پذیری را در طیف گسترده‌ای از طرح‌ها فراهم می‌کند
  
      رابط کاربری ریسپانسیو Material Design بر اساس طرح گرید  12 ستونی است.
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار کامپوننت <code>Grid</code> نباید با شبکه داده اشتباه گرفته شود. به یک شبکه طرح بندی نزدیک تر است. برای یک شبکه داده به کامپوننت  <a href="/x/react-data-grid/">
        <code>DataGrid</code> 
        </a>بروید
     
        . :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       چگونه کار می کند؟
      </Typography>
      <Typography className="mb-40" component="div">
      سیستم گرید با کامپوننت <code>Grid</code> پیاده سازی می شود:
      </Typography>
      <ul>
        <li>
        برای انعطاف پذیری بالا از <a href="https://www.w3.org/TR/css-flexbox-1/">ماژول Flexible Box CSS</a>{' '} استفاده می کند.
        </li>
        <li>
        دو نوع چیدمان وجود دارد: <em>کانتینر ها</em> و <em>آیتم ها</em>.
        </li>
        <li>
        عرض آیتم ها بر حسب درصد تنظیم می شود، بنابراین آنها همیشه فلوید و نسبت به پدر اصلی خود سایز می شوند.
        </li>
        <li>اقلام دارای پدینگ برای ایجاد فاصله بین موارد جداگانه هستند.</li>
        <li>پنج نقطه گرید شبکه وجود دارد: xs، sm، md، lg و xl.</li>
        <li>

        مقادیر صحیح را می توان به هر نقطه شکست داد، که نشان می دهد که چه تعداد از 12 ستون موجود توسط کامپوننت اشغال شده است، زمانی که عرض viewport  <a href="/material-ui/customization/breakpoints/#default-breakpoints">
            breakpoint constraints
          </a> را برآورده می کند.
          
       
          .
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      اگر <strong>تازه کار یا با flexbox آشنا نیستید</strong>، توصیه می کنیم این مطلب را بخوانید{' '} <a href="https://css-tricks.com/snippets/css/a-guide- راهنمای to-flexbox/">CSS-Tricks flexbox</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     گرید های فلوید
      </Typography>
      <Typography className="mb-40" component="div">
      گرید های فلوید از ستون‌هایی استفاده می‌کنند که محتوا را مقیاس و اندازه می‌دهند. طرح بندی گرید  فلوید می تواند از نقاط شکست برای تعیین اینکه آیا چیدمان نیاز به تغییر چشمگیر دارد یا خیر استفاده کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       گرید اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      عرض ستون مقادیر صحیحی بین 1 و 12 هستند. آنها در هر نقطه شکست اعمال می شوند و نشان می دهند که چند ستون توسط کامپوننت اشغال شده است.
      </Typography>
      <Typography className="mb-40" component="div">
      مقداری که به یک نقطه انفصال داده می شود برای تمام نقاط شکست دیگر وسیع تر از آن اعمال می شود (مگر اینکه لغو شود، همانطور که در ادامه این صفحه می توانید بخوانید). برای مثال، <code>{`xs={12}`}</code> اندازه یک کامپوننت را به گونه‌ای اندازه می‌دهد که بدون توجه به اندازه آن، کل عرض درگاه دید را اشغال کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/BasicGrid.js').default}
          raw={require('!raw-loader!../components/grid/BasicGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      گرید با نقاط شکست متعدد
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت ها ممکن است دارای چند عرض تعریف شده باشند که باعث می شود طرح در نقطه شکست تعریف شده تغییر کند. مقادیر عرض داده شده به نقاط شکست بزرگتر، مقادیر داده شده بر نقاط شکست کوچکتر  غلبه می کند.
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان مثال، <code>{`xs={12} sm={6}`}</code> یک کامپوننت را به گونه‌ای اندازه می‌دهد که نیمی از عرض درگاه نمایش (6 ستون) را اشغال کند، زمانی که عرض درگاه دید     <a href="/material-ui/customization/breakpoints/#default-breakpoints">600 پیکسل یا بیشتر</a> باشد. برای نماهای کوچکتر، کامپوننت همه 12 ستون موجود را پر می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/FullWidthGrid.js').default}
          raw={require('!raw-loader!../components/grid/FullWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        فاصله
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل فضای بین کودکان، از prop <code>spacing</code> استفاده کنید.مقدار فاصله می تواند هر عدد مثبت، از جمله اعشار و هر رشته باشد.پراپ با استفاده از راهنما{' '}<a href="/material-ui/customization/spacing/"> <code>theme.spacing()</code> </a> به یک ویژگی CSS تبدیل می‌شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpacingGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/SpacingGrid.js').default}
          raw={require('!raw-loader!../components/grid/SpacingGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ردیف &amp; فاصله ستون
      </Typography>
      <Typography className="mb-40" component="div">
      پراپس های <code>rowSpacing</code> و <code>columnSpacing</code> امکان تعیین فاصله‌های سطر و ستون را به طور مستقل فراهم می‌کنند.
      این شبیه به خصوصیات <code>row-gap</code> و   <code>column-gap</code> در <a href="/system/grid/#row-gap-amp-column-gap">CSS Grid</a>. است.

      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RowAndColumnSpacing.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/RowAndColumnSpacing.js').default}
          raw={require('!raw-loader!../components/grid/RowAndColumnSpacing.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مقادیر ریسپانسیو
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید مقدار props را بر اساس نقطه شکست فعال تغییر دهید. برای مثال, 
      ما می‌توانیم  طرح‌بندی   گرید ریسپانسیو <a href="https://m2.material.io/design/layout/responsive-layout-grid.html">
          &quot;توصیه شده&quot;
        </a>{' '} طراحی متریال را پیاده‌سازی کنیم.

      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/ResponsiveGrid.js').default}
          raw={require('!raw-loader!../components/grid/ResponsiveGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      مقادیر ریسپانسیو توسط این ها  پشتیبانی می شود
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
        همه <a href="#system-props">پراپس های دیگر</a> سیستم
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        :::هشدار  استفاده از یک   پراپ  <code>ستون</code> پاسخگو، هر آیتم گرید به نقطه شکست مربوط به خود نیاز دارد.. به عنوان مثال، این کار نمی کند. آیتم گرید مقدار <code>md</code> را از دست می دهد:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid container columns={{ xs: 4, md: 12 }}>
  <Grid item xs={2} />
</Grid>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       تعاملی بودن
      </Typography>
      <Typography className="mb-40" component="div">
      در زیر یک نسخه نمایشی تعاملی وجود دارد که به شما امکان می دهد نتایج بصری تنظیمات مختلف را بررسی کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InteractiveGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/InteractiveGrid.js').default}
          raw={require('!raw-loader!../components/grid/InteractiveGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      طرح بندی خودکار
      </Typography>
      <Typography className="mb-40" component="div">
      طرح‌بندی خودکار باعث می‌شود <em>آیتم ها</em> به طور عادلانه فضای موجود را به اشتراک بگذارند. این همچنین به این معنی است که می توانید عرض یک <em>آیتم</em> را تنظیم کنید و بقیه به طور خودکار اندازه اطراف آن را تغییر می دهند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AutoGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/AutoGrid.js').default}
          raw={require('!raw-loader!../components/grid/AutoGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      محتوای عرض متغیر
      </Typography>
      <Typography className="mb-40" component="div">

      برای اندازه‌گیری یک ستون بر اساس عرض طبیعی محتوای آن، یکی از پایه‌های نقطه شکست اندازه را به جای <code>true</code> / <code>number</code> روی <code>{`"auto"`}</code> تنظیم کنید.

      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariableWidthGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/VariableWidthGrid.js').default}
          raw={require('!raw-loader!../components/grid/VariableWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گرید پیچیده
      </Typography>
      <Typography className="mb-40" component="div">
      نسخه نمایشی زیر از دستورالعمل‌های طراحی متریال پیروی نمی‌کند، اما نشان می‌دهد که چگونه می‌توان از گرید برای ساخت طرح‌بندی‌های پیچیده استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ComplexGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/ComplexGrid.js').default}
          raw={require('!raw-loader!../components/grid/ComplexGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      'گرید' تودرتو
      </Typography>
      <Typography className="mb-40" component="div">
      عناصر <code>container</code> و <code>item</code> دو بولی مستقل هستند. آنها را می توان ترکیب کرد تا به یک کامپوننت  Grid اجازه دهد که هم یک کانتینر  فلکس و هم فرزند باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        :::نکته یک <strong>کانتینر</strong>  فلکس  جعبه ای است که توسط یک المنت با نمایشگر محاسبه شده <code>flex</code> یا <code>inline-flex</code> ایجاد می شود.فرزندان درون جریان کانتینر فلکس <strong>اقلام</strong> فلکس نامیده می‌شوند و با استفاده از مدل طرح‌بندی فلکس چیده می‌شوند. :::
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://www.w3.org/TR/css-flexbox-1/#box-model">
          https://www.w3.org/TR/css-flexbox-1/#box-model
        </a>
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/NestedGrid.js').default}
          raw={require('!raw-loader!../components/grid/NestedGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        ⚠️تعریف یک عرض صریح برای یک المنت Grid که یک فلکس کانتینر  آیتم فلکس و دارای فاصله در همان زمان است منجر به رفتار غیرمنتظره می‌شود، از انجام آن اجتناب کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid spacing={1} container item xs={12}>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      اگر نیاز به انجام چنین کاری دارید، یکی از پراپس ها را حذف کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Columns
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید تعداد ستون‌های پیش‌فرض (12) را با پراپ <code>columns</code> تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColumnsGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/ColumnsGrid.js').default}
          raw={require('!raw-loader!../components/grid/ColumnsGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
     مارجین منفی
      </Typography>
      <Typography className="mb-40" component="div">
      فاصله بین آیتم ها با مارجین منفی اجرا می شود.این ممکن است منجر به رفتارهای غیرمنتظره شود. برای مثال، برای اعمال رنگ پس‌زمینه، باید{' '} <code>display: flex;</code> را روی والد اعمال کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        white-space: nowrap
      </Typography>
      <Typography className="mb-40" component="div">
      تنظیم اولیه در آیتم فلکس   <code>min-width: auto</code> است.هنگامی که فرزندان از <code>white-space: nowrap;</code> استفاده می کنند، این باعث تضاد موقعیت می شود. شما می توانید مشکل را با:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      باز تولید کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      برای اینکه آیتم در کانتینر بماند، باید <code>min-width: 0</code> را تنظیم کنید. در عمل، می توانید پراپ <code>zeroMinWidth</code> را تنظیم کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs zeroMinWidth>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AutoGridNoWrap.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/AutoGridNoWrap.js').default}
          raw={require('!raw-loader!../components/grid/AutoGridNoWrap.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        جهت: column | column-reverse
      </Typography>
      <Typography className="mb-40" component="div">

      پراپس های  xs، sm، md، lg و xl در کانتینرهای <code>{`direction="column"`}</code> و <code>{`direction="column-reverse"`}</code> پشتیبانی نمی‌شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      آنها تعداد گرید هایی را که کامپوننت برای یک نقطه شکست معین استفاده می کند، تعریف می کنند.
      آنها برای کنترل عرض با استفاده از <code>flex-basis</code> در کانتینرهای ردیفی در نظر گرفته شده‌اند، اما بر ارتفاع در کانتینرهای ستون تأثیر می‌گذارند. در صورت استفاده، این پایه ها ممکن است اثرات نامطلوبی بر ارتفاع عناصر آیتم Grid داشته باشند.
       در صورت استفاده، این پراپس ها ممکن است اثرات نامطلوبی بر ارتفاع عناصر آیتم <code>Grid</code> داشته باشند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      طرح بندی گرید CSS
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت <code>Grid</code> از CSS flexbox به صورت داخلی استفاده می کند..اما همانطور که در زیر مشاهده می کنید، می توانید به راحتی از <a href="/system/grid/">سیستم</a> و CSS Grid برای چیدمان صفحات خود استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CSSGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/CSSGrid.js').default}
          raw={require('!raw-loader!../components/grid/CSSGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پراپس های سیستم
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک کامپوننت ابزار CSS، <code>Grid</code> از همه ویژگی‌های{' '} <a href="/system/properties/"> <code>system</code> </a>{' '} پشتیبانی می‌کند. . می توانید از آنها به عنوان پراپ مستقیماً روی کامپوننت استفاده کنید. به عنوان مثال، یک پدینگ:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item p={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default GridDoc;
