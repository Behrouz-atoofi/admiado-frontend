import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SelectsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/selects"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        سلکت(Select)
      </Typography>
      <Typography className="description">
      کامپوننت  سلکت برای جمع آوری اطلاعات ارائه شده توسط کاربر از لیستی از گزینه ها استفاده می شود.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       سلکت اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      منوها در زیر المنت های ساطع کننده خود قرار می گیرند، مگر اینکه نزدیک به پایین درگاه دید باشند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSelect.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/BasicSelect.js').default}
          raw={require('!raw-loader!../components/selects/BasicSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      خصوصیات پیشرفته
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت Select قرار است با یک المنت محلی <code>{`<select>`}</code>{' '}قابل تعویض باشد.
      </Typography>
      <Typography className="mb-40" component="div">
      اگر به دنبال ویژگی‌های پیشرفته‌تری هستید، مانند جعبه ترکیبی، انتخاب چندگانه، تکمیل خودکار، غیر همگام‌سازی یا پشتیبانی قابل ایجاد، به کامپوننت<a href="/material-ui/react-autocomplete/"><code>تکمیل خودکار</code> بروید. </a>
      این به معنای نسخه بهبود یافته بسته های "react-select" و "downshift" است.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        پراپس(props)
      </Typography>
      <Typography className="mb-40" component="div">
     کامپوننت Select به عنوان یک المنت <code>{`<input>`}</code> سفارشی در{' '} <a href="/material-ui/api/inputbase/">InputBase</a> پیاده سازی شده است. . این کامپوننت‌های فرعی <a href="/material-ui/react-text-field/">قطعات فیلد نوشتاری</a> را گسترش می‌دهد، یا <a href="/material-ui/api/outlined-input/ ">OutlinedInput</a>،{' '}<a href="/material-ui/api/input/">ورودی</a>، یا{' '} <a href="/material-ui/api /filled-input/">FilledInput</a>، بسته به نوع انتخاب شده. سبک‌های یکسان و بسیاری از ویژگی‌های مشابه را به اشتراک می‌گذارد. برای جزئیات بیشتر به صفحه APIکامپوننت مربوطه مراجعه کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      انواع پر شده و استاندارد
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectVariants.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/SelectVariants.js').default}
          raw={require('!raw-loader!../components/selects/SelectVariants.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      برچسب ها و متن کمکی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectLabels.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/SelectLabels.js').default}
          raw={require('!raw-loader!../components/selects/SelectLabels.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار  توجه داشته باشید که هنگام استفاده از FormControl با نوع مشخص شده Select، باید یک برچسب در دو مکان ارائه دهید: در کامپوننت InputLabel و در قسمت برچسب مولفه Select (نگاه کنید به نسخه نمایشی بالا):::
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        عرض خودکار
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectAutoWidth.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/SelectAutoWidth.js').default}
          raw={require('!raw-loader!../components/selects/SelectAutoWidth.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        سایز کوچک
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectSmall.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/SelectSmall.js').default}
          raw={require('!raw-loader!../components/selects/SelectSmall.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        props های دیگر
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectOtherProps.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/SelectOtherProps.js').default}
          raw={require('!raw-loader!../components/selects/SelectOtherProps.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      انتخاب محلی
      </Typography>
      <Typography className="mb-40" component="div">
      از آنجایی که می‌توان تجربه کاربر را در تلفن همراه با استفاده از انتخاب محلی پلتفرم بهبود بخشید، ما چنین الگویی را مجاز می‌کنیم.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NativeSelect.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/NativeSelect.js').default}
          raw={require('!raw-loader!../components/selects/NativeSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        فیلد متنی
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت بسته بندی <code>TextField</code> یک کنترل فرم کامل شامل برچسب، ورودی و متن راهنما است. می‌توانید نمونه‌ای را با حالت انتخاب{' '}<a href="/material-ui/react-text-field/#select">در این بخش</a> بیابید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/">صفحه اسناد  overrides</a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
      اولین قدم، استایل دادن به کامپوننت <code>InputBase</code> است.پس از سبک‌دهی، می‌توانید مستقیماً از آن به‌عنوان یک فیلد نوشتاری استفاده کنید یا آن را به قسمت انتخابی <code>input</code>{' '} ارائه دهید تا یک فیلد <code>select</code> داشته باشید.
      توجه داشته باشید که نوع <code>{`"standard"`}</code> سفارشی‌سازی آسان‌تر است، زیرا محتویات را در یک نشانه‌گذاری مجموعه فیلد/افسانه قرار نمی‌دهد.
    
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSelects.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/CustomizedSelects.js').default}
          raw={require('!raw-loader!../components/selects/CustomizedSelects.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      🎨 اگر به دنبال الهام هستید، می‌توانید{' '} <a href="https://mui-treasury.com/styles/select/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید
         .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سلکت چندگانه
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت <code>Select</code> می تواند چندین انتخاب را مدیریت کند. با پراپ{' '} <code>multiple</code> فعال می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      مانند انتخاب واحد، می توانید مقدار جدید را با دسترسی به {' '}<code>event.target.value</code> در کالبک  <code>onChange</code> بیرون بکشید که  همیشه یک آرایه است.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        پیش فرض
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelect.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/MultipleSelect.js').default}
          raw={require('!raw-loader!../components/selects/MultipleSelect.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        چک مارک ها
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectCheckmarks.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/MultipleSelectCheckmarks.js').default}
          raw={require('!raw-loader!../components/selects/MultipleSelectCheckmarks.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
    چیپ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectChip.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/MultipleSelectChip.js').default}
          raw={require('!raw-loader!../components/selects/MultipleSelectChip.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        نگهدارنده مکان(placeHolder)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectPlaceholder.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/MultipleSelectPlaceholder.js').default}
          raw={require('!raw-loader!../components/selects/MultipleSelectPlaceholder.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        محلی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectNative.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/MultipleSelectNative.js').default}
          raw={require('!raw-loader!../components/selects/MultipleSelectNative.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       کنترل استیت open
      </Typography>
      <Typography className="mb-40" component="div">
      شما می توانید استیت باز select را با prop <code>open</code> کنترل کنید. همچنین، می‌توان استیت باز اولیه (کنترل نشده) کامپوننت را با prop{' '} <code>defaultOpen</code> تنظیم کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledOpenSelect.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/ControlledOpenSelect.js').default}
          raw={require('!raw-loader!../components/selects/ControlledOpenSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      با دیالوگ
      </Typography>
      <Typography className="mb-40" component="div">
        میتوانید از select در داخل یک دیالوگ نیز استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DialogSelect.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/DialogSelect.js').default}
          raw={require('!raw-loader!../components/selects/DialogSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      دسته‌ها را با کامپوننت <code>ListSubheader</code> یا المنت محلی{' '} <code>{`<optgroup>`}</code> نمایش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupedSelect.js"
          className="my-24"
          iframe={false}
          component={require('../components/selects/GroupedSelect.js').default}
          raw={require('!raw-loader!../components/selects/GroupedSelect.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار اگر می‌خواهید ListSubheader را در یک کامپوننت سفارشی بپیچید، باید آن را حاشیه‌نویسی کنید تا رابط کاربری Material بتواند هنگام تعیین المنت قابل فوکوس آن را به درستی مدیریت کند.
      </Typography>
      <Typography className="mb-40" component="div">
      شما دو گزینه برای حل این مشکل دارید: گزینه 1: یک فیلد boolean استاتیک به نام{' '} <code>muiSkipListHighlight</code> در تابع کامپوننت خود تعریف کنید و آن را روی{' '} <code>true</code> تنظیم کنید. :
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
function MyListSubheader(props: ListSubheaderProps) {
  return <ListSubheader {...props} />;
}

MyListSubheader.muiSkipListHighlight = true;
export default MyListSubheader;

// elsewhere:

return (
  <Select>
    <MyListSubheader>گروه 1</MyListSubheader>
    <MenuItem value={1}>گزینه 1</MenuItem>
    <MenuItem value={2}>گزینه 2</MenuItem>
    <MyListSubheader>گروه 2</MyListSubheader>
    <MenuItem value={3}>گزینه 3</MenuItem>
    <MenuItem value={4}>گزینه 4</MenuItem>
    {/* ... */}
  </Select>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      گزینه 2: یک prop <code>muiSkipListHighlight</code> روی هر نمونه از کامپوننت خود قرار دهید. این prop نباید به ListSubheader فرستاده شود و در عنصر DOM زیرین وجود نداشته باشد. فقط باید روی کامپوننتی قرار گیرد که به عنوان زیر سربرگ استفاده می شود.
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
export default function MyListSubheader(
  props: ListSubheaderProps & { muiSkipListHighlight: boolean },
) {
  const { muiSkipListHighlight, ...other } = props;
  return <ListSubheader {...other} />;
}

// elsewhere:

return (
  <Select>
    <MyListSubheader muiSkipListHighlight>گروه 1</MyListSubheader>
    <MenuItem value={1}>'گزینه' 1</MenuItem>
    <MenuItem value={2}>'گزینه' 2</MenuItem>
    <MyListSubheader muiSkipListHighlight>گروه 2</MyListSubheader>
    <MenuItem value={3}>'گزینه' 3</MenuItem>
    <MenuItem value={4}>'گزینه' 4</MenuItem>
    {/* ... */}
  </Select>
);
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      ما گزینه اول را توصیه می کنیم زیرا نیازی به به روز رسانی تمام سایت های استفاده از کامپوننت ندارد.
      </Typography>
      <Typography className="mb-40" component="div">
      به خاطر داشته باشید که این فقط در صورتی ضروری است که ListSubheader را در یک کامپوننت سفارشی بپیچید.اگر مستقیماً از ListSubheader استفاده می‌کنید،{' '} <strong>کد اضافی لازم نیست</strong>. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      برای برچسب گذاری مناسب ورودی <code>Select</code> خود، به یک عنصر اضافی با یک{' '}<code>id</code> نیاز دارید که حاوی یک برچسب باشد.. آن <code>id</code> باید با{' '} <code>labelId</code> <code>Select</code> مطابقت داشته باشد.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel id="label">سن</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">ده</MenuItem>
  <MenuItem value="20">بیست</MenuItem>
</Select>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      یا یک <code>TextField</code> با <code>id</code> و <code>label</code>{' '} نشانه گذاری و شناسه مناسب را برای شما ایجاد می کند:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField id="select" label="Age" value="20" select>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</TextField>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای <a href="#native-select">سلکت محلی </a> باید یک برچسب را با دادن مقدار ویژگی id عنصر select به ویژگی htmlFor در InputLabel ذکر کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel htmlFor="select">سن</InputLabel>
<NativeSelect id="select">
  <option value="10">ده</option>
  <option value="20">بیست</option>
</NativeSelect>
`}
      </FuseHighlight>
    </>
  );
}

export default SelectsDoc;
