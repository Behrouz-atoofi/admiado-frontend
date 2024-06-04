import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ListsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/lists"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        لیست ها
      </Typography>
      <Typography className="description">
      فهرست ها نمایه های پیوسته و عمودی متن یا تصاویر هستند.
      </Typography>

      <Typography className="mb-40" component="div">
      لیست ها گروهی پیوسته از متن یا تصاویر هستند. آنها از آیتم های حاوی اقدامات اولیه و تکمیلی تشکیل شده اند که با آیکون ها و متن نشان داده می شوند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/BasicList.js').default}
          raw={require('!raw-loader!../components/lists/BasicList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      آخرین مورد از نسخه آزمایشی قبلی نشان می دهد که چگونه می توانید یک لینک را ارائه دهید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      می‌توانید یک {' '}<a href="/material-ui/guides/routing/#list">دمو با React Router را در ادامه این بخش </a>{' '} از اسناد پیدا کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       لیست تو در تو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/NestedList.js').default}
          raw={require('!raw-loader!../components/lists/NestedList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست پوشه ها
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FolderList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/FolderList.js').default}
          raw={require('!raw-loader!../components/lists/FolderList.js')}
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
          name="InteractiveList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/InteractiveList.js').default}
          raw={require('!raw-loader!../components/lists/InteractiveList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      ListItem انتخاب شده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectedListItem.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/SelectedListItem.js').default}
          raw={require('!raw-loader!../components/lists/SelectedListItem.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      موارد فهرست را تراز کنید
      </Typography>
      <Typography className="mb-40" component="div">
      هنگام نمایش سه خط یا بیشتر، آواتار در بالا تراز نیست. باید پراپ <code>{`alignItems="flex-start"`}</code> را برای تراز کردن آواتار در بالا، با پیروی از دستورالعمل‌های طراحی متریال تنظیم کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlignItemsList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/AlignItemsList.js').default}
          raw={require('!raw-loader!../components/lists/AlignItemsList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست کنترل ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        چک باکس
      </Typography>
      <Typography className="mb-40" component="div">
      یک چک باکس می تواند یک اقدام اولیه یا یک اقدام ثانویه باشد.
      </Typography>
      <Typography className="mb-40" component="div">
      چک باکس کنش اصلی و نشانگر استیت مورد فهرست است. دکمه نظر یک عمل ثانویه و یک هدف جداگانه است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/CheckboxList.js').default}
          raw={require('!raw-loader!../components/lists/CheckboxList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      چک باکس اقدام ثانویه برای آیتم فهرست و یک هدف جداگانه است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxListSecondary.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/CheckboxListSecondary.js').default}
          raw={require('!raw-loader!../components/lists/CheckboxListSecondary.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        سوئیچ
      </Typography>
      <Typography className="mb-40" component="div">
      سوئیچ یک عمل ثانویه و یک هدف جداگانه است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchListSecondary.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/SwitchListSecondary.js').default}
          raw={require('!raw-loader!../components/lists/SwitchListSecondary.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      زیر عنوان چسبنده
      </Typography>
      <Typography className="mb-40" component="div">
      پس از پیمایش، عنوان‌های فرعی به بالای صفحه سنجاق می‌شوند تا زمانی که زیر عنوان بعدی از صفحه خارج شوند. این ویژگی به موقعیت یابی چسبنده CSS متکی است. (⚠️ بدون پشتیبانی از IE 11)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PinnedSubheaderList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/PinnedSubheaderList.js').default}
          raw={require('!raw-loader!../components/lists/PinnedSubheaderList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست آیتم درونی
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>inset</code> یک آیتم فهرست را که نماد یا آواتار اصلی ندارد را قادر می‌سازد تا به درستی با مواردی که دارای آن هستند، تراز شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InsetList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/InsetList.js').default}
          raw={require('!raw-loader!../components/lists/InsetList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست بدون ناودان
      </Typography>
      <Typography className="mb-40" component="div">
      هنگام رندر کردن یک لیست در یک کامپوننت که ناودان خود را تعریف می کند، ناودان <code>ListItem</code>{' '} را می توان با <code>disableGutters</code> غیرفعال کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GutterlessList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/GutterlessList.js').default}
          raw={require('!raw-loader!../components/lists/GutterlessList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      لیست مجازی
      </Typography>
      <Typography className="mb-40" component="div">
      در مثال زیر، نحوه استفاده از{' '} <a href="https://github.com/bvaughn/react-window">react-window</a> را با <code>List</code> نشان می‌دهیم.  کامپوننت. 200 ردیف را رندر می کند و به راحتی می تواند تعداد بیشتری را مدیریت کند. مجازی سازی به مشکلات عملکرد کمک می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VirtualizedList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/VirtualizedList.js').default}
          raw={require('!raw-loader!../components/lists/VirtualizedList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      استفاده از <a href="https://github.com/bvaughn/react-window">react-window</a> در صورت امکان توصیه می شود.اگر این کتابخانه مورد استفاده شما را پوشش نمی‌دهد، باید از جایگزین‌هایی مانند <a href="https://github.com/petyosi/react-virtuoso">react-virtuoso</a> استفاده کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در <a href="/material-ui/customization/how-to-customize/">صفحه اسناد override</a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/CustomizedList.js').default}
          raw={require('!raw-loader!../components/lists/CustomizedList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 اگر به دنبال الهام هستید، می‌توانید{' '} <a href="https://mui-treasury.com/styles/list-item/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید
         .
      </Typography>
    </>
  );
}

export default ListsDoc;
