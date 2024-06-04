import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function MenusDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/menus"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        منو
      </Typography>
      <Typography className="description">
      منوها فهرستی از انتخاب ها را روی سطوح موقت نمایش می دهند.
      </Typography>

      <Typography className="mb-40" component="div">
      یک منو لیستی از انتخاب ها را روی یک سطح موقت نمایش می دهد. زمانی ظاهر می شود که کاربر با یک دکمه یا کنترل دیگر تعامل داشته باشد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       منو اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      یک منوی اصلی به طور پیش‌فرض روی عنصر لنگر باز می‌شود (این گزینه می‌تواند{' '}<a href="#menu-positioning">تغییر</a> از طریق props باشد). هنگامی که به لبه صفحه نزدیک می شود، یک منوی اصلی به صورت عمودی مجدداً تنظیم می شود تا مطمئن شود که همه موارد منو کاملاً قابل مشاهده هستند.
      </Typography>
      <Typography className="mb-40" component="div">
      انتخاب یک گزینه باید فوراً گزینه را commit کرده و منو را ببندد.
      </Typography>
      <Typography className="mb-40" component="div">
      <strong>ابهام‌زدایی</strong>: برخلاف منوهای ساده، گفتگوهای ساده می‌توانند جزئیات بیشتری را در رابطه با گزینه‌های موجود برای یک مورد فهرست ارائه دهند یا اقدامات ناوبری یا متعامد مربوط به کار اصلی را ارائه دهند. اگرچه می‌توانند محتوای یکسانی را نمایش دهند، اما منوهای ساده به دیالوگ‌های ساده ترجیح داده می‌شوند، زیرا منوهای ساده کمتر مخل شرایط فعلی کاربر هستند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/BasicMenu.js').default}
          raw={require('!raw-loader!../components/menus/BasicMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آیکون منو
      </Typography>
      <Typography className="mb-40" component="div">
      در نمای دسکتاپ، padding افزایش یافته است تا فضای بیشتری به منو داده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/IconMenu.js').default}
          raw={require('!raw-loader!../components/menus/IconMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      منوی متراکم
      </Typography>
      <Typography className="mb-40" component="div">
      برای منویی که فهرست طولانی و متن طولانی دارد، می‌توانید از prop <code>dense</code> برای کاهش حجم و اندازه متن استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/DenseMenu.js').default}
          raw={require('!raw-loader!../components/menus/DenseMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       منو انتخاب شده
      </Typography>
      <Typography className="mb-40" component="div">
      اگر برای انتخاب مورد استفاده می شود، وقتی باز می شود، منوهای ساده تمرکز اولیه را روی آیتم منوی انتخاب شده قرار می دهند. مورد منوی فعلی انتخاب شده با استفاده از پایه <code>انتخاب</code>{' '} (از <a href="/material-ui/api/list-item/">ListItem</a>) تنظیم می شود. برای استفاده از یک آیتم منوی انتخاب شده بدون تأثیر بر فوکوس اولیه، پراپ <code>Variant</code> را روی &quot;menu&quot; تنظیم کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleListMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/SimpleListMenu.js').default}
          raw={require('!raw-loader!../components/menus/SimpleListMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       پوزیشن منو
      </Typography>
      <Typography className="mb-40" component="div">
      از آنجایی که کامپوننت <code>Menu</code> از کامپوننت <code>Popover</code> برای موقعیت‌یابی استفاده می‌کند، می‌توانید از همان{' '}<a href="/material-ui/react-popover/# استفاده کنید. anchor-playground">پراپس موقعیت یابی</a> برای قرار دادن آن. به عنوان مثال، می توانید منو را در بالای لنگر نمایش دهید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/PositionedMenu.js').default}
          raw={require('!raw-loader!../components/menus/PositionedMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      ترکیب فهرست منو
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت <code>Menu</code> از کامپوننت <code>Popover</code> به صورت داخلی استفاده می کند. با این حال، ممکن است بخواهید از استراتژی موقعیت یابی متفاوتی استفاده کنید یا اسکرول را مسدود نکنید. برای پاسخ به این نیازها، یک کامپوننت <code>MenuList</code> را که می‌توانید با <code>Popper</code> در این مثال بنویسید، در معرض دید قرار می‌دهیم.
      </Typography>
      <Typography className="mb-40" component="div">
      مسئولیت اصلی کامپوننت <code>MenuList</code> مدیریت تمرکز است.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MenuListComposition.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/MenuListComposition.js').default}
          raw={require('!raw-loader!../components/menus/MenuListComposition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      منوی حساب کاربری
      </Typography>
      <Typography className="mb-40" component="div">
      محتوای <code>منو</code> را می توان با کامپوننت های دیگری مانند <code>آواتار</code> ترکیب کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccountMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/AccountMenu.js').default}
          raw={require('!raw-loader!../components/menus/AccountMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در{' '} <a href="/material-ui/customization/how-to-customize/">صفحه اسناد  overrides </a> درباره این موضوع بیشتر بیاموزید..
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedMenus.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/CustomizedMenus.js').default}
          raw={require('!raw-loader!../components/menus/CustomizedMenus.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      MenuItem یک بسته بندی در اطراف ListItem با چند سبک اضافی است. می توانید از همان ویژگی های ترکیب لیست با کامپوننت MenuItem استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
      🎨 اگر به دنبال الهام هستید، می‌توانید{' '}<a href="https://mui-treasury.com/styles/menu/"> نمونه‌های سفارشی‌سازی MUI Treasury </a> را بررسی کنید.
         .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      منوی حداکثر ارتفاع
      </Typography>
      <Typography className="mb-40" component="div">
      اگر ارتفاع یک منو مانع از نمایش همه آیتم های منو شود، منو می تواند به صورت داخلی اسکرول کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LongMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/LongMenu.js').default}
          raw={require('!raw-loader!../components/menus/LongMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        محدودیت ها
      </Typography>
      <Typography className="mb-40" component="div">
      {' '} <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=327437">یک اشکال flexbox</a>{' '} وجود دارد که از <code> جلوگیری می‌کند text-overflow: ellipsis</code> از کار در طرح بندی flexbox. می‌توانید از کامپوننت <code>Typography</code> با <code>noWrap</code> برای حل این مشکل استفاده کنید:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TypographyMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/TypographyMenu.js').default}
          raw={require('!raw-loader!../components/menus/TypographyMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       تغییر ترنزیشن
      </Typography>
      <Typography className="mb-40" component="div">
      از یک ترنزیشن متفاوت استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FadeMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/FadeMenu.js').default}
          raw={require('!raw-loader!../components/menus/FadeMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      منوی context
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از منوی context است. (برای باز کردن کلیک راست کنید.)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ContextMenu.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/ContextMenu.js').default}
          raw={require('!raw-loader!../components/menus/ContextMenu.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پروژه های تکمیلی
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده پیشرفته تر، ممکن است بتوانید از مزایای زیر استفاده کنید:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کمک کننده PopupState
      </Typography>
      <Typography className="mb-40" component="div">
      یک بسته شخص ثالث وجود دارد{' '} <a href="https://github.com/jcoreio/material-ui-popup-state"><code>material-ui-popup-state</code> </ a>{' '} که در اکثر موارد از وضعیت منو برای شما مراقبت می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MenuPopupState.js"
          className="my-24"
          iframe={false}
          component={require('../components/menus/MenuPopupState.js').default}
          raw={require('!raw-loader!../components/menus/MenuPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default MenusDoc;
