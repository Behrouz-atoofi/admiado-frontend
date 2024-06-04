import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function CodeSplittingDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      تقسیم کد
      </Typography>

      <Typography className="mb-16" component="p">
      تقسیم کد برنامه شما می تواند به شما کمک کند تا مواردی را که کاربر در حال حاضر به آن نیاز دارد، “lazy-load” کند، که می تواند عملکرد برنامه شما را به طور چشمگیری بهبود بخشد. در حالی که مقدار کلی کد را در برنامه خود کاهش نداده اید، از بارگیری کدهایی که ممکن است کاربر هرگز به آن نیاز نداشته باشد اجتناب کرده اید و مقدار کد مورد نیاز در بارگیری اولیه را کاهش داده اید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      تقسیم کد مبتنی بر مسیر
      </Typography>

      <Typography className="mb-16" component="p">
      ما از تابع <b>React.lazy</b> برای وارد کردن داینامیک کامپوننت استفاده می کنیم. کامپوننت <br /><b>FuseSuspense</b> برای جلوگیری از تکرار پیش‌فرض‌های کامپوننت <b>React.Suspense </b> ایجاد شده است که در طرح‌بندی‌های تم استفاده می‌شود. <br /> نمونه های زیر را بررسی کنید تا به صورت داینامیک یا معمولی وارد کردن اجزا را ببینید.
      </Typography>

      <div className="space-y-24">
        <div className="">
          <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
کامپوننت  Lazy Loade:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx my-16">
            {`
              import { lazy } from 'react';

              const AnalyticsDashboardApp = lazy(() => import('./AnalyticsDashboardApp'));
              
              const AnalyticsDashboardAppConfig = {
                settings: {
                  layout: {
                    config: {}
                  }
                },
                routes: [
                  {
                    path: 'apps/dashboards/analytics',
                    element: <AnalyticsDashboardApp />
                  }
                ],
              };
              
              export default AnalyticsDashboardAppConfig;

            `}
          </FuseHighlight>
        </div>

        <div className="w-ful">
          <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
          کامپوننت بارگذاری شده منظم:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx my-16">
            {`
                import AnalyticsDashboardApp from './AnalyticsDashboardApp';

                export const AnalyticsDashboardAppConfig = {
                    settings: {
                        layout: {
                            config: {}
                        }
                    },
                    routes  : [
                        {
                            path     : '/apps/dashboards/analytics',
                            element:AnalyticsDashboardApp
                        }
                    ]
                };
            `}
          </FuseHighlight>
        </div>
      </div>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      تقسیم کد کاهنده های Redux (کاهش کننده های بارگذاری شده داینامیک)
      </Typography>

      <Typography className="mb-16" component="p">
      ما Component Higher Order <code>withReducer</code> را ایجاد کردیم تا قبل از رندر کامپوننت   redux reducer بارگیری شود.
        <br />
        فقط باید <b>key</b> و <b>reducer</b> را به کامپوننت منتقل کنید.
    
      </Typography>

      <FuseHighlight component="pre" className="language-jsx my-16">
        {`
          import withReducer from 'app/store/withReducer';
          import reducer from './store';
          .
          .
          export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
        `}
      </FuseHighlight>
    </>
  );
}

export default CodeSplittingDoc;
