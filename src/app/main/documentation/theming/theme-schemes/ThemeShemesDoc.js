import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ThemeShemesDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      طرح های تم
      </Typography>

      <Typography className="mb-16" component="p">
      Fuse React به طور پیش‌فرض از قالب‌بندی Material-ui استفاده می‌کند. شما می توانید طرح های رنگی تم را با تعریف اشیاء پیکربندی تم ایجاد کنید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      پیکربندی
      </Typography>

      <Typography className="mb-16" component="p">
       
     
        برای گزینه‌های پیکربندی، گزینه‌های پیکربندی تم  <a href="https://mui.com/customization/theming" target="_blank" rel="noopener noreferrer">Material UI </a>را بررسی کنید.
      </Typography>
      <Typography className="mb-16" component="p">
      تنظیمات طرح زمینه در فایل <code>app/configs/themesConfig.js</code> قرار دارند.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/configs/themesConfig.js')}
      </FuseHighlight>
    </>
  );
}

export default ThemeShemesDoc;
