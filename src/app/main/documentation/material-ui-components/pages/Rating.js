import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function RatingDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/rating"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      رتبه‌بندی‌(Rating)
      </Typography>
      <Typography className="description">
      رتبه‌بندی‌ها بینشی در مورد نظرات و تجربیات دیگران ارائه می‌کنند و به کاربر اجازه می‌دهند رتبه‌بندی خود را ارسال کنند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رتبه بندی اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicRating.js"
          className="my-24"
          iframe={false}
          component={require('../components/rating/BasicRating.js').default}
          raw={require('!raw-loader!../components/rating/BasicRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دقت رتبه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه بندی می تواند هر عدد شناور را با prop <code>value</code> نمایش دهد. برای تعریف حداقل تغییر مقدار افزایشی مجاز از {' '}<code>precision</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HalfRating.js"
          className="my-24"
          iframe={false}
          component={require('../components/rating/HalfRating.js').default}
          raw={require('!raw-loader!../components/rating/HalfRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بازخورد هاور
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید برچسبی را روی هاور نمایش دهید تا به کاربر کمک کند تا مقدار رتبه‌بندی صحیح را انتخاب کند. نسخه ی نمایشی از پراپ <code>onChangeActive</code> استفاده می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HoverRating.js"
          className="my-24"
          iframe={false}
          component={require('../components/rating/HoverRating.js').default}
          raw={require('!raw-loader!../components/rating/HoverRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای رتبه‌بندی‌های بزرگ‌تر یا کوچک‌تر از پراپ <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RatingSize.js"
          className="my-24"
          iframe={false}
          component={require('../components/rating/RatingSize.js').default}
          raw={require('!raw-loader!../components/rating/RatingSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا چند نمونه از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/">صفحه اسناد  overrides</a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedRating.js"
          className="my-24"
          iframe={false}
          component={require('../components/rating/CustomizedRating.js').default}
          raw={require('!raw-loader!../components/rating/CustomizedRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه دکمه های رادیویی
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه بندی با یک گروه رادیویی اجرا می شود، <code>highlightSelectedOnly</code> را برای بازیابی رفتار طبیعی تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioGroupRating.js"
          className="my-24"
          iframe={false}
          component={require('../components/rating/RadioGroupRating.js').default}
          raw={require('!raw-loader!../components/rating/RadioGroupRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (
        <a href="https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating">
          WAI آموزش
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      دسترسی به این کامپوننت به موارد زیر بستگی دارد:
      </Typography>
      <ul>
        <li>
        یک گروه رادیویی با فیلدهای آن از نظر بصری پنهان است. این شامل شش دکمه رادیویی، یکی برای هر ستاره، و دیگری برای 0 ستاره است که به طور پیش فرض بررسی می شود. حتماً مقداری برای prop <code>name</code> ارائه دهید که منحصر به فرم والد است.
        </li>
        <li>
        برچسب‌های دکمه‌های رادیویی حاوی متن واقعی ("1 ستاره"، "2 ستاره"، ...). هنگامی که صفحه به زبانی غیر از انگلیسی است، حتماً یک تابع مناسب برای prop getLabelText ارائه دهید. می‌توانید از           <a href="https://mui.com/material-ui/guides/localization/"> زبان های ارائه شده</a>, or
 استفاده کنید یا خود را ارائه دهید.
        </li>
        <li>
        ظاهری متمایز بصری برای نمادهای رتبه بندی. به طور پیش‌فرض، کامپوننت رتبه‌بندی از تفاوت رنگ و شکل (آیکون‌های پر و خالی) برای نشان دادن مقدار استفاده می‌کند. در صورتی که از رنگ به عنوان تنها وسیله برای نشان دادن مقدار استفاده می کنید، اطلاعات نیز باید مانند این نسخه نمایشی به صورت متن نمایش داده شوند. این برای مطابقت با <a href="https://www.w3.org/TR/WCAG21/#use-of-color">معیار موفقیت 1.4.1</a> WCAG2.1 مهم است.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextRating.js"
          className="my-24"
          iframe={false}
          component={require('../components/rating/TextRating.js').default}
          raw={require('!raw-loader!../components/rating/TextRating.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه بندی فقط خواندنی دارای نقش "img" و یک برچسب آریا است که رتبه نمایش داده شده را توصیف می کند.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      از آنجایی که کامپوننت رتبه‌بندی از دکمه‌های رادیویی استفاده می‌کند، تعامل صفحه کلید از رفتار مرورگر بومی پیروی می‌کند. Tab امتیاز فعلی را متمرکز می کند و کلیدهای مکان نما رتبه انتخابی را کنترل می کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      رتبه‌بندی فقط خواندنی قابل فوکوس نیست.
      </Typography>
    </>
  );
}

export default RatingDoc;
