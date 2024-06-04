import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ModalDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/modal"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        مدال (Modal)
      </Typography>
      <Typography className="description">
      کامپوننت مودال یک پایه محکم برای ایجاد دیالوگ، پاپاور، لایت باکس یا هر چیز دیگری فراهم می کند.
      </Typography>

      <Typography className="mb-40" component="div">
      کامپوننت گره <code>فرزند</code> خود را در مقابل کامپوننت پس‌زمینه نمایش می‌دهد. {' '}<code>Modal</code> ویژگی‌های مهمی را ارائه می‌کند:
      </Typography>
      <ul>
      <li>💄 وقتی یکباره کافی نیست، انباشته شدن حالت را مدیریت می کند.</li>
         <li>🔐 یک پس‌زمینه برای غیرفعال کردن تعامل زیر مدال ایجاد می‌کند.</li>
         <li>🔐 پیمایش محتوای صفحه را در حالت باز غیرفعال می کند.</li>
        <li>
        ♿️ فوکوس را به درستی مدیریت می کند. حرکت به محتوای مودال، و نگه داشتن آن تا زمانی که مدال بسته شود.
        </li>
        <li>♿️ نقش های ARIA مناسب را به صورت خودکار اضافه می کند.</li>
      </ul>
      <Typography className="mb-40" component="div">
        :::info اصطلاح &quot;مدال&raquo; گاهی اوقات به معنای "دیالوگ،" استفاده می شود، اما این یک نام اشتباه است.یک پنجره مودال بخش هایی از یک رابط کاربری را توصیف می کند. المنتی معین در نظر گرفته می شود اگر{' '}<a href="https://en.wikipedia.org/wiki/Modal_window"> تعامل با بقیه برنامه را مسدود کند
        </a>
        . :::
      </Typography>
      <Typography className="mb-40" component="div">
      اگر در حال ایجاد یک دیالوگ مودال هستید، احتمالاً می خواهید به جای استفاده مستقیم از Modal از کامپوننت <a href="/material-ui/react-dialog/">Dialog</a> استفاده کنید. Modal یک ساختار سطح پایین تر است که توسط کامپوننت های زیر استفاده می شود:
      </Typography>
      <ul>
        <li>
          <a href="/material-ui/react-dialog/">دیالوگ</a>
        </li>
        <li>
          <a href="/material-ui/react-drawer/">کشو</a>
        </li>
        <li>
          <a href="/material-ui/react-menu/">منو</a>
        </li>
        <li>
          <a href="/material-ui/react-popover/">پاپ اور</a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مدال اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/BasicModal.js').default}
          raw={require('!raw-loader!../components/modal/BasicModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      توجه داشته باشید که می توانید طرح کلی (اغلب آبی یا طلایی) را با ویژگی <code>outline: 0</code> CSS غیرفعال کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       مدال تو در تو
      </Typography>
      <Typography className="mb-40" component="div">
      مدال‌ها را می‌توان تو در تو قرار داد، برای مثال انتخاب در یک دیالوگ اما انباشتن بیش از دو مدال یا هر دو مدال با پس‌زمینه ممنوع است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/NestedModal.js').default}
          raw={require('!raw-loader!../components/modal/NestedModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ترنزیشن ها
      </Typography>
      <Typography className="mb-40" component="div">
      استیت باز/بستن مودال را می توان با یک کامپوننت ترنزیشن متحرک کرد. این کامپوننت باید شرایط زیر را رعایت کند:
      </Typography>
      <ul>
        <li>یک فرزند مستقیم از نوادگان مدال باشید.</li>
        <li>
        یک پراپ <code>in</code> داشته باشید. این مربوط به استیت  باز/بستن است.
        </li>
        <li>
        هنگامی که ترنزیشن enter شروع می شود، پراپ  کالبک <code>onEnter</code> را فراخوانی کنید.
        </li>
        <li>
        هنگامی که انتقال خروج کامل شد،    پراپ  کالبک <code>onExited</code> را فراخوانی کنید. این دو کالبک  به modal اجازه می‌دهد تا محتوای فرزند را در صورت بسته شدن و انتقال کامل، جدا کند.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
      Modal از <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a> پشتیبانی داخلی دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/TransitionsModal.js').default}
          raw={require('!raw-loader!../components/modal/TransitionsModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین می‌توانید از <a href="https://github.com/pmndrs/react-spring">react-spring</a> استفاده کنید
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpringModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/SpringModal.js').default}
          raw={require('!raw-loader!../components/modal/SpringModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      کارایی
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای modal هنگامی که بسته می‌شود، mount نمی‌شود. اگر می‌خواهید محتوا را در دسترس موتورهای جستجو قرار دهید یا درخت‌های کامپوننت گران‌قیمت را در داخل مدال خود ارائه دهید و در عین حال برای پاسخ‌گویی تعامل بهینه‌سازی کنید، ممکن است ایده خوبی باشد که این رفتار پیش‌فرض را با فعال کردن پراپ <code>keepMounted</code> تغییر دهید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Modal keepMounted />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="KeepMountedModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/KeepMountedModal.js').default}
          raw={require('!raw-loader!../components/modal/KeepMountedModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      مانند هر بهینه سازی عملکرد، این یک گلوله نقره ای نیست. حتما ابتدا تنگناها را شناسایی کنید و سپس این استراتژی های بهینه سازی را امتحان کنید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       مدال سمت سرور
      </Typography>
      <Typography className="mb-40" component="div">
        ری اکت  ای پی آی  {' '}
        <a href="https://react.dev/reference/react-dom/createPortal">
          <code>createPortal()</code> 
        </a>{' '}
       روی سرور را <a href="https://github.com/facebook/react/issues/13097">ساپورت نمیکند</a>.برای نمایش مدال، باید ویژگی پورتال را با پراپ <code>disablePortal</code> غیرفعال کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ServerModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/ServerModal.js').default}
          raw={require('!raw-loader!../components/modal/ServerModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محدودیت ها
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
     تله فوکوس
      </Typography>
      <Typography className="mb-40" component="div">
      اگر فوکوس سعی کند از آن خارج شود، مودال فوکوس را به بدنه کامپوننت برمی‌گرداند.
      </Typography>
      <Typography className="mb-40" component="div">
      این برای اهداف دسترسی انجام می شود. با این حال، ممکن است مشکلاتی ایجاد کند. در صورتی که کاربران نیاز به تعامل با بخش دیگری از صفحه داشته باشند، به عنوان مثال. با یک پنجره چت بات، می توانید رفتار را غیرفعال کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Modal disableEnforceFocus />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">
          https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
        </a>
        )
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
          حتماً <code>{`aria-labelledby="id..."`}</code> را با ارجاع به عنوان مدال به <code>Modal</code> اضافه کنید. علاوه بر این، می‌توانید با پراپ <code>{`aria-describedby="id..."`}</code> در <code>Modal</code>، توضیحی از مدال خود ارائه دهید.
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<Modal aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">عنوان من</h2>
  <Typography id="modal-description">توضیحات من</Typography>
</Modal>
`}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            
            <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/">
              WAI-ARIA شیوه های تألیف 
            </a>{' '}
            می تواند به شما کمک کند تا تمرکز اولیه را بر روی مرتبط ترین عنصر، بر اساس محتوای مودال خود قرار دهید.
          </Typography>
        </li>
        <li>
          <Typography className="mb-40" component="div">
          به خاطر داشته باشید که &quot;پنجره مودال&raquo; روی پنجره اصلی یا پنجره مودال دیگری همپوشانی دارد. ویندوزهای تحت یک مدال <strong>بی اثر</strong> هستند. یعنی کاربران نمی توانند با محتوای خارج از یک پنجره مودال فعال تعامل داشته باشند. این ممکن است <a href="#focus-trap">رفتارهای متناقضی</a> ایجاد کند.
          </Typography>
        </li>
      </ul>
    </>
  );
}

export default ModalDoc;
