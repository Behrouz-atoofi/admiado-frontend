import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ButtonGroupDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/button-group"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
      گروه دکمه(  Button Group)
      </Typography>
      <Typography className="description">
      کامپوننت ButtonGroup را می توان برای گروه بندی دکمه های مرتبط استفاده کرد.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      ButtonGroup اولیه
      </Typography>
      <Typography className="mb-40" component="div">
      دکمه‌ها را می‌توان با قرار دادن آنها با کامپوننت <code>ButtonGroup</code> گروه‌بندی کرد. آن‌ها باید فرزند های فوری باشند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicButtonGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/button-group/BasicButtonGroup.js').default}
          raw={require('!raw-loader!../components/button-group/BasicButtonGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      انواع دکمه ها
      </Typography>
      <Typography className="mb-40" component="div">
      همه انواع دکمه های استاندارد پشتیبانی می شوند.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariantButtonGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/button-group/VariantButtonGroup.js').default}
          raw={require('!raw-loader!../components/button-group/VariantButtonGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      اندازه ها و رنگ ها
      </Typography>
      <Typography className="mb-40" component="div">
      برای کنترل ظاهر گروه دکمه می توان از پراپس های <code>size</code> و <code>color</code> استفاده کرد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupSizesColors.js"
          className="my-24"
          iframe={false}
          component={require('../components/button-group/GroupSizesColors.js').default}
          raw={require('!raw-loader!../components/button-group/GroupSizesColors.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      گروه عمودی
      </Typography>
      <Typography className="mb-40" component="div">
      گروه دکمه را می توان به صورت عمودی با استفاده از پراپ <code>orientation</code> نمایش داد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupOrientation.js"
          className="my-24"
          iframe={false}
          component={require('../components/button-group/GroupOrientation.js').default}
          raw={require('!raw-loader!../components/button-group/GroupOrientation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
      دکمه تقسیم
      </Typography>
      <Typography className="mb-40" component="div">
      <code>ButtonGroup</code> همچنین می تواند برای ایجاد یک دکمه تقسیم استفاده شود. منوی کشویی می تواند عملکرد دکمه را تغییر دهد (مانند این مثال) یا برای شروع فوری یک عمل مرتبط استفاده شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SplitButton.js"
          className="my-24"
          iframe={false}
          component={require('../components/button-group/SplitButton.js').default}
          raw={require('!raw-loader!../components/button-group/SplitButton.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
    ارتفاع غیر فعال
      </Typography>
      <Typography className="mb-40" component="div">
      می توانید ارتفاع را با پراپ <code>disableElevation</code> حذف کنید.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisableElevation.js"
          className="my-24"
          iframe={false}
          component={require('../components/button-group/DisableElevation.js').default}
          raw={require('!raw-loader!../components/button-group/DisableElevation.js')}
        />
      </Typography>
    </>
  );
}

export default ButtonGroupDoc;
