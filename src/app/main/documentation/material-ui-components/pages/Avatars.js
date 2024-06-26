import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AvatarsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/avatars"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        اواتار
      </Typography>
      <Typography className="description">
      آواتارها در طراحی متریال با استفاده در همه چیز از جداول گرفته تا منوهای گفتگو یافت می شوند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        آواتار تصاویر
      </Typography>
      <Typography className="mb-40" component="div">
      آواتارهای تصویر را می‌توان با ارسال <code>img</code> props <code>src</code> یا{' '} <code>srcSet</code> به کامپوننت ایجاد کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ImageAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/ImageAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/ImageAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آواتار حروف
      </Typography>
      <Typography className="mb-40" component="div">
      آواتارهای حاوی کاراکترهای ساده را می‌توان با ارسال یک استرینگ  به‌عنوان{' '} <code>فرزند</code> ایجاد کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LetterAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/LetterAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/LetterAvatars.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از رنگ های مختلف پس زمینه برای آواتار استفاده کنید. دمو زیر رنگ را بر اساس نام شخص تولید می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BackgroundLetterAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/BackgroundLetterAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/BackgroundLetterAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        اندازه ها
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید اندازه آواتار را با ویژگی های <code>height</code> و <code>width</code>{' '} CSS تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/SizeAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/SizeAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       آیکون آواتار
      </Typography>
      <Typography className="mb-40" component="div">
      آیکون های اواتار با ارسال یک آیکون به عنوان <code>children</code> ایجاد می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/IconAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/IconAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        متغیرها
      </Typography>
      <Typography className="mb-40" component="div">
      اگر به آواتارهای مربع یا گرد نیاز دارید، از ویژگی <code>Variant</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariantAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/VariantAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/VariantAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        فال بک ها
      </Typography>
      <Typography className="mb-40" component="div">
      اگر در بارگیری تصویر آواتار خطایی وجود داشته باشد، کامپوننت به ترتیب زیر به یک جایگزین برمی‌گردد:
      </Typography>
      <ul>
        <li>فرزند ارائه شده</li>
        <li>
        حرف اول متن <code>alt</code>
        </li>
        <li>یک آیکون آواتار عمومی</li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FallbackAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/FallbackAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/FallbackAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        گروه بندی شده
      </Typography>
      <Typography className="mb-40" component="div">
      <code>AvatarGroup</code> فرزندان خود را به صورت استک نمایش می دهد. از پایه <code>max</code> برای محدود کردن تعداد آواتارها استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/GroupAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/GroupAvatars.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       کل آواتار ها
      </Typography>
      <Typography className="mb-40" component="div">
      اگر نیاز به کنترل تعداد کل آواتارهای نشان داده نشده دارید، می توانید از {' '}<code>total</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TotalAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/TotalAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/TotalAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دارای نشان
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/BadgeAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/BadgeAvatars.js')}
        />
      </Typography>
    </>
  );
}

export default AvatarsDoc;
