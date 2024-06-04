import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function RoutingDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Routing
      </Typography>

      <Typography className="mb-16" component="p">
   
        سیستم مسیریابی Fuse React بر اساس   <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
          react-router
        </a>{' '} و پکیج آن  <a
          href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-router-config
        </a> می‌باشد
      </Typography>

      <Typography className="mb-16" component="p">
      برای رویکرد ماژولار و تنظیمات فیوز مبتنی بر مسیر، ما از فایل‌های پیکربندی استفاده می‌کنیم و مسیرهایی را از آن فایل‌ها ایجاد می‌کنیم.
      </Typography>

      <Typography className="mb-16" component="p">
      برای مثال، به کد زیر <code>MailboxAppConfig.js</code> نگاهی بیندازید. شما می توانید تمام تنظیمات را برای یک مسیر خاص لغو کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!src/app/main/apps/mailbox/MailboxAppConfig.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
      سپس مسیرها را از آن فایل در <code>app/configs/routesConfig</code> وارد و تولید می کنیم.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-32">
        {`
          import {appsRoutes} from '../main/apps/mailbox/MailboxAppConfig.js';
          import FuseUtils from '@fuse/utils';
          import { Navigate } from 'react-router-dom';

          const routeConfigs = [
              MailAppConfig
          ];
          
          const routes = [
            ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
            {
              path: '/',
              element: <Navigate to="dashboards/analytics" />,
              auth: settingsConfig.defaultAuth,
            },
            {
              path: 'loading',
              element: <FuseLoading />,
            },
            {
              path: '*',
              element: <Navigate to="pages/error/404" />,
            },
          ];
          
          export default routes;
      `}
      </FuseHighlight>
    </>
  );
}

export default RoutingDoc;
