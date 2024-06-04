import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function LinksDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/links"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        لینک ها
      </Typography>
      <Typography className="description">
      کامپوننت لینک به شما امکان می دهد تا به راحتی عناصر لنگر را با رنگ های تم و سبک های تایپوگرافی خود سفارشی کنید.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        لینک های پایه
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت لینک در بالای کامپوننت{' '}<a href="/material-ui/api/typography/">تایپوگرافی</a> ساخته شده است، به این معنی که می توانید از پراپس های آن استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Links.js"
          className="my-24"
          iframe={false}
          component={require('../components/links/Links.js').default}
          raw={require('!raw-loader!../components/links/Links.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      با این حال، کامپوننت Link دارای چندین ویژگی پیش‌فرض متفاوت از کامپوننت تایپوگرافی است:
      </Typography>
      <ul>
        <li>
          <code>{`color="primary"`}</code> همانطور که پیوند باید برجسته باشد.
        </li>
        <li>
          <code>{`variant="inherit"`}</code> به عنوان Link بیشتر اوقات، به عنوان فرزند یک کامپوننت تایپوگرافی استفاده می شود.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      زیر خط
      </Typography>
      <Typography className="mb-40" component="div">
      برای تنظیم رفتار underline می‌توان از prop <code>underline</code> استفاده کرد. پیش‌فرض {' '}<code>همیشه</code> است.
      
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnderlineLink.js"
          className="my-24"
          iframe={false}
          component={require('../components/links/UnderlineLink.js').default}
          raw={require('!raw-loader!../components/links/UnderlineLink.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        امنیت
      </Typography>
      <Typography className="mb-40" component="div">
      وقتی از <code>{`target="_blank"`}</code> با لینک ها استفاده می کنید،{' '}
   <a href="https://developers.google.com/web/tools/lighthouse/audits/noopener">توصیه می‌شود</a>{' '}برای تنظیم همیشه <code>{`rel="noopener"`} </code> یا <code>{`rel="noreferrer"`}</code> هنگام پیوند دادن به محتوای شخص ثالث.

     
      </Typography>
      <ul>
        <li>
        <code>{`rel="noopener"`}</code> از دسترسی صفحه جدید به ویژگی <code>window.opener</code> جلوگیری می کند و اطمینان می دهد که در یک فرآیند جداگانه اجرا می شود..بدون این، صفحه هدف به طور بالقوه می تواند صفحه شما را به یک URL مخرب هدایت کند.
        </li>
        <li>
        <code>{`rel="noreferrer"`}</code> همین اثر را دارد، اما از ارسال سرصفحه{' '}<em>Referer</em> به صفحه جدید نیز جلوگیری می‌کند. ⚠️حذف هدر ارجاع دهنده بر تجزیه و تحلیل تأثیر می گذارد.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کتابخانه مسیریابی شخص ثالث(  Third-party routing library)
      </Typography>
      <Typography className="mb-40" component="div">
      یکی از موارد استفاده مکرر این است که فقط روی کلاینت پیمایش انجام شود، بدون اینکه HTTP رفت و برگشت به سرور داشته باشد. کامپوننت <code>Link</code> پراپ <code>component</code> را برای رسیدگی به این مورد استفاده فراهم می کند. در اینجا یک{' '} <a href="/material-ui/guides/routing/#link">راهنمای دقیق تر</a> وجود دارد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/link/">
          https://www.w3.org/WAI/ARIA/apg/patterns/link/
        </a>
        )
      </Typography>
      <ul>
        <li>
        هنگام ارائه محتوای پیوند، از توضیحات عمومی مانند "اینجا کلیک کنید" یا "رفتن به" اجتناب کنید. در عوض، از     <a href="https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text">
           توصیفات خاص
          </a> استفاده کنید.

       
        </li>
        <li>
        برای بهترین تجربه کاربری، لینک ها باید از متن موجود در صفحه متمایز باشند. برای مثال، می‌توانید رفتار پیش‌فرض <code>{`underline="always"`}</code> را حفظ کنید.
        </li>
        <li>
        اگر پیوندی دارای href معنی‌دار نباشد،  باید با <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">استفاده از عنصر <code>{`<button>`}</code>  </a> ارائه شود. دمو زیر نحوه پیوند صحیح با <code>{`<button>`}</code> را نشان می دهد:

        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonLink.js"
          className="my-24"
          iframe={false}
          component={require('../components/links/ButtonLink.js').default}
          raw={require('!raw-loader!../components/links/ButtonLink.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دسترسی به صفحه کلید
      </Typography>
      <ul>
        <li>
        هنگامی که کاربر کلید {' '} <kbd className="key">Tab</kbd> را فشار می دهد، عناصر تعاملی باید به ترتیب منسجمی فوکوس شوند.
        </li>
        <li>
        کاربران باید بتوانند با فشار دادن <kbd className="key">Enter</kbd> لینکی را باز کنند.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      دسترسی به صفحه‌خوان
      </Typography>
      <ul>
        <li>
        هنگامی که یک پیوند فوکوس دریافت می کند، خوانندگان صفحه باید یک نام لینک توصیفی را اعلام کنند. If the
        پیوند در یک پنجره یا برگه مرورگر جدید باز می شود، یک{' '} اضافه کنید
  <a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8">
  <code>aria-label</code> </a>{' '} برای اطلاع دادن به کاربران صفحه‌خوان—برای مثال،{' '}<em>&quot;برای کسب اطلاعات بیشتر، از صفحه درباره بازدید کنید که در یک پنجره جدید باز می‌شود .&quot;</em>
        </li>
      </ul>
    </>
  );
}

export default LinksDoc;
