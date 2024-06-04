import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function SettingsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
تنظیمات پیش فرض
      </Typography>

      <Typography className="mb-16" component="p">
      می‌توانید طرح‌بندی پیش‌فرض، تنظیمات طرح زمینه برنامه خود را در app/config/settings Config.js تنظیم کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/configs/settingsConfig.js')}
      </FuseHighlight>
    </>
  );
}

export default SettingsDoc;
