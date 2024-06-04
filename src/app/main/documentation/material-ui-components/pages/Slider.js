import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SliderDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/slider"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        اسلایدر
      </Typography>
      <Typography className="description">
      اسلایدرها به کاربران این امکان را می دهند که از طیف وسیعی از مقادیر انتخاب کنند.
      </Typography>

      <Typography className="mb-40" component="div">
      اسلایدر ها طیفی از مقادیر را در امتداد یک نوار منعکس می‌کنند که کاربران می‌توانند یک مقدار واحد را انتخاب کنند.
      آنها برای تنظیم تنظیماتی مانند صدا، روشنایی یا اعمال فیلترهای تصویر ایده آل هستند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اسلایدر های پیوسته
      </Typography>
      <Typography className="mb-40" component="div">
      اسلایدر های پیوسته به کاربران این امکان را می دهند که یک مقدار را در یک محدوده ذهنی انتخاب کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ContinuousSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/ContinuousSlider.js').default}
          raw={require('!raw-loader!../components/slider/ContinuousSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای نوار اسلایدر کوچکتر، از پراپ <code>{`size="small"`}</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SliderSizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/SliderSizes.js').default}
          raw={require('!raw-loader!../components/slider/SliderSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اسلایدر های گسسته
      </Typography>
      <Typography className="mb-40" component="div">
      اسلایدر های گسسته را می توان با ارجاع به نشانگر مقدار آن به یک مقدار خاص تنظیم کرد.با <code>{`marks={true}`}</code> می‌توانید برای هر مرحله یک علامت ایجاد کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSlider.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قدم های کوچک
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید افزایش گام پیش فرض را تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderSteps.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderSteps.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderSteps.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      علائم سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      شما می توانید با ارائه یک آرایه غنی به قسمت <code>marks</code> علامت های سفارشی داشته باشید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderMarks.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderMarks.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderMarks.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      مقادیر محدود شده
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید مقادیر قابل انتخاب را به مقادیر ارائه شده با پراپ <code>marks</code> با <code>{`step={null}`}</code> محدود کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderValues.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderValues.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderValues.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      لیبل همیشه قابل مشاهده 
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید با <code>{`valueLabelDisplay="on"`}</code> لیبل شاخص را مجبور کنید همیشه قابل مشاهده باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderLabel.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اسلایدر محدوده
      </Typography>
      <Typography className="mb-40" component="div">
      اسلایدر را می توان برای تنظیم شروع و پایان یک محدوده با ارائه آرایه ای از مقادیر به prop <code>value</code> استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RangeSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/RangeSlider.js').default}
          raw={require('!raw-loader!../components/slider/RangeSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      حداقل فاصله
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید حداقل فاصله بین مقادیر را در event handler <code>onChange</code> اعمال کنید..به‌طور پیش‌فرض، هنگامی که نشانگر را روی یک شاخص حرکت می‌دهید، در حالی که شاخص دیگری را می‌کشید، شاخص  فعال به شاخص هاور شده می‌رود.. می توانید این رفتار را با پراپ <code>disableSwap</code> غیرفعال کنید. اگر می‌خواهید با رسیدن به حداقل فاصله، محدوده تغییر کند، می‌توانید از پارامتر <code>activeThumb</code> در <code>onChange</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MinimumDistanceSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/MinimumDistanceSlider.js').default}
          raw={require('!raw-loader!../components/slider/MinimumDistanceSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اسلایدر  با فیلد اینپوت
      </Typography>
      <Typography className="mb-40" component="div">
      در این مثال، یک اینپوت اجازه می دهد تا یک مقدار گسسته تنظیم شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InputSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/InputSlider.js').default}
          raw={require('!raw-loader!../components/slider/InputSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/ColorSlider.js').default}
          raw={require('!raw-loader!../components/slider/ColorSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی  سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در{' '} <a href="/material-ui/customization/how-to-customize/">صفحه اسناد overrides</a> در مورد این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/CustomizedSlider.js').default}
          raw={require('!raw-loader!../components/slider/CustomizedSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      پخش کننده موسیقی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MusicPlayerSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/MusicPlayerSlider.js').default}
          raw={require('!raw-loader!../components/slider/MusicPlayerSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       اسلایدر های عمودی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/VerticalSlider.js').default}
          raw={require('!raw-loader!../components/slider/VerticalSlider.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>هشدار</strong>: Chrome، Safari و نسخه‌های جدیدتر Edge، یعنی هر مرورگری که مبتنی بر WebKit باشد، <code>{`<Slider orientation="vertical" />`}</code> را به صورت افقی نمایش می‌دهد ( <a href="https://bugs.chromium. org/p/chromium/issues/detail?id=1158217"> شماره کروم شماره 1158217 </a>). با اعمال <code>-webkit-appearance: slider-vertical;</code> اسلایدر  به صورت عمودی در معرض دید قرار می گیرد.
      </Typography>
      <Typography className="mb-40" component="div">
      با این حال، با اعمال -webkit-appearance: slider-vertical; پیمایش صفحه کلید برای کلیدهای افقی (پیکان، چپ، پیکان راست) معکوس شده است ( <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1162640">
      نسخه کروم شماره #1162640
        </a> ).

        معمولاً بالا و راست باید افزایش یابد و چپ و پایین باید مقدار را کاهش دهد. اگر <code>-webkit-appearance</code> را اعمال کنید، می توانید از پیمایش صفحه کلید برای کلیدهای جهت دار افقی برای یک اسلایدر واقعاً عمودی جلوگیری کنید.. این ممکن است در مقایسه با تغییر جهت، برای کاربران کمتر گیج کننده باشد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalAccessibleSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/VerticalAccessibleSlider.js').default}
          raw={require('!raw-loader!../components/slider/VerticalAccessibleSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دنبال کردن(track)
      </Typography>
      <Typography className="mb-40" component="div">
      track محدوده موجود برای انتخاب کاربر را نشان می دهد.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       track حذف شده
      </Typography>
      <Typography className="mb-40" component="div">
      track را می توان با <code>{`track={false}`}</code> خاموش کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TrackFalseSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/TrackFalseSlider.js').default}
          raw={require('!raw-loader!../components/slider/TrackFalseSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       track معکوس
      </Typography>
      <Typography className="mb-40" component="div">
      track را می توان با <code>{`track="inverted"`}</code> معکوس کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TrackInvertedSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/TrackInvertedSlider.js').default}
          raw={require('!raw-loader!../components/slider/TrackInvertedSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مقیاس غیر خطی
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از پراپ <code>scale</code> برای نشان دادن <code>value</code> در مقیاس دیگری استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      در دمو زیر، مقدار <em>x</em> نشان دهنده مقدار <em>2^x</em> است. افزایش{' '}<em>x</em> به یک مقدار نشان‌داده‌شده را با ضریب <em>2</em> افزایش می‌دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NonLinearSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/NonLinearSlider.js').default}
          raw={require('!raw-loader!../components/slider/NonLinearSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/">
          https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      خود کامپوننت بیشتر کارهای لازم برای دسترسی به آن را انجام می دهد. با این حال، باید مطمئن شوید که:
      </Typography>
      <ul>
        <li>
        هر شاخص  دارای یک لیبل کاربر پسند است (<code>aria-label</code>،{' '} <code>aria-labelledby</code> یا <code>getAriaLabel</code> prop).
        </li>
        <li>
        هر  شاخص یک متن کاربرپسند برای مقدار فعلی خود دارد. اگر مقدار با معنای لیبل مطابقت داشته باشد، این مورد نیاز نیست. می توانید نام را با پراپ {' '}<code>getAriaValueText</code> یا <code>aria-valuetext</code> تغییر دهید.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        IE 11
      </Typography>
      <Typography className="mb-40" component="div">
      لیبل مقدار اسلایدر در مرکز IE 11 قرار ندارد. ترازبندی برای آسان‌تر کردن سفارشی‌سازی با آخرین مرورگرها انجام نمی‌شود. شما می توانید مشکل را با:
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiSlider-valueLabel {
  left: calc(-50% - 4px);
}
`}

      </FuseHighlight>
      حل کنید
    </>
  );
}

export default SliderDoc;
