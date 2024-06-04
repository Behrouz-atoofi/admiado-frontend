import Typography from '@mui/material/Typography';
import FuseHighlight from '@fuse/core/FuseHighlight';
import { Link } from 'react-router-dom';

function ApiCallsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
    فراخوانی API
      </Typography>

      <Typography className="mb-24" component="p">
      ما از کتابخانه HTTP Request اکسیوس برای فراخوانی API استفاده میکنیم:{' '}
        <a href="https://github.com/axios" target="_blank" rel="noreferrer noopener">
          Axios
        </a>{' '}
       برای فراخوانی API ها
      </Typography>

      <Typography className="mt-24 mb-10" variant="h6">
      پیش فرض های Global Axios
      </Typography>

      <Typography className="mb-16" component="p">
        Yمی توانید پیش فرض های  global axios را به صورت زیر پیکربندی کنید. برای مثال می توانید baseUrl را برای اتصال api تعریف کنید. برای جزئیات بیشتر در:{' '}
        <a
          href="https://github.com/axios/axios#config-defaults"
          target="_blank"
          rel="noreferrer noopener"
        >
       پیش فرض های Global Axios
        </a>
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					axios.defaults.baseURL = 'https://api.example.com';
					axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
					axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				`}
      </FuseHighlight>

      <Typography className="mt-24 mb-10" variant="h6">
        @api ساختگی
      </Typography>

      <Typography className="mb-16" component="p">
       ما از {' '}
        <a
          href="https://github.com/ctimmerm/axios-mock-adapter"
          target="_blank"
          rel="noreferrer noopener"
        >
          axios-mock-adapter
        </a>{' '}
        برای نشان دادن درخواست‌های http استفاده می‌کنیم، تمام داده‌های نمونه پشتیبان در src/@mock-api قرار دارند..
      </Typography>

      <Typography className="mb-16" component="p">
      @mock-api به طور خاص برای Fuse React ایجاد شده است تا  اند پوینت های API را ایجاد کند و بدون نیاز به ایجاد یک برنامه باطن واقعی، داده‌ها را در اختیار برنامه شما قرار دهد. به این ترتیب، می توانید بر روی برنامه frontend خود تمرکز کنید و پس از اتمام کار با frontend، می توانید برنامه Backend خود را ایجاد کنید تا  اندپوینت های API واقعی را با داده های واقعی ارائه دهید.
      </Typography>

      <Typography className="mb-16" component="p">
      این نه تنها باعث می‌شود که سریع‌تر پیشرفت کنید و برنامه‌تان را خیلی سریع رو به جلو ببرید، بلکه می‌دانید دقیقاً چه چیزی از API خود نیاز دارید.
      </Typography>

      <Typography className="mb-16" component="p">
      ما تعاریف api باز ایجاد کرده ایم و در حین تولید @mock-api از این تعاریف پیروی می کنیم. هنگام ایجاد api خود می توانید از تعاریف به عنوان مثال استفاده کنید. پرداخت <Link className="link mx-8" to="/documentation/mock-api">
  مستندات Mock API</Link>
      </Typography>

      <Typography className="mb-16" component="p">
      می‌توانید مقدار <code>delayResponse</code> را برای آزمایش شبکه‌های کند در فایل تنظیم کنید:   <code>src/@mock-api/mock.js</code>.
       
      
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					const MockAdapter = require('axios-mock-adapter');
					const axios = require('axios');
					
					const mock = new MockAdapter(axios, { delayResponse: 500 });
					
					export default mock;
				`}
      </FuseHighlight>
    </>
  );
}

export default ApiCallsDoc;
