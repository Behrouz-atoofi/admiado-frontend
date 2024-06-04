import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BadgesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/badges"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        نشان
      </Typography>
      <Typography className="description">
      Badge یک نشان کوچک در سمت راست بالای فرزند(فرزندان) خود ایجاد می کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نشان پایه
      </Typography>
      <Typography className="mb-40" component="div">
      نمونه هایی از نشان های حاوی متن، با استفاده از رنگ های اصلی و فرعی. این نشان برای فرزندانش اعمال می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleBadge.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/SimpleBadge.js').default}
          raw={require('!raw-loader!../components/badges/SimpleBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      از  پراپ prop <code>color</code> برای اعمال پالت تم به کامپوننت استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorBadge.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/ColorBadge.js').default}
          raw={require('!raw-loader!../components/badges/ColorBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/">صفحه اسناد overrides </a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedBadges.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/CustomizedBadges.js').default}
          raw={require('!raw-loader!../components/badges/CustomizedBadges.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نمایان بودن نشان
      </Typography>
      <Typography className="mb-40" component="div">
      نمایان بودن نشان ها را می توان با استفاده از پراپ <code>invisible</code> کنترل کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeVisibility.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/BadgeVisibility.js').default}
          raw={require('!raw-loader!../components/badges/BadgeVisibility.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      نشان به طور خودکار  زمانی که <code>badgeContent</code> صفر است پنهان می شود. شما می توانید این را با پراپ <code>showZero</code> اورراید (لغو)کنید.
  
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ShowZeroBadge.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/ShowZeroBadge.js').default}
          raw={require('!raw-loader!../components/badges/ShowZeroBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      حداکثر مقدار
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پراپ <code>max</code> برای محدود کردن مقدار محتوای نشان استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeMax.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/BadgeMax.js').default}
          raw={require('!raw-loader!../components/badges/BadgeMax.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نشان نقطه
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>dot</code> یک نشان را به یک نقطه کوچک تغییر می دهد. این می تواند به عنوان یک اعلان مبنی بر تغییر چیزی بدون ارائه شمارش استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DotBadge.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/DotBadge.js').default}
          raw={require('!raw-loader!../components/badges/DotBadge.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      همپوشانی نشان
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پایه <code>overlap</code> برای قرار دادن نشان نسبت به گوشه المنت پیچیده استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeOverlap.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/BadgeOverlap.js').default}
          raw={require('!raw-loader!../components/badges/BadgeOverlap.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تراز نشان
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پراپ <code>anchorOrigin</code> برای انتقال نشان به هر گوشه‌ای از المنت پیچیده استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeAlignment.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/BadgeAlignment.js').default}
          raw={require('!raw-loader!../components/badges/BadgeAlignment.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        شما نمیتوانید به محتوای یک نشان اعتماد کنید که به درستی اعلام میشود  یا خیر
       .شما باید یک توضیح کامل، به عنوان مثال، با برچسب aria ارائه دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleBadges.js"
          className="my-24"
          iframe={false}
          component={require('../components/badges/AccessibleBadges.js').default}
          raw={require('!raw-loader!../components/badges/AccessibleBadges.js')}
        />
      </Typography>
    </>
  );
}

export default BadgesDoc;
