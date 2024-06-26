import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ReactTableDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
       جداول ری اکت
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="https://github.com/react-tools/react-table"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          منبع
        </Button>
      </div>

      <Typography className="mb-16" component="p">
        <code>react-table</code>یک دیتاگرید سبک، سریع و قابل ارتقا است که برای React ساخته شده است.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
      مثال برای استفاده
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/simple.js').default}
        raw={require('!raw-loader!./examples/simple.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
      نمونه های پیشرفته
      </Typography>

      <Typography className="mt-32 mb-8" component="p">
      برای نمونه های پیشرفته به {' '}
        <a
          href="https://github.com/tannerlinsley/react-table/blob/master/docs/examples.md"
          target="_blank"
          rel="noopener noreferrer"
        >
        مستندات  react-table 
        </a>
        سر بزنید {' '} 
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
        پیش نمایش
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/apps/contacts">مخاطبین</Link>
        </li>
      </ul>
    </>
  );
}

export default ReactTableDoc;
