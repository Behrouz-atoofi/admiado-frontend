import FuseHighlight from '@fuse/core/FuseHighlight';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function FuseAuthorizationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
       مجوز Fuse
      </Typography>

      <Typography className="mb-16" component="p">
      <code>FuseAuthorization</code> کامپوننت مجوز Fuse React است. با مشاهده <b>تنظیمات مسیر</b> و <b>نقش کاربر(user.role)</b> دسترسی کاربران غیرمجاز را محدود می کند.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        راه اندازی
      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        src/app/App.js
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!src/app/App.js')}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      پیکربندی
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
   پیکربندی مسیر (route) :
      </Typography>

      <Typography className="mb-16" component="p">
      برای کنترل دسترسی از طریق نقش‌های مجوز، باید مجوز (auth) را در <b>فایل‌های پیکربندی مسیر</b> تعریف کنید.
      </Typography>

      <Typography className="mt-32 mb-8" variant="subtitle2">
        مثال کاربردی : 
      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        src/app/main/auth/admin-role-example/AdminRoleExampleConfig.js
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!src/app/main/auth/admin-role-example/AdminRoleExampleConfig.js')}
      </FuseHighlight>

      <Typography className="my-16" component="p">
      همچنین می‌توانید مقادیر اعتبار متفاوتی را برای مسیرهای جداگانه با نوشتن مقدار auth در داخل آبجکت مسیر(route) بدهید.
      </Typography>

      <Paper className="max-w-md my-16">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold text-14">
              گزینه های نقش مجوز (auth).
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>null</code>
              </TableCell>
              <TableCell>بررسی نکنید، به همه اجازه دهید</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>[]</code>
              </TableCell>
              <TableCell>فقط کاربر مهمان مجاز است</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>[admin,user]</code>
              </TableCell>
              <TableCell>فقط نقش‌های «مدیر» و «کاربر» مجاز هستند</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Typography className="mt-48 mb-8" variant="h6">
      پیکربندی User.role:
      </Typography>

      <Typography className="mb-16" component="p">
      <b>نقش</b> و <b>داده</b> کاربر در <b>user</b> در فروشگاه redux ذخیره می‌شوند.
      </Typography>

      <Typography className="mb-16" component="p">
      پس از ورود موفقیت آمیز، user.role به روز می شود و FuseAuthorization به طور خودکار کاربر مجاز را تغییر مسیر می دهد.
      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        app/store/userSlice.js (وضعیت کاربر اولیه)
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`  
                const initialState = {
                role: [],//guest
                data: {
                    'displayName': 'John Doe',
                    'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
                    'email'      : 'johndoe@withinpixels.com',
                    shortcuts    : [
                      'calendar',
                      'mail',
                      'contacts',
                      'todo'
                    ]
                  }
                };
       `}
      </FuseHighlight>

      <Paper className="max-w-md my-16">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold text-14">گزینه های نقش کاربر</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>null</code> or <code>undefined</code> or <code>[]</code>
              </TableCell>
              <TableCell>مهمان</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>['admin','user']</code> (array)
              </TableCell>
              <TableCell>کاربر دارای نقش‌های «مدیر» و «کاربر» است</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>"مدیر"</code> (string)
              </TableCell>
              <TableCell>کاربر دارای نقش "مدیر" است</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Typography className="mt-48 mb-8" variant="h6">
      پیکربندی آیتم ناوبری:
      </Typography>

      <Typography className="mb-16" component="p">
      با افزودن ویژگی <b>auth</b> در <code>app/configs/NavigationConfig.js</code> می‌توانید قابلیت مشاهده <b>item/group/collapse</b> ناوبری را کنترل کنید.
      </Typography>

      <Typography className="mt-32 mb-8" variant="subtitle2">
       مثال کاربردی:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					 {
						'id'   : 'only-admin-navigation-item',
						'title': 'Nav item only for Admin',
						'type' : 'item',
						'auth' : authRoles.admin,//['admin']
						'url'  : '/auth/admin-role-example',
						'icon' : 'verified_user'
					  },
				`}
      </FuseHighlight>

      <Typography className="mt-48 mb-4" variant="h5">
      مقدار Auth پیش فرض:
      </Typography>

      <Typography className="" component="p">
      اگر نمی خواهید auth را در پیکربندی هر صفحه تنظیم کنید.
        <br />
        شما می توانید مقدار نقش defaultAuth را در فایل بدهید{' '} <code>src/app/configs/settingsConfig.js</code> <br /><br /> تنظیمات مسیر فردی که دارای گزینه auth است لغو نمی شود .
      </Typography>

      <Typography className="mt-24 mb-4" variant="h6">
      به طور پیش فرض محافظت از اعتبار کل برنامه:
      </Typography>

      <Typography className="mb-12" variant="subtitle2">
        src/app/configs/settingsConfig.js
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					defaultAuth:['admin','staff','user']
				`}
      </FuseHighlight>

      <Typography className="mt-24 mb-4" variant="h6">
      ساختن کل برنامه بدون مجوز به طور پیش فرض:
      </Typography>

      <Typography className="mb-12" variant="subtitle2">
        src/app/configs/settingsConfig.js
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
				defaultAuth: null
				`}
      </FuseHighlight>

      <Typography className="mt-48 mb-4" variant="h5">
      کاربر وارد شده را بسته به نقش او به یک مسیر خاص هدایت کنید
      </Typography>

      <Typography className="mb-16" component="p">
      قبل از ارسال کنش <b>SET_USER_DATA</b> می‌توانید loginRedirectUrl را در این مسیر تنظیم کنید
      </Typography>

      <Typography className="inline-block mb-8 italic" component="code">
        app/store/userSlice.js
      </Typography>
 
      <FuseHighlight component="pre" className="language-js">
        {`
				export const setUser = createAsyncThunk('user/setUser', async (user, { dispatch, getState }) => {
            /*
              You can redirect the logged-in user to a specific route depending on his role
              */
            if (user.loginRedirectUrl) {
              settingsConfig.loginRedirectUrl = user.loginRedirectUrl; // for example 'apps/academy'
            }
          
            return user;
          });
				`}
      </FuseHighlight>
      <Typography className="mt-48 mb-4" variant="h5">
  خطای کشف نشده : از حداکثر عمق به‌روزرسانی فراتر رفته است: حلقه‌های بی‌نهایت (Maximum update depth exceeded: Infinite loops)
      
      </Typography>
      <Typography className="mb-16" component="p">
      اگر این خطا را دریافت می‌کنید، مطمئن شوید که کاربر احراز هویت شده امکان دسترسی به مسیر اصلی{' '}<b>"/"</b> یا مسیر هدایت شده آن را دارد.
      </Typography>
      <Typography className="mb-16" component="p">
      پس از ورود موفقیت آمیز، هر کاربر احراز هویت شده باید بتواند به مسیر مسیر اصلی{' '} <b>"/"</b> یا مسیر مسیر هدایت شده دسترسی داشته باشد.
      </Typography>
      
    </>
  );
}

export default FuseAuthorizationDoc;
