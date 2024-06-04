import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ReactHookFormDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
        ری اکت هوک فرم
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="http://react-hook-form.com"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>
      <Typography className="mb-16" component="p">
      فرم های کاربردی، انعطاف پذیر و قابل توسعه با اعتبارسنجی آسان برای استفاده.
      </Typography>

      <hr />

      <Typography className="text-24 mt-32 mb-16" component="h4">
      مثال استفاده با المنت  های Material-UI و اعتبارسنجی فرم
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/SimpleFormExample.js').default}
        raw={require('!raw-loader!./examples/SimpleFormExample.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        مثال ها
      </Typography>

      <ul>
        <li className="mb-8">src/app/main/sign-in/SignInPage.js</li>
        <li className="mb-8">src/app/main/sign-up/SignUpPage.js</li>
        <li className="mb-8">.</li>
        <li className="mb-8">.</li>
        <li className="mb-8">.</li>
      </ul>
    </>
  );
}

export default ReactHookFormDoc;
