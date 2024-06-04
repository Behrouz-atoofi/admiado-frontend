import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ChipsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/chips"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        چیپ(Chips)
      </Typography>
      <Typography className="description">
      چیپ ها المنت های فشرده ای هستند که یک ورودی، ویژگی یا عمل را نشان می دهند.
      </Typography>

      <Typography className="mb-40" component="div">
      تراشه‌ها به کاربران اجازه می‌دهند اطلاعات را وارد کنند، انتخاب‌هایی انجام دهند، محتوا را فیلتر کنند یا اقداماتی را آغاز کنند.
      </Typography>
      <Typography className="mb-40" component="div">
      در حالی که در اینجا به عنوان یک کامپوننت مستقل گنجانده شده است، رایج ترین استفاده در برخی از اشکال اینپوت است، بنابراین برخی از رفتارهای نشان داده شده در اینجا در زمینه نشان داده نمی شوند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چیپ اصلی
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت <code>Chip</code> از یک ظاهر طراحی شده و پر شده پشتیبانی می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/BasicChips.js').default}
          raw={require('!raw-loader!../components/chips/BasicChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اقدامات چیپ
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید از اقدامات زیر استفاده کنید.
      </Typography>
      <ul>
        <li>
        تراشه‌های با پراپ <code>onClick</code> ظاهر را در فوکوس، هاور و کلیک تغییر می‌دهند.
        </li>
        <li>
        تراشه‌هایی که پراپ <code>onDelete</code> تعریف شده‌اند، آیکون حذف را نمایش می‌دهند که با شناور ظاهر تغییر می‌کند.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        قابل کلیک
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ClickableChips.js').default}
          raw={require('!raw-loader!../components/chips/ClickableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        قابل حذف
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DeletableChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/DeletableChips.js').default}
          raw={require('!raw-loader!../components/chips/DeletableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      قابل کلیک و  قابل حذف
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableAndDeletableChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ClickableAndDeletableChips.js').default}
          raw={require('!raw-loader!../components/chips/ClickableAndDeletableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      لینک قابل کلیک
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableLinkChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ClickableLinkChips.js').default}
          raw={require('!raw-loader!../components/chips/ClickableLinkChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      آیکون حذف سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomDeleteIconChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/CustomDeleteIconChips.js').default}
          raw={require('!raw-loader!../components/chips/CustomDeleteIconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      تزئینات  چیپ
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید تزئینات را به ابتدای کامپوننت اضافه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      برای افزودن یک آواتار از پراپ<code>avatar</code> یا برای افزودن یک آیکون از پراپ<code>icon</code> استفاده کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       چیپ آواتار
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AvatarChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/AvatarChips.js').default}
          raw={require('!raw-loader!../components/chips/AvatarChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       چیپ آیکون
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/IconChips.js').default}
          raw={require('!raw-loader!../components/chips/IconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       چیپ رنگ
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پراپ <code>color</code> برای تعریف رنگ از پالت تم استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ColorChips.js').default}
          raw={require('!raw-loader!../components/chips/ColorChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        چیپ اندازه
      </Typography>
      <Typography className="mb-40" component="div">
      برای تعریف یک چیپ کوچک می توانید از پراپ <code>size</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizesChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/SizesChips.js').default}
          raw={require('!raw-loader!../components/chips/SizesChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چیپ چند خطی
      </Typography>
      <Typography className="mb-40" component="div">
      به طور پیش فرض، Chips برچسب ها را فقط در یک خط نمایش می دهد. برای اینکه آنها از محتوای چند خطی پشتیبانی کنند، از پایه <code>sx</code> استفاده کنید تا <code>height:auto</code> را به کامپوننت Chip,
    و <code>whiteSpace: normal</code> را به استایل label اضافه کنید. 
 
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultilineChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/MultilineChips.js').default}
          raw={require('!raw-loader!../components/chips/MultilineChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
  آرایه چیپ
      </Typography>
      <Typography className="mb-40" component="div">
      مثالی از رندر کردن چند چیپ از آرایه ای از مقادیر.حذف یک چیپ آن را از آرایه حذف می کند.توجه داشته باشید که از آنجایی که هیچ پراپ <code>onClick</code> تعریف نشده است، <code>Chip</code> را می توان فوکوس کرد، اما با کلیک یا لمس، عمق پیدا نمی کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ChipsArray.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ChipsArray.js').default}
          raw={require('!raw-loader!../components/chips/ChipsArray.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      چیپ پلی گراند
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ChipsPlayground.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ChipsPlayground.js').default}
          raw={require('!raw-loader!../components/chips/ChipsPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
      اگر چیپ قابل حذف یا کلیک باشد، یک دکمه به ترتیب تب است. هنگامی که چیپ متمرکز است (مثلاً هنگام استفاده از زبانه)، با انتشار (<code>keyup</code> رویداد) <code>Backspace</code> یا <code>Delete</code> <code>onDelete</code> را فراخوانی می کند. کنترل کننده هنگام آزاد کردن <code>Escape</code> چیپ را محو می کند.
      </Typography>
    </>
  );
}

export default ChipsDoc;
