import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function HerokuNotesDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        HEROKU یادداشت های
      </Typography>

      <Typography className="mb-16" component="p">
      اگر می‌خواهید Fuse-react را در heroku پیاده‌سازی کنید، ممکن است با مشکلاتی مواجه شوید، راه‌حل اینجاست:
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        از{' '}
        <a
          href="https://github.com/mars/create-react-app-buildpack#user-content-quick-start"
          target="_blank"
          rel="noreferrer noopener"
        >
          mars/create-react-app
        </a>{' '}
        buildpack استفاده کنید:
      </Typography>

      <FuseHighlight component="pre" className="mb-24">
        {` heroku buildpacks:set mars/create-react-app `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
      build بعدی با این بسته رسمی ایجاد خواهد شد.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
     devDependencies را نصب کنید: 
      </Typography>

      <FuseHighlight component="pre" className="mb-24">
        {` heroku config:set NPM_CONFIG_PRODUCTION=false `}
      </FuseHighlight>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
       
        برنچ Skeleton  را در mater  heroku  پوش کنید
      </Typography>

      <FuseHighlight component="pre" className="mb-24">
        {` git push heroku skeleton:master `}
      </FuseHighlight>
    </>
  );
}

export default HerokuNotesDoc;
