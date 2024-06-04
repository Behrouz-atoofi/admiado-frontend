import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SkeletonDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/skeleton"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
اسکلتون(Skeleton)      </Typography>
      <Typography className="description">
      پیش نمایش نگهدارنده مکان از محتوای خود قبل از بارگیری داده ها برای کاهش ناامیدی در زمان بارگذاری، نمایش دهید.
      </Typography>

      <Typography className="mb-40" component="div">
      ممکن است داده‌های اجزای شما فوراً در دسترس نباشد. با استفاده از Skeleton ها می توانید واکنش پذیری صفحه را بهبود بخشید.به نظر می رسد همه چیز بلافاصله اتفاق می افتد، سپس اطلاعات به صورت تدریجی روی صفحه نمایش داده می شود (ر.ک.{' '} <a href="https://www.lukew.com/ff/entry.asp?1797">Avoid The اسپینر</a>).
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        استفاده
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت طوری طراحی شده است که <strong>مستقیماً در کامپوننت شما</strong> استفاده شود. برای مثال:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
{
  item ? (
    <img
      style={{
        width: 210,
        height: 118,
      
      alt={item.title}
      src={item.src}
    />
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      انواع
      </Typography>
      <Typography className="mb-40" component="div">
      این کامپوننت از 4 نوع شکل پشتیبانی می کند:
      </Typography>
      <ul>
        <li>
        <code>text</code> (پیش‌فرض): نشان‌دهنده یک خط متن است (می‌توانید ارتفاع را از طریق فونت سایز تنظیم کنید).
        </li>
        <li>
        <code>دایره</code>، <code>مستطیلی</code>، و <code>گرد</code>: با شعاع مرزی متفاوتی ارائه می‌شود تا به شما امکان کنترل اندازه را بدهد.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Variants.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/Variants.js').default}
          raw={require('!raw-loader!../components/skeleton/Variants.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        انیمیشن
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، Skeleton می تپد، اما شما می توانید انیمیشن را به یک موج تغییر دهید یا آن را به طور کامل غیرفعال کنید..
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Animations.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/Animations.js').default}
          raw={require('!raw-loader!../components/skeleton/Animations.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      نمونه ضربان دار
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="YouTube.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/YouTube.js').default}
          raw={require('!raw-loader!../components/skeleton/YouTube.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       نمونه موج
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Facebook.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/Facebook.js').default}
          raw={require('!raw-loader!../components/skeleton/Facebook.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      استنباط ابعاد
      </Typography>
      <Typography className="mb-40" component="div">
      علاوه بر پذیرش المنت های <code>width</code> و <code>height</code>، کامپوننت می‌تواند ابعاد را نیز استنتاج کند.
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی صحبت از تایپوگرافی به میان می آید خوب کار می کند زیرا ارتفاع آن با استفاده از واحدهای <code>em</code> تنظیم می شود.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonTypography.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/SkeletonTypography.js').default}
          raw={require('!raw-loader!../components/skeleton/SkeletonTypography.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      اما وقتی صحبت از کامپوننت های دیگر می شود، ممکن است نخواهید عرض و ارتفاع را تکرار کنید. در این موارد، می توانید <code>فرزندان</code> را پاس کنید و عرض و ارتفاع آن را از آنها استنباط می کند.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
loading ? (
  <Skeleton variant="circular">
    <Avatar />
  </Skeleton>
) : (
  <Avatar src={data.avatar} />
);
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonChildren.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/SkeletonChildren.js').default}
          raw={require('!raw-loader!../components/skeleton/SkeletonChildren.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      رنگ کامپوننت را می توان با تغییر ویژگی <code>background-color</code>{' '}CSS آن سفارشی کرد. این به ویژه هنگامی مفید است که روی یک پس‌زمینه سیاه قرار گیرد (زیرا skeleton در غیر این صورت نامرئی خواهد بود).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonColor.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/SkeletonColor.js').default}
          raw={require('!raw-loader!../components/skeleton/SkeletonColor.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      صفحات skeleton جایگزینی برای روش سنتی اسپینر ارائه می دهند. به‌جای نمایش یک ویجت انتزاعی، صفحه‌های اسکلت پیش‌بینی چیزی را ایجاد می‌کنند که قرار است بیاید و بار شناختی را کاهش می‌دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      رنگ پس زمینه skeleton از کمترین میزان درخشندگی استفاده می کند تا در شرایط خوب قابل مشاهده باشد (نور محیط خوب، صفحه نمایش خوب، بدون نقص بینایی).
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
      هیچ یک.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      skeleton قابل فوکوس کردن نمیباشد.
      </Typography>
    </>
  );
}

export default SkeletonDoc;
