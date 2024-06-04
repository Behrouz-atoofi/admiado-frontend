import Typography from '@mui/material/Typography';

function DeploymentDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        دیپلوی
      </Typography>

      <Typography className="mb-16" component="p">
      ممکن است هنگام ریفرش کردن URL برنامه مشکل داشته باشید. اگر چنین مشکلی دارید ، باید تنظیمات سرور را پیکربندی کنید.
      </Typography>

      <Typography className="mb-16" component="p">
      
        تنظمیات دیپلوی را در مستندات create-react-app فیسبوک چک کنید:
        <a
          href="https://facebook.github.io/create-react-app/docs/deployment"
          target="_blank"
          rel="noreferrer noopener"
          className="ml-4"
        >
          دیپلوی کردن
        </a>
      </Typography>
    </>
  );
}

export default DeploymentDoc;
