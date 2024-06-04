import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function CardsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/cards"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        کارت(Card)
      </Typography>
      <Typography className="description">
      کارت ها حاوی محتوا و اقدامات مربوط به یک موضوع واحد هستند.
      </Typography>

      <Typography className="mb-40" component="div">
      کارت ها سطوحی هستند که محتوا و اقدامات مربوط به یک موضوع را نمایش می دهند.
      </Typography>
      <Typography className="mb-40" component="div">
      اسکن آنها برای اطلاعات مرتبط و قابل اجرا باید آسان باشد. عناصری مانند متن و تصاویر باید به گونه ای روی آنها قرار گیرند که به وضوح نشان دهنده سلسله مراتب باشد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       کارت اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      اگرچه کارت‌ها می‌توانند چندین عملکرد، کنترل‌های UI و منوی سرریز را پشتیبانی کنند، از محدودیت استفاده کنید و به یاد داشته باشید که کارت‌ها نقاط ورود به اطلاعات پیچیده‌تر و دقیق‌تر هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/BasicCard.js').default}
          raw={require('!raw-loader!../components/cards/BasicCard.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کارت مشخص شده (outlined)
      </Typography>
      <Typography className="mb-40" component="div">
      <code>{`variant="outlined"`}</code> را برای ارائه یک کارت مشخص شده تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/OutlinedCard.js').default}
          raw={require('!raw-loader!../components/cards/OutlinedCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تعامل پیچیده
      </Typography>
      <Typography className="mb-40" component="div">
      در دسکتاپ، محتوای کارت می تواند گسترش یابد. (برای مشاهده دستور غذا بر روی chevron رو به پایین کلیک کنید.)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RecipeReviewCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/RecipeReviewCard.js').default}
          raw={require('!raw-loader!../components/cards/RecipeReviewCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      رسانه ها
      </Typography>
      <Typography className="mb-40" component="div">
      نمونه کارتی که از یک تصویر برای تقویت محتوا استفاده می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MediaCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/MediaCard.js').default}
          raw={require('!raw-loader!../components/cards/MediaCard.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش‌فرض، از ترکیب یک المنت <code>{`<div>`}</code> و یک{' '}<em>تصویر پس‌زمینه</em> برای نمایش رسانه استفاده می‌کنیم.. It can be problematic in some situations,
      برای مثال، ممکن است بخواهید یک ویدیو یا یک تصویر واکنشگرا نمایش دهید. برای موارد استفاده از {' '} <code>component</code> prop استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ImgMediaCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/ImgMediaCard.js').default}
          raw={require('!raw-loader!../components/cards/ImgMediaCard.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      :::هشدار وقتی <code>{`component="img"`}</code>، CardMedia برای وسط تصویر به{' '}<code>object-fit</code> متکی است. توسط IE11 پشتیبانی نمی شود. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اقدام اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      اغلب یک کارت به کاربران اجازه می دهد تا با تمام سطح آن تعامل داشته باشند تا عملکرد اصلی آن را آغاز کنند، خواه یک بسط، پیوند به صفحه دیگر یا رفتارهای دیگر..ناحیه عمل کارت را می توان با قرار دادن محتویات آن در یک <code>CardActionArea</code>{' '}کامپوننت مشخص کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActionAreaCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/ActionAreaCard.js').default}
          raw={require('!raw-loader!../components/cards/ActionAreaCard.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      یک کارت همچنین می تواند اقدامات تکمیلی را ارائه دهد که باید از ناحیه اصلی عمل جدا باشد تا از همپوشانی رویدادها جلوگیری شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultiActionAreaCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/MultiActionAreaCard.js').default}
          raw={require('!raw-loader!../components/cards/MultiActionAreaCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کنترل های رابط کاربری
      </Typography>
      <Typography className="mb-40" component="div">
      اقدامات تکمیلی در کارت به صراحت با استفاده از آیکونها ، متن و کنترل‌های رابط کاربری که معمولاً در پایین کارت قرار می‌گیرند، فراخوانی می‌شوند.
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از کارت کنترل رسانه آورده شده است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MediaControlCard.js"
          className="my-24"
          iframe={false}
          component={require('../components/cards/MediaControlCard.js').default}
          raw={require('!raw-loader!../components/cards/MediaControlCard.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      🎨 اگر به دنبال الهام هستید، می‌توانید{' '} <a href="https://mui-treasury.com/components/card/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید
         .
      </Typography>
    </>
  );
}

export default CardsDoc;
