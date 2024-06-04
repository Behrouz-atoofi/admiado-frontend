import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TableDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/table"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        جدول
      </Typography>
      <Typography className="description">
      جداول مجموعه ای از داده ها را نمایش می دهد. آنها را می توان به طور کامل سفارشی کرد.
      </Typography>

      <Typography className="mb-40" component="div">
      جداول اطلاعات را به گونه‌ای نمایش می‌دهند که اسکن آن آسان است، به طوری که کاربران می‌توانند الگوها و بینش‌ها را جستجو کنند.. آنها را می توان در محتوای اصلی، مانند کارت ها، جاسازی کرد. و می توانند شامل موارد زیر باشند:
      </Typography>
      <ul>
        <li>تجسم مربوطه</li>
        <li>ناوبری</li>
        <li>ابزارهایی برای پرس و جو و دستکاری داده ها</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       جدول پایه
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده بدون حاشیه.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/BasicTable.js').default}
          raw={require('!raw-loader!../components/table/BasicTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول داده
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت <code>جدول</code> نگاشت نزدیک به المنت های بومی <code>{`<table>`}</code>{' '} دارد. این محدودیت ساخت جداول داده های غنی را چالش برانگیز می کند.
      </Typography>
      <Typography className="mb-40" component="div">
      کامپوننت {' '} <a href="/x/react-data-grid/"><code>DataGrid</code> </a>{' '} برای موارد استفاده‌ای طراحی شده است که بر روی کارکردن موارد بزرگ متمرکز شده‌اند مقادیر داده های جدولی در حالی که ساختار سفت‌تری دارد، در عوض، ویژگی‌های قدرتمندتری به دست می‌آورید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DataTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/DataTable.js').default}
          raw={require('!raw-loader!../components/table/DataTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       جدول متراکم
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده از یک جدول متراکم بدون حاشیه.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/DenseTable.js').default}
          raw={require('!raw-loader!../components/table/DenseTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      مرتب سازی و انتخاب
      </Typography>
      <Typography className="mb-40" component="div">
      این مثال استفاده از <code>Checkbox</code> و ردیف‌های قابل کلیک برای انتخاب را با یک <code>Toolbar</code> سفارشی نشان می‌دهد که از کامپوننت <code>TableSortLabel</code> برای کمک به استایل کردن سرفصل‌های ستون استفاده می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
      به جدول یک عرض ثابت داده شده است تا اسکرول افقی را نشان دهد.به منظور جلوگیری از پیمایش کنترل های صفحه بندی، کامپوننت TablePagination خارج از جدول استفاده می شود. 
      (مثال <a href='#custom-pagination-actions'>"عمل صفحه بندی جدول سفارشی"</a> در زیر صفحه بندی را در TableFooter نشان می دهد)

\
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EnhancedTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/EnhancedTable.js').default}
          raw={require('!raw-loader!../components/table/EnhancedTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از سفارشی سازی کامپوننت آورده شده است. می‌توانید در{' '} <a href="/material-ui/customization/how-to-customize/">صفحه اسناد override</a> در مورد این موضوع بیشتر بیاموزید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTables.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/CustomizedTables.js').default}
          raw={require('!raw-loader!../components/table/CustomizedTables.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      گزینه های صفحه بندی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توان گزینه‌های نشان‌داده‌شده در «ردیف در صفحه» را با استفاده از پراپس <code>rowsPerPageOptions</code> سفارشی کرد. شما باید آرایه ای از موارد زیر را ارائه دهید:
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
          <strong>اعداد</strong>، هر عدد برای لیبل و مقدار گزینه استفاده خواهد شد.
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TablePagination rowsPerPageOptions={[10, 50]} />
`}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-40" component="div">
          کلیدهای <strong>آبجکت</strong>، <code>value</code> و <code>label</code> به ترتیب برای مقدار و برچسب گزینه مورد استفاده قرار خواهند گرفت (مفید برای رشته‌های زبانی مانند &#39 ;همه&#39;).
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
`}
          </FuseHighlight>
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      اقدامات صفحه بندی سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
      پراپ <code>ActionsComponent</code> کامپوننت <code>TablePagination</code> امکان اجرای اقدامات سفارشی را می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomPaginationActionsTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/CustomPaginationActionsTable.js').default}
          raw={require('!raw-loader!../components/table/CustomPaginationActionsTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       هدر استیکی
      </Typography>
      <Typography className="mb-40" component="div">
      در اینجا نمونه ای از جدول با ردیف های قابل اسکرول و سرصفحه های ستون ثابت آورده شده است.این از پراپ<code>stickyHeader</code> استفاده می کند. (⚠️ بدون پشتیبانی از IE 11)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StickyHeadTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/StickyHeadTable.js').default}
          raw={require('!raw-loader!../components/table/StickyHeadTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه بندی ستون ها
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید سرصفحه‌های ستون را با رندر کردن چندین ردیف جدول در یک سر جدول گروه‌بندی کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TableHead>
  <TableRow />
  <TableRow />
</TableHead>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColumnGroupingTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/ColumnGroupingTable.js').default}
          raw={require('!raw-loader!../components/table/ColumnGroupingTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
   جدول جمع شونده
      </Typography>
      <Typography className="mb-40" component="div">
      نمونه ای از جدول با ردیف های قابل گسترش که اطلاعات بیشتری را نشان می دهد. از کامپوننت{' '} <a href="/material-ui/api/collapse/"> <code>Collapse</code> </a>{' '} استفاده می‌کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CollapsibleTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/CollapsibleTable.js').default}
          raw={require('!raw-loader!../components/table/CollapsibleTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
     جدول پوشاننده (spanning table)
      </Typography>
      <Typography className="mb-40" component="div">
      یک مثال ساده با سطرها و ستون های پوشا.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpanningTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/SpanningTable.js').default}
          raw={require('!raw-loader!../components/table/SpanningTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      جدول مجازی
      </Typography>
      <Typography className="mb-40" component="div">
      در مثال زیر، نحوه استفاده از{' '} <a href="https://github.com/petyosi/react-virtuoso">react-virtuoso</a> را با{' '} <code> نشان می‌دهیم. کامپوننت جدول</code>. 200 ردیف را رندر می کند و به راحتی می تواند تعداد بیشتری را مدیریت کند. مجازی سازی به مشکلات عملکرد کمک می کند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ReactVirtualizedTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/ReactVirtualizedTable.js').default}
          raw={require('!raw-loader!../components/table/ReactVirtualizedTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI tutorial:{' '}
        <a href="https://www.w3.org/WAI/tutorials/tables/">
          https://www.w3.org/WAI/tutorials/tables/
        </a>
        )
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      کپشن
      </Typography>
      <Typography className="mb-40" component="div">
      یک کپشن مانند یک عنوان برای یک جدول عمل می کند. اکثر صفحه‌خوان‌ها محتوای کپشن ها را اعلام می‌کنند. کپشن ها به کاربران کمک می‌کنند تا جدولی را پیدا کنند و بفهمند که در مورد چیست و تصمیم بگیرند که آیا می‌خواهند آن را بخوانند یا خیر.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/table/AccessibleTable.js').default}
          raw={require('!raw-loader!../components/table/AccessibleTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      بدون استایل
      </Typography>
      <Typography className="mb-40" component="div">
      اگر می‌خواهید از یک جدول بدون استایل استفاده کنید، می‌توانید از المنت های اولیه HTML استفاده کنید و جدول را با کامپوننت theTablePaginationUnstyled تقویت کنید..نسخه‌های نمایشی را در{' '}<a href="/base/react-table-pagination/">اسناد صفحه‌بندی جدول بدون استایل</a> ببینید
      </Typography>
    </>
  );
}

export default TableDoc;
