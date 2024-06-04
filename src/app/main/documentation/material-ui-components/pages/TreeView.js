import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TreeViewDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tree-view"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
     نمای درختی
      </Typography>
      <Typography className="description">
      ویجت نمای درختی یک لیست سلسله مراتبی را ارائه می دهد.
      </Typography>

      <Typography className="mb-40" component="div">
      نمای درختی را می توان برای نمایش یک ناوبر سیستم فایل استفاده کرد که پوشه ها و فایل ها را نمایش می دهد، آیتمی که یک پوشه را نشان می دهد را می توان گسترش داد تا محتویات پوشه را که ممکن است فایل ها، پوشه ها یا هر دو باشد، نشان دهد.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نمای درختی پایه
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FileSystemNavigator.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/FileSystemNavigator.js').default}
          raw={require('!raw-loader!../components/tree-view/FileSystemNavigator.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        چند انتخابه
      </Typography>
      <Typography className="mb-40" component="div">
      همچنین نمای درختی از چندین انتخابی نیز پشتیبانی  می‌کند
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultiSelectTreeView.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/MultiSelectTreeView.js').default}
          raw={require('!raw-loader!../components/tree-view/MultiSelectTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      نمای درختی کنترل شده
      </Typography>
      <Typography className="mb-40" component="div">
      نمای درختی همچنین یک API کنترل شده ارائه می دهد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledTreeView.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/ControlledTreeView.js').default}
          raw={require('!raw-loader!../components/tree-view/ControlledTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
       آبجکت غنی  (Rich Object)
      </Typography>
      <Typography className="mb-40" component="div">
      در حالی که API کامپوننت  <code>TreeView</code>/<code>TreeItem</code> انعطاف‌پذیری را به حداکثر می‌رساند، یک مرحله اضافی برای مدیریت یک Rich Object لازم است.
      </Typography>
      <Typography className="mb-40" component="div">
      بیایید یک متغیر داده با شکل زیر را در نظر بگیریم، می توان از بازگشت برای مدیریت آن استفاده کرد.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
const data = {
  id: 'root',
  name: 'والد',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    // …
  ],
};
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RichObjectTreeView.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/RichObjectTreeView.js').default}
          raw={require('!raw-loader!../components/tree-view/RichObjectTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      پراپ   ContentComponent 
      </Typography>
      <Typography className="mb-40" component="div">
      می‌توانید از پراپ <code>ContentComponent</code> و هوک <code>useTreeItem</code> برای سفارشی‌سازی بیشتر رفتار TreeItem استفاده کنید.
      </Typography>
      <Typography className="mb-40" component="div">
      مانند محدود کردن گسترش به کلیک کردن روی آیکون:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconExpansionTreeView.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/IconExpansionTreeView.js').default}
          raw={require('!raw-loader!../components/tree-view/IconExpansionTreeView.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      یا افزایش عرض نشانگر حالت:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BarTreeView.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/BarTreeView.js').default}
          raw={require('!raw-loader!../components/tree-view/BarTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        سفارشی سازی
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
       آیکون، بورد و انیمیشن سفارشی
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTreeView.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/CustomizedTreeView.js').default}
          raw={require('!raw-loader!../components/tree-view/CustomizedTreeView.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
      شبیه سازی جیمیل
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GmailTreeView.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/GmailTreeView.js').default}
          raw={require('!raw-loader!../components/tree-view/GmailTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
آیتم های درختی غیرفعال
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledTreeItems.js"
          className="my-24"
          iframe={false}
          component={require('../components/tree-view/DisabledTreeItems.js').default}
          raw={require('!raw-loader!../components/tree-view/DisabledTreeItems.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
      رفتار آیتم های درختی غیرفعال به پراپ <code>disabledItemsFocusable</code> بستگی دارد.
      </Typography>
      <Typography className="mb-40" component="div">
     اگر False باشد : 
      </Typography>
      <ul>
        <li>
        کلیدهای پیکان آیتم های غیرفعال را فوکوس نمی کنند و آیتم غیرفعال بعدی فوکوس می شود.
        </li>
        <li>تایپ کردن اولین کاراکتر برچسب یک آیتم غیرفعال، آن را را متمرکز نمی کند.</li>
        <li>تعامل ماوس یا صفحه کلید آیتم های غیرفعال را بزرگ یا کوچک نمی کند.</li>
        <li>تعامل ماوس یا صفحه کلید آیتم های غیرفعال را انتخاب نمی کند.</li>
        <li>
        کلیدهای Shift + پیکان آیتم های غیرفعال را رد می کنند و آیتم غیرفعال بعدی انتخاب می شود.
        </li>
        <li>فوکوس برنامه‌ای آیتم های غیرفعال را متمرکز نمی‌کند.</li>
      </ul>
      <Typography className="mb-40" component="div">
       اگر True باشد : 
      </Typography>
      <ul>
        <li>کلیدهای پیکان آیتم های غیرفعال را متمرکز می کنند.</li>
        <li>تایپ کردن اولین کاراکتر برچسب یک آیتم غیرفعال، آن را را متمرکز می کند.</li>
        <li>تعامل ماوس یا صفحه کلید آیتم های غیرفعال را بزرگ یا کوچک نمی کند.</li>
        <li>تعامل ماوس یا صفحه کلید آیتم های غیرفعال را انتخاب نمی کند.</li>
        <li>
        کلیدهای Shift + پیکان آیتم های غیرفعال شده را رد نمی کنند اما آیتم غیرفعال انتخاب نمی شود.
        </li>
        <li>تمرکز برنامه‌ای بر آیتم های غیرفعال متمرکز می‌شود.</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        دسترسی
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/treeview/">
          https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
      این کامپوننت از شیوه های تألیف WAI-ARIA پیروی می کند.
      </Typography>
      <Typography className="mb-40" component="div">
      برای داشتن نمای درختی قابل دسترسی، باید از <code>aria-labelledby</code> یا{' '} <code>aria-label</code> برای ارجاع یا ارائه برچسب در TreeView استفاده کنید, در غیر این صورت، صفحه‌خوان‌ها آن را به‌عنوان «درخت» اعلام می‌کنند، که درک زمینه یک آیتم خاص درختی را دشوار می‌کند.
      </Typography>
    </>
  );
}

export default TreeViewDoc;
