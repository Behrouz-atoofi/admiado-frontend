import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function MasonryDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/masonry"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Masonry
      </Typography>
      <Typography className="description">
      Masonry  محتویات با ابعاد مختلف را به صورت بلوک هایی با عرض و ارتفاع متفاوت با شکاف های قابل تنظیم قرار می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      Masonry  فهرستی از بلوک های محتوا را با عرض ثابت اما ارتفاع متفاوت حفظ می کند. مطالب بر اساس ردیف مرتب شده اند. اگر یک ردیف از قبل با تعداد ستون های مشخص شده پر شده باشد، مورد بعدی یک ردیف دیگر را شروع می کند و به منظور بهینه سازی استفاده از فضا به کوتاه ترین ستون اضافه می شود.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      masonry اولیه 
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده از یک <code>masonry</code>. <code>masonry</code> کانتینری برای یک یا چند مورد است.می تواند هر عنصری از جمله <code>{`<div />`}</code> و <code>{`<img />`}</code> را دریافت کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicMasonry.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/BasicMasonry.js').default}
          raw={require('!raw-loader!../components/masonry/BasicMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      masonry تصاویر
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>Masonry</code> را برای تصاویر نشان می دهد. <code>Masonry</code>{' '} فرزندان خود را ردیف می کند. اگر می‌خواهید تصاویر را براساس ستون سفارش دهید، {' '} <a href="/material-ui/react-image-list/#masonry-image-list">ImageList</a> را بررسی کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ImageMasonry.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/ImageMasonry.js').default}
          raw={require('!raw-loader!../components/masonry/ImageMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آیتم ها با ارتفاع متغیر
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>Masonry</code> را برای موارد با ارتفاع متغیر نشان می دهد.
      آیتم‌ها می‌توانند به ستون‌های دیگر منتقل شوند تا از این قانون پیروی کنند که موارد همیشه به کوتاه‌ترین ستون اضافه می‌شوند و در نتیجه استفاده از فضا را بهینه می‌کنند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MasonryWithVariableHeightItems.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/MasonryWithVariableHeightItems.js').default}
          raw={require('!raw-loader!../components/masonry/MasonryWithVariableHeightItems.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ستون ها
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>ستون‌ها</code> را برای پیکربندی تعداد ستون‌های یک <code>Masonry</code> نشان می‌دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedColumns.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/FixedColumns.js').default}
          raw={require('!raw-loader!../components/masonry/FixedColumns.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      <code>columns</code> مقادیر ریسپانسیو را می پذیرد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveColumns.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/ResponsiveColumns.js').default}
          raw={require('!raw-loader!../components/masonry/ResponsiveColumns.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      فاصله گذاری
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>spacing</code> را برای پیکربندی فاصله بین آیتم ها نشان می دهد.توجه به این نکته مهم است که prop ارائه شده به قسمت <code>spacing</code>{' '} در قسمت فاصله موضوع ضرب می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedSpacing.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/FixedSpacing.js').default}
          raw={require('!raw-loader!../components/masonry/FixedSpacing.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      <code>spacing</code> مقادیر ریسپانسیو را می پذیرد:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveSpacing.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/ResponsiveSpacing.js').default}
          raw={require('!raw-loader!../components/masonry/ResponsiveSpacing.js')}
        />
      </Typography>
      {/* <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side rendering
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>defaultHeight</code>,{' '}
        <code>defaultColumns</code> and <code>defaultSpacing</code>, which are used to support
        server-side rendering.
      </Typography>
      <Typography className="mb-40" component="div">
        :::info
        <code>defaultHeight</code> should be large enough to render all rows. Also, it is worth
        mentioning that items are not added to the shortest column in case of server-side rendering.
        :::
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SSRMasonry.js"
          className="my-24"
          iframe={false}
          component={require('../components/masonry/SSRMasonry.js').default}
          raw={require('!raw-loader!../components/masonry/SSRMasonry.js')}
        />
      </Typography> */}
    </>
  );
}

export default MasonryDoc;
