import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function OverviewPageLayoutsUI() {
  return (
    <Root
      header={
        <div className="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-24 sm:py-32 sm:px-40">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center font-medium">
              <div>
                <Typography className="whitespace-nowrap" color="secondary.main">
                رابط کاربری
                </Typography>
              </div>
            </div>
            <div className="mt-8">
              <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
              بررسی اجمالی
              </Typography>
            </div>
          </div>
          <div />
        </div>
      }
      content={
        <div className="flex-auto p-24 sm:p-40">
          <div className="prose prose-sm dark:prose-invert">
            <Typography className="text-20 font-700 mb-16">دستورالعمل</Typography>
            <Typography>
            طرح‌بندی صفحه مجموعه‌ای از طرح‌بندی‌های از پیش ساخته شده است که می‌تواند به عنوان شروع کننده در هر طراحی صفحه/برنامه مورد استفاده قرار گیرد. در حالی که آنها به طور پیش فرض یک ظاهر طراحی می کنند، بسیار کم است و می توان به راحتی از کامپوننتی که ایجاد می کنید، آن را تغییر داد.
            </Typography>
            <Typography>مزایای اصلی استفاده از صفحه آرایی هستند;</Typography>
            <Typography component="ul">
              <li>
                <p>
                  <strong>ثبات</strong>
                </p>
                برنامه ها و صفحات شما همگی از نظر طرح بندی و استایل کلی شبیه به هم خواهند بود که اساساً آنها را کاربر پسندتر و یادگیری آسان تر می کند.
              </li>
              <li>
                <p>
                  <strong>تغییرات آسان</strong>
                </p>
                در آینده، اگر تصمیم دارید طراحی صفحات خود را تغییر دهید، عناصری را اضافه کنید یا موارد موجود را اصلاح کنید، این کار به راحتی انجام می شود زیرا همه صفحات شما دارای نام کلاس ها و ساختار کد کلی خواهند بود.
              </li>
              <li>
                <p>
                  <strong>منحنی یادگیری آسان تر برای کاربران شما</strong>
                </p>
                شبیه سازی طراحی کلی و چیدمان صفحات شما، یادگیری آنها را برای کاربران آسان تر می کند. آنها بارها و بارها به دنبال دکمه ذخیره یا فیلد جستجو نخواهند بود و سعی می کنند مکان های خود را برای هر صفحه بیابند و به خاطر بسپارند زیرا همه صفحات دارای ساختار مشابهی هستند.
              </li>
            </Typography>
          </div>
        </div>
      }
    />
  );
}

export default OverviewPageLayoutsUI;
