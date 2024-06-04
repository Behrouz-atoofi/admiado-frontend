import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BreadcrumbsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/breadcrumbs"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        بردکرامب ها(Breadcrumbs)
      </Typography>
      <Typography className="description">
      Breadcrumbs شامل فهرستی از پیوندها است که به کاربر کمک می کند مکان یک صفحه را در ساختار سلسله مراتبی یک وب سایت تجسم کند و امکان پیمایش تا هر یک از "اجداد" آن را فراهم می کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بردکرامب اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/BasicBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/BasicBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      آخرین بردکرامب فعال
      </Typography>
      <Typography className="mb-40" component="div">
      آخرین بردکرامب را تعاملی نگه میدارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActiveLastBreadcrumb.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/ActiveLastBreadcrumb.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/ActiveLastBreadcrumb.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جداکننده سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      در مثال های زیر از دو جداکننده رشته و یک آیکون SVG استفاده می کنیم.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomSeparator.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/CustomSeparator.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/CustomSeparator.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
    بردکرامب با آیکون
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/IconBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/IconBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بردکرامب جمع شده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CollapsedBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/CollapsedBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/CollapsedBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در {' '}<a href="/material-ui/customization/how-to-customize/">صفحه اسناد  overrides</a> درباره این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/CustomizedBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/CustomizedBreadcrumbs.js')}
        />
      </Typography>
      {/*   <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Integration with react-router
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RouterBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/RouterBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/RouterBreadcrumbs.js')}
        />
      </Typography> */}
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/">
          https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      حتماً یک توضیح <code>aria-label</code> در کامپوننت <code>Breadcrumbs</code>{' '} اضافه کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      دسترسی به این کامپوننت به موارد زیر بستگی دارد:
      </Typography>
      <ul>
        <li>
        مجموعه لینک ها با استفاده از یک لیست مرتب شده (عنصر <code>{`<ol>`}</code>) ساختار یافته است.
        </li>
        <li>
        برای جلوگیری از اعلام صفحه‌خوان جداکننده‌های بصری بین لینک ها، آنها با <code>aria-hidden</code> پنهان می‌شوند.
        </li>
        <li>
        یک عنصر nav برچسب شده با <code>aria-label</code> ساختار را به عنوان یک دنباله  بردکرامب شناسایی می کند و آن را به یک نقطه عطف ناوبری تبدیل می کند تا مکان یابی آسان باشد.
        </li>
      </ul>
    </>
  );
}

export default BreadcrumbsDoc;
