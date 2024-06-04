import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function MultiLanguageDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
      چند زبانه
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React از{' '}
        <a href="https://react.i18next.com/" target="_blank" rel="noopener noreferrer">
          <code>react-i18next</code>
        </a>{' '}
       برای پشتیبانی از چند زبانه استفاده میکند.
      </Typography>

      <Typography
        className="mb-16 p-16 border-1 bg-yellow-50 rounded-16 text-gray-800"
        component="p"
      >از آنجایی که همه به تنظیمات چند زبانه برای برنامه‌های خود نیاز ندارند، تصمیم گرفتیم که ترجمه‌ها را در همه جا قرار ندهیم. اگر می‌خواهید ترجمه‌ها را در عمل ببینید، از برنامه Mail دیدن کنید و سپس زبان را از نوار ابزار تغییر دهید. برنامه ایمیل تنها برنامه ای است که ترجمه هایی برای اهداف نمایشی دارد. برای مشاهده میزان استفاده می توانید به کد منبع آن نگاه کنید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        کاربرد
      </Typography>

      <Typography className="mb-16" component="p">
      برای استفاده از ترجمه ها، فایل ترجمه خود را در پوشه ای که می خواهید از ترجمه ها استفاده کنید ایجاد کنید. به عنوان مثال، برای برنامه Mail، فایل <code>i18n/en.js</code> را در داخل پوشه <code>apps/mail</code> ایجاد کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!src/app/main/apps/mailbox/i18n/en.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
      و فایل زبان را با <code>i18next.addResourceBundle()</code> در <code>src/app/main/apps/mailbox/MailboxAppConfig.js</code> ثبت کنید
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!src/app/main/apps/mailbox/MailboxAppConfig.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
      و در یک کامپوننت با هوک <code>useTranslation</code> به صورت زیر استفاده کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                        import {useTranslation} from 'react-i18next';

                        const {t} = useTranslation('mailApp');
                    
                        return (
                            <div className="p-24">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-full"
                                    onClick={handleOpenDialog}
                                >
                                    {t('COMPOSE')}
                                </Button>
                        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      زبان پیش فرض
      </Typography>

      <Typography className="mb-16" component="p">
      برای تغییر زبان پیش‌فرض Fuse React، باید تنظیمات <code>lng</code>{' '} را در فایل <code>src/i18n.js</code> تغییر دهید.
      </Typography>

      <Typography className="mb-16" component="p">
      می توانید مقدار "eng" را به "ar" تغییر دهید تا آن را آزمایش کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!src/i18n.js')}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      تغییر زبان
      </Typography>

      <Typography className="mb-16" component="p">
      برای تغییر داینامیک زبان باید از عمل redux <code>changeLanguage</code> استفاده کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                           import { changeLanguage } from 'app/store/i18nSlice';

                            .
                            .

                            dispatch(changeLanguage(lng.id));
                        `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
      نمونه استفاده را در <code>app/theme-layouts/shared-components/LanguageSwitcher.js</code> بررسی کنید
      </Typography>
    </>
  );
}

export default MultiLanguageDoc;
