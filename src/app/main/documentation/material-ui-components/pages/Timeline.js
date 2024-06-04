import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TimelineDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/timeline"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      (timeline) جدول زمانی
      </Typography>
      <Typography className="description">
      جدول زمانی فهرستی از رویدادها را به ترتیب زمانی نمایش می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      :::نکته : این کامپوننت در{' '}<a href="https://m2.material.io/">Material Design Guidelines</a> مستند نشده است، اما در رابط کاربری Material UI موجود است. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     جدول زمانی  پایه
      </Typography>
      <Typography className="mb-40" component="div">
      یک جدول زمانی پایه که لیستی از رویدادها را نشان می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/BasicTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/BasicTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول زمانی سمت چپ
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای اصلی جدول زمانی را می توان در سمت چپ نسبت به محور زمان قرار داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LeftPositionedTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/LeftPositionedTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/LeftPositionedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول زمانی متناوب
      </Typography>
      <Typography className="mb-40" component="div">
      جدول زمانی می تواند رویدادها را در دو طرف متناوب نمایش دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlternateTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/AlternateTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/AlternateTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      <code>TimelineDot</code> می تواند در رنگ های مختلف از پالت تم ظاهر شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorsTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/ColorsTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/ColorsTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مشخص شده(Outlined) 
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/OutlinedTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/OutlinedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محتوای روبروی همدیگر
      </Typography>
      <Typography className="mb-40" component="div">
      جدول زمانی می تواند محتوا را در طرف مقابل نمایش دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OppositeContentTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/OppositeContentTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/OppositeContentTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. شما میتوانید اطلاعات بیشتری  در این باره در {' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>
        کسب کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/CustomizedTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/CustomizedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      هم ترازی (Alignment)
      </Typography>
      <Typography className="mb-40" component="div">
      روش‌های مختلفی وجود دارد که می‌توان Timeline را در کانتینر قرار داد.
      </Typography>
      <Typography className="mb-40" component="div">
      شما می توانید این کار را با دستکاری کردن  استایل ها انجام دهید.
      </Typography>
      <Typography className="mb-40" component="div">
      یک Timeline به طور پیش فرض خود را در وسط کانتینر قرار می دهد .
      </Typography>
      <Typography className="mb-40" component="div">
      دموهای زیر نحوه تنظیم عرض نسبی سمت چپ و راست یک تایم لاین را نشان می دهد:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      تراز راست
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LeftAlignedTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/LeftAlignedTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/LeftAlignedTimeline.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      تراز چپ 
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RightAlignedTimeline.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/RightAlignedTimeline.js').default}
          raw={require('!raw-loader!../components/timeline/RightAlignedTimeline.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      تراز راست بدون محتوای روبرو
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NoOppositeContent.js"
          className="my-24"
          iframe={false}
          component={require('../components/timeline/NoOppositeContent.js').default}
          raw={require('!raw-loader!../components/timeline/NoOppositeContent.js')}
        />
      </Typography>
    </>
  );
}

export default TimelineDoc;
