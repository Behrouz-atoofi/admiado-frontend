import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PaginationDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/pagination"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        صفحه بندی (Pagination)
      </Typography>
      <Typography className="description">
      مولفه صفحه بندی به کاربر امکان می دهد یک صفحه خاص را از طیف وسیعی از صفحات انتخاب کند.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        صفحه بندی اولیه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicPagination.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/BasicPagination.js').default}
          raw={require('!raw-loader!../components/pagination/BasicPagination.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      صفحه بندی outline دار
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationOutlined.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationOutlined.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationOutlined.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        صفحه بندی  گرد شده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationRounded.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationRounded.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationRounded.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       اندازه صفحه بندی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationSize.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationSize.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دکمه ها
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید به صورت اختیاری دکمه های صفحه اول و صفحه آخر را فعال کنید یا دکمه های صفحه قبل و صفحه بعدی را غیرفعال کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationButtons.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        آیکون های سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      امکان سفارشی کردن آیکون های کنترل وجود دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomIcons.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/CustomIcons.js').default}
          raw={require('!raw-loader!../components/pagination/CustomIcons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      محدوده صفحه بندی
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید تعیین کنید چند رقم در دو طرف صفحه فعلی با پراپ <code>siblingRange</code> و در مجاورت شماره صفحه شروع و پایان با پراپ <code>boundaryRange</code> نمایش داده شود..
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationRanges.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationRanges.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationRanges.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       صفحه بندی کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationControlled.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationControlled.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationControlled.js')}
        />
      </Typography>
      {/*  <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Router integration
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationLink.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationLink.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationLink.js')}
        />
      </Typography>
      */}
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>هوک usePagination</code>
      </Typography>
      <Typography className="mb-40" component="div">
      برای موارد استفاده سفارشی‌سازی پیشرفته، یک هوک بدون سر <code>usePagination()</code> در معرض دید قرار می‌گیرد. تقریباً همان گزینه‌های کامپوننت صفحه‌بندی را منهای همه پراپس های مربوط به رندر کردن JSX می‌پذیرد. جزء صفحه بندی بر روی این هوک ساخته شده است.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import usePagination from '@mui/material/usePagination';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UsePagination.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/UsePagination.js').default}
          raw={require('!raw-loader!../components/pagination/UsePagination.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        صفحه بندی جدول
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت <code>Pagination</code> برای صفحه بندی فهرستی از موارد دلخواه در زمانی که بارگذاری بی نهایت استفاده نمی شود طراحی شده است. در زمینه هایی که SEO مهم است، به عنوان مثال، یک وبلاگ ترجیح داده می شود.
      </Typography>
      <Typography className="mb-40" component="div">
      برای صفحه بندی مجموعه بزرگی از داده های جدولی، باید از کامپوننت <code>TablePagination</code> استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TablePagination.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/TablePagination.js').default}
          raw={require('!raw-loader!../components/pagination/TablePagination.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::هشدار توجه داشته باشید که پراپ صفحه <code>Pagination</code> از عدد 1 شروع می شود تا با الزامات درج مقدار در URL مطابقت داشته باشد، در حالی که پراپ صفحه <code>TablePagination</code> از 0 شروع می شود تا با الزامات مبتنی بر صفر مطابقت داشته باشد. آرایه های جاوا اسکریپت که با ارائه داده های جدولی زیادی همراه است. :::
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید درباره این مورد استفاده در{' '} <a href="/material-ui/react-table/#custom-pagination-options">بخش جدول</a> اسناد بیشتر بیاموزید.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
      گره ریشه به طور پیش فرض نقش "ناوبری" و برچسب آریا "ناوبری صفحه بندی" را دارد. آیتم های صفحه دارای یک برچسب آریا هستند که هدف مورد را مشخص می کند ("رفتن به صفحه اول"، "رفتن به صفحه قبلی"، "رفتن به صفحه 1" و غیره). شما می توانید این موارد را با استفاده از پایه getItemAriaLabel لغو کنید.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        صفحه کلید
      </Typography>
      <Typography className="mb-40" component="div">
      آیتم های صفحه بندی به ترتیب برگه ها با شاخص برگه &quot;0&quot; هستند.
      </Typography>
    </>
  );
}

export default PaginationDoc;
