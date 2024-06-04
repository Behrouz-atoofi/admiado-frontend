import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BoxDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/box"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        جعبه(Box)
      </Typography>
      <Typography className="description">
      کامپوننت Box به عنوان یک کامپوننت بسته بندی برای اکثر نیازهای ابزار CSS عمل می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      کامپوننت Box <a href="/system/properties/">همه توابع سبک</a> را که در <code>@mui/system</code> نشان داده شده اند، بسته بندی می کند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        مثال
      </Typography>
      <Typography className="mb-40" component="div">
      تابع سبک <a href="/system/palette/">پالت</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پراپ <code>sx</code>
      </Typography>
      <Typography className="mb-40" component="div">
      همه ویژگی‌های سیستم از طریق{' '}<a href="/system/getting-started/the-sx-پراپ 
 /"> <code>sx</code> </a> در دسترس هستند
         . علاوه بر این، پراپ <code>sx</code> به شما اجازه می‌دهد تا قوانین CSS دیگری را که ممکن است نیاز داشته باشید مشخص کنید. در اینجا مثالی از نحوه استفاده از آن آورده شده است:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BoxSx.js"
          className="my-24"
          iframe={false}
          component={require('../components/box/BoxSx.js').default}
          raw={require('!raw-loader!../components/box/BoxSx.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     override کردن کامپوننت های  MUI
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت Box کامپوننت شما را می پیچد. یک المنت DOM جدید ایجاد می‌کند، یک{' '} <code>{`<div>`}</code> که به‌طور پیش‌فرض می‌توان آن را با پراپ <code>component</code> تغییر داد.
      بیایید بگوییم که می خواهید به جای آن از یک <code>{`<span>`}</code> استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BoxComponent.js"
          className="my-24"
          iframe={false}
          component={require('../components/box/BoxComponent.js').default}
          raw={require('!raw-loader!../components/box/BoxComponent.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      این زمانی که تغییرات را بتوان به یک المنت DOM جدید جدا کرد، عالی عمل می کند. به عنوان مثال، می توانید مارجین را از این طریق تغییر دهید.
      </Typography>
      <Typography className="mb-40" component="div">
      با این حال، گاهی اوقات باید المنت DOM زیربنایی را هدف قرار دهید.به عنوان مثال، ممکن است بخواهید بردر دکمه را تغییر دهید. کامپوننت Button استایل های خاص خود را تعریف می کند.وراثت CSS کمکی نمی کند. برای حل این مشکل، می‌توانید از پراپ <a href="/system/getting-started/the-sx-prop/"> <code>sx</code></a> مستقیماً بر روی فرزند استفاده کنید اگر جزو کامپوننت MUI باشد
      </Typography>

      <FuseHighlight component="pre" className="language-diff">
        {` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <Button>ذخیره</Button>
-</Box>
+<Button sx={{ border: '1px dashed grey' }}>ذخیره</Button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
      برای کامپوننت های غیر MUI، از پراپ <code>component</code> استفاده کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-diff">
        {` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <button>ذخیره</button>
-</Box>
+<Box component="button" sx={{ border: '1px dashed grey' }}>ذخیره</Box>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       پراپس های سیستم
      </Typography>
      <Typography className="mb-40" component="div">
      به عنوان یک کامپوننت ابزار CSS، <code>Box</code> همچنین از تمام ویژگی‌های <a href="/system/properties/"> <code>system</code></a> پشتیبانی می‌کند.می توانید از آنها به عنوان prop مستقیماً روی کامپوننت استفاده کنید. به عنوان مثال، یک margin-top :
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Box mt={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default BoxDoc;
