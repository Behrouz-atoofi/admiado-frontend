import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AutocompleteDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/autocomplete"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      تکمیل خودکار(Autocomplete) 
      </Typography>
      <Typography className="description">
      تکمیل خودکار یک ورودی متن معمولی است که با پانل گزینه های پیشنهادی بهبود یافته است.
      </Typography>

      <Typography className="mb-40" component="div">
       این ویجت برای تنظیم مقدار یک تکست باکس تک خطی در یکی از دو نوع سناریو مفید است:
      </Typography>
      <ol>
        <li>
        مقدار جعبه متن باید از میان مجموعه ای از مقادیر مجاز از پیش تعریف شده انتخاب شود، به عنوان مثال، یک فیلد مکان باید دارای یک نام مکان معتبر باشد: <a href="#combo-box">جعبه ترکیبی</a>.
        </li>
        <li>
        جعبه متن ممکن است حاوی هر مقدار دلخواه باشد، اما پیشنهاد مقادیر ممکن به کاربر سودمند است، به عنوان مثال، یک قسمت جستجو ممکن است جستجوهای مشابه یا قبلی را برای صرفه جویی در وقت کاربر پیشنهاد کند: <a href="#free-solo">فری  سولو</a>.
        </li>
      </ol>
      <Typography className="mb-40" component="div">
      این به معنای نسخه بهبود یافته بسته های "react-select" و "downshift" است.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جعبه ترکیبی (Combo Box)
      </Typography>
      <Typography className="mb-40" component="div">
      مقدار باید از یک مجموعه از پیش تعریف شده از مقادیر مجاز انتخاب شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ComboBox.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/ComboBox.js').default}
          raw={require('!raw-loader!../components/autocomplete/ComboBox.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      ساختار گزینه ها
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، کامپوننت ساختارهای گزینه های زیر را می پذیرد:
      </Typography>

      <FuseHighlight component="pre" className="language-ts">
        {` 
interface AutocompleteOption {
  label: string;
}
// or
type AutocompleteOption = string;
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای مثال:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      با این حال، می‌توانید با ارائه یک پراپ <code>getOptionLabel</code> از ساختارهای مختلف استفاده کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       پلی گراند (Playground)
      </Typography>
      <Typography className="mb-40" component="div">
      هر یک از مثال های زیر یکی از ویژگی های کامپوننت تکمیل خودکار را نشان می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Playground.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Playground.js').default}
          raw={require('!raw-loader!../components/autocomplete/Playground.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        انتخاب کشور
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از 248 کشور را انتخاب کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CountrySelect.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/CountrySelect.js').default}
          raw={require('!raw-loader!../components/autocomplete/CountrySelect.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
     استیت های کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      این کامپوننت دارای دو استیت است که قابل کنترل است:
      </Typography>
      <ol>
        <li>
          استیت value با ترکیب پراپس <code>value</code>/<code>onChange</code>
         . این حالت نشان دهنده مقدار انتخاب شده توسط کاربر است، به عنوان مثال هنگام فشار دادن دکمه  <kbd className="key">Enter</kbd>.
        </li>
        <li>
          استیت مقدار اینپوت  با ترکیب پراپس های <code>inputValue</code>/
         .این حالت نشان دهنده مقدار نمایش داده شده در جعبه متن است.
        </li>
      </ol>
      <Typography className="mb-40" component="div">
      :::هشدار این دو حالت جدا هستند و باید به طور مستقل کنترل شوند. :::
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControllableStates.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/ControllableStates.js').default}
          raw={require('!raw-loader!../components/autocomplete/ControllableStates.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        فری سولو (Free solo)
      </Typography>
      <Typography className="mb-40" component="div">
      <code>freeSolo</code> را روی true تنظیم کنید تا کادر متنی حاوی هر مقدار دلخواه باشد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      اینپوت جستجو
      </Typography>
      <Typography className="mb-40" component="div">
      این پراپ  به گونه ای طراحی شده است که مورد استفاده اولیه  <strong>اینپوت جستجو  </strong> همراه با پیشنهاد دهی  ، جسنجوی گوگل و  یا  react-autowhatever  قرار بگیرد.

      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FreeSolo.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/FreeSolo.js').default}
          raw={require('!raw-loader!../components/autocomplete/FreeSolo.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      :::هشدار هنگام استفاده از حالت فری سولو با گزینه های غیر استرینگی  مراقب باشید، زیرا ممکن است باعث عدم تطابق تایپ شود.
      </Typography>
      <Typography className="mb-40" component="div">
      مقدار ایجاد شده با تایپ در جعبه متن، صرف نظر از نوع گزینه ها، همیشه یک استرینگ است. :::
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قابل ایجاد
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می‌خواهید از این حالت برای تجربه‌ای مانند <a href="#combo-box">کامبو باکس</a> استفاده کنید (نسخه پیشرفته‌ای از یک المنت انتخابی) توصیه می‌کنیم این حالت را تنظیم کنید:
      </Typography>
      <ul>
        <li>
        <code>selectOnFocus</code> برای کمک به کاربر برای پاک کردن مقدار انتخاب شده.
        </li>
        <li>
        <code>clearOnBlur</code> برای کمک به کاربر برای وارد کردن مقدار جدید.
        </li>
        <li>
        <code>handleHomeEndKeys</code> برای انتقال فوکوس به داخل پنجره بازشو با کلیدهای{' '} <kbd className="key">Home </kbd> و <kbd className="key">End</kbd>.
        </li>
        <li>
        گزینه آخر، به عنوان مثال: <code>{`جستجوی خود را اضافه کنید"`}</code>.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FreeSoloCreateOption.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/FreeSoloCreateOption.js').default}
          raw={require('!raw-loader!../components/autocomplete/FreeSoloCreateOption.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید زمانی که کاربر می‌خواهد مقدار جدیدی اضافه کند، یک دیالوگ نمایش دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FreeSoloCreateOptionDialog.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/FreeSoloCreateOptionDialog.js').default}
          raw={require('!raw-loader!../components/autocomplete/FreeSoloCreateOptionDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه بندی شده 
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید گزینه‌ها را با پراپ <code>groupBy</code> گروه‌بندی کنید. اگر این کار را انجام می دهید، مطمئن شوید که گزینه ها نیز با همان بعد دسته بندی شده اند، در غیر این صورت، متوجه هدرهای تکراری خواهید شد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Grouped.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Grouped.js').default}
          raw={require('!raw-loader!../components/autocomplete/Grouped.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل نحوه رندر شدن گروه ها، یک <code>renderGroup</code> سفارشی ارائه دهید. این تابعی است که یک آبجکت با دو فیلد را می پذیرد:
      </Typography>
      <ul>
        <li>
        <code>گروه</code> - استرینگی که نام گروه را نشان می دهد
        </li>
        <li>
        <code>فرزند</code>—مجموعه ای از موارد فهرست که به گروه تعلق دارند
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      دمو زیر نحوه استفاده از این پراپ  را برای تعریف نشانه گذاری سفارشی و نادیده گرفتن سبک های گروه های پیش فرض نشان می دهد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RenderGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/RenderGroup.js').default}
          raw={require('!raw-loader!../components/autocomplete/RenderGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گزینه های غیرفعال
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledOptions.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/DisabledOptions.js').default}
          raw={require('!raw-loader!../components/autocomplete/DisabledOptions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>هوک useAutocomplete</code>
      </Typography>
      <Typography className="mb-40" component="div">
        For advanced customization use cases, a headless <code>useAutocomplete()</code> hook is
        exposed. It accepts almost the same options as the Autocomplete component minus all the
        props related to the rendering of JSX. The Autocomplete component is built on this hook.
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
import useAutocomplete from '@mui/base/useAutocomplete';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        The <code>useAutocomplete</code> hook is also reexported from @mui/material for convenience
        and backward compatibility.
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
import useAutocomplete from '@mui/material/useAutocomplete';
`}
      </FuseHighlight>
      <ul>
        <li>
          📦 <a href="/size-snapshot/">4.5 kB gzipped</a>.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseAutocomplete.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/UseAutocomplete.js').default}
          raw={require('!raw-loader!../components/autocomplete/UseAutocomplete.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Customized hook
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedHook.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/CustomizedHook.js').default}
          raw={require('!raw-loader!../components/autocomplete/CustomizedHook.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Head to the <a href="#customization">customization</a> section for an example with the{' '}
        <code>Autocomplete</code> component instead of the hook.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Asynchronous requests
      </Typography>
      <Typography className="mb-40" component="div">
        The component supports two different asynchronous use-cases:
      </Typography>
      <ul>
        <li>
          <a href="#load-on-open">Load on open</a>: it waits for the component to be interacted with
          to load the options.
        </li>
        <li>
          <a href="#search-as-you-type">Search as you type</a>: a new request is made for each
          keystroke.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Load on open
      </Typography>
      <Typography className="mb-40" component="div">
        It displays a progress state as long as the network request is pending.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Asynchronous.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Asynchronous.js').default}
          raw={require('!raw-loader!../components/autocomplete/Asynchronous.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Search as you type
      </Typography>
      <Typography className="mb-40" component="div">
        If your logic is fetching new options on each keystroke and using the current value of the
        textbox to filter on the server, you may want to consider throttling requests.
      </Typography>
      <Typography className="mb-40" component="div">
        Additionally, you will need to disable the built-in filtering of the{' '}
        <code>Autocomplete</code> component by overriding the <code>filterOptions</code> prop:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Autocomplete filterOptions={(x) => x} />
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Google Maps place
      </Typography>
      <Typography className="mb-40" component="div">
        A customized UI for Google Maps Places Autocomplete. For this demo, we need to load the{' '}
        <a href="https://developers.google.com/maps/documentation/javascript/overview">
          Google Maps JavaScript
        </a>{' '}
        and{' '}
        <a href="https://developers.google.com/maps/documentation/places/web-service/overview">
          Google Places
        </a>{' '}
        API.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GoogleMaps.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/GoogleMaps.js').default}
          raw={require('!raw-loader!../components/autocomplete/GoogleMaps.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::error Before you can start using the Google Maps JavaScript API and Places API, you need
        to get your own{' '}
        <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">
          API key
        </a>
        . :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Multiple values
      </Typography>
      <Typography className="mb-40" component="div">
        Also known as tags, the user is allowed to enter more than one value.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Tags.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Tags.js').default}
          raw={require('!raw-loader!../components/autocomplete/Tags.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Fixed options
      </Typography>
      <Typography className="mb-40" component="div">
        In the event that you need to lock certain tags so that they can&#39;t be removed, you can
        set the chips disabled.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedTags.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/FixedTags.js').default}
          raw={require('!raw-loader!../components/autocomplete/FixedTags.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Checkboxes
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxesTags.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/CheckboxesTags.js').default}
          raw={require('!raw-loader!../components/autocomplete/CheckboxesTags.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Limit tags
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>limitTags</code> prop to limit the number of displayed options when
        not focused.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LimitTags.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/LimitTags.js').default}
          raw={require('!raw-loader!../components/autocomplete/LimitTags.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        Fancy smaller inputs? Use the <code>size</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Sizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Sizes.js').default}
          raw={require('!raw-loader!../components/autocomplete/Sizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom input
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>renderInput</code> prop allows you to customize the rendered input. The first
        argument of this render prop contains props that you need to forward. Pay specific attention
        to the <code>ref</code> and <code>inputProps</code> keys.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomInputAutocomplete.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/CustomInputAutocomplete.js').default}
          raw={require('!raw-loader!../components/autocomplete/CustomInputAutocomplete.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        GitHub&#39;s picker
      </Typography>
      <Typography className="mb-40" component="div">
        This demo reproduces GitHub&#39;s label picker:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GitHubLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/GitHubLabel.js').default}
          raw={require('!raw-loader!../components/autocomplete/GitHubLabel.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Head to the <a href="#customized-hook">Customized hook</a> section for a customization
        example with the <code>useAutocomplete</code> hook instead of the component.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Highlights
      </Typography>
      <Typography className="mb-40" component="div">
        The following demo relies on{' '}
        <a href="https://github.com/moroshko/autosuggest-highlight">autosuggest-highlight</a>, a
        small (1 kB) utility for highlighting text in autosuggest and autocomplete components.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Highlights.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Highlights.js').default}
          raw={require('!raw-loader!../components/autocomplete/Highlights.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom filter
      </Typography>
      <Typography className="mb-40" component="div">
        The component exposes a factory to create a filter method that can be provided to the{' '}
        <code>filterOptions</code> prop. You can use it to change the default option filter
        behavior.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { createFilterOptions } from '@mui/material/Autocomplete';
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        <code>{`createFilterOptions(config) => filterOptions`}</code>
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Arguments
      </Typography>
      <ol>
        <li>
          <code>config</code> (<em>object</em> [optional]):
        </li>
      </ol>
      <ul>
        <li>
          <code>config.ignoreAccents</code> (<em>bool</em> [optional]): Defaults to{' '}
          <code>true</code>. Remove diacritics.
        </li>
        <li>
          <code>config.ignoreCase</code> (<em>bool</em> [optional]): Defaults to <code>true</code>.
          Lowercase everything.
        </li>
        <li>
          <code>config.limit</code> (<em>number</em> [optional]): Default to null. Limit the number
          of suggested options to be shown. For example, if <code>config.limit</code> is{' '}
          <code>100</code>, only the first <code>100</code> matching options are shown. It can be
          useful if a lot of options match and virtualization wasn&#39;t set up.
        </li>
        <li>
          <code>config.matchFrom</code> (<em>&#39;any&#39; | &#39;start&#39;</em> [optional]):
          Defaults to <code>{`'any'`}</code>.
        </li>
        <li>
          <code>config.stringify</code> (<em>func</em> [optional]): Controls how an option is
          converted into a string so that it can be matched against the input text fragment.
        </li>
        <li>
          <code>config.trim</code> (<em>bool</em> [optional]): Defaults to <code>false</code>.
          Remove trailing spaces.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Returns
      </Typography>
      <Typography className="mb-40" component="div">
        <code>filterOptions</code>: the returned filter method can be provided directly to the{' '}
        <code>filterOptions</code> prop of the <code>Autocomplete</code> component, or the parameter
        of the same name for the hook.
      </Typography>
      <Typography className="mb-40" component="div">
        In the following demo, the options need to start with the query prefix:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

<Autocomplete filterOptions={filterOptions} />;
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Filter.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Filter.js').default}
          raw={require('!raw-loader!../components/autocomplete/Filter.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Advanced
      </Typography>
      <Typography className="mb-40" component="div">
        For richer filtering mechanisms, like fuzzy matching, it&#39;s recommended to look at{' '}
        <a href="https://github.com/kentcdodds/match-sorter">match-sorter</a>. For instance:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { matchSorter } from 'match-sorter';

const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />;
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Virtualization
      </Typography>
      <Typography className="mb-40" component="div">
        Search within 10,000 randomly generated options. The list is virtualized thanks to{' '}
        <a href="https://github.com/bvaughn/react-window">react-window</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Virtualize.js"
          className="my-24"
          iframe={false}
          component={require('../components/autocomplete/Virtualize.js').default}
          raw={require('!raw-loader!../components/autocomplete/Virtualize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Events
      </Typography>
      <Typography className="mb-40" component="div">
        If you would like to prevent the default key handler behavior, you can set the event&#39;s{' '}
        <code>defaultMuiPrevented</code> property to <code>true</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Autocomplete
  onKeyDown={(event) => {
    if (event.key === 'Enter') {
      // Prevent's default 'Enter' behavior.
      event.defaultMuiPrevented = true;
      // your handler code
    }
  
/>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        autocomplete/autofill
      </Typography>
      <Typography className="mb-40" component="div">
        Browsers have heuristics to help the user fill in form inputs. However, this can harm the UX
        of the component.
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the component disables the input <strong>autocomplete</strong> feature
        (remembering what the user has typed for a given field in a previous session) with the{' '}
        <code>{`autoComplete="off"`}</code> attribute. Google Chrome does not currently support this
        attribute setting (
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=587466">Issue 587466</a>). A
        possible workaround is to remove the <code>id</code> to have the component generate a random
        one.
      </Typography>
      <Typography className="mb-40" component="div">
        In addition to remembering past entered values, the browser might also propose{' '}
        <strong>autofill</strong> suggestions (saved login, address, or payment details). In the
        event you want the avoid autofill, you can try the following:
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
            Name the input without leaking any information the browser can use. e.g.{' '}
            <code>{`id="field1"`}</code> instead of <code>{`id="country"`}</code>. If you leave the
            id empty, the component uses a random id.
          </Typography>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            Set <code>{`autoComplete="new-password"`}</code> (some browsers will suggest a strong
            password for inputs with this attribute setting):
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TextField
  {...params}
  inputProps={{
    ...params.inputProps,
    autoComplete: 'new-password',
  
/>
`}
          </FuseHighlight>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        Read{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion">
          the guide on MDN
        </a>{' '}
        for more details.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        iOS VoiceOver
      </Typography>
      <Typography className="mb-40" component="div">
        VoiceOver on iOS Safari doesn&#39;t support the <code>aria-owns</code> attribute very well.
        You can work around the issue with the <code>disablePortal</code> prop.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ListboxComponent
      </Typography>
      <Typography className="mb-40" component="div">
        If you provide a custom <code>ListboxComponent</code> prop, you need to make sure that the
        intended scroll container has the <code>role</code> attribute set to <code>listbox</code>.
        This ensures the correct behavior of the scroll, for example when using the keyboard to
        navigate.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/">
          https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        We encourage the usage of a label for the textbox. The component implements the WAI-ARIA
        authoring practices.
      </Typography>
    </>
  );
}

export default AutocompleteDoc;
