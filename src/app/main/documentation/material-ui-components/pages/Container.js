import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ContainerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/container"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        کانتینر
      </Typography>
      <Typography className="description">
      کانتینر محتوای شما را به صورت افقی متمرکز می کند. این اساسی ترین المنت چیدمان است.
      </Typography>

      <Typography className="mb-40" component="div">
      در حالی که کانتینرها را می توان تو در تو قرار داد، اما اکثر چیدمان ها به کانتینر تو در تو نیاز ندارند.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        فلوید(Fluid)
      </Typography>
      <Typography className="mb-40" component="div">
      عرض کانتینر فلوید  با پراپ prop <code>maxWidth</code> محدود می شود.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleContainer.js"
          className="my-24"
          iframe
          component={require('../components/container/SimpleContainer.js').default}
          raw={require('!raw-loader!../components/container/SimpleContainer.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Container maxWidth="sm">
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        پوزیشن fixed
      </Typography>
      <Typography className="mb-40" component="div">
      اگر ترجیح می دهید به جای تلاش برای قرار دادن یک نمای کاملاً روان، برای مجموعه ای ثابت از اندازه ها طراحی کنید، می توانید پراپ <code>fixed</code> را تنظیم کنید. حداکثر عرض با حداقل عرض نقطه شکست فعلی مطابقت دارد.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedContainer.js"
          className="my-24"
          iframe
          component={require('../components/container/FixedContainer.js').default}
          raw={require('!raw-loader!../components/container/FixedContainer.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Container fixed>
`}
      </FuseHighlight>
    </>
  );
}

export default ContainerDoc;
