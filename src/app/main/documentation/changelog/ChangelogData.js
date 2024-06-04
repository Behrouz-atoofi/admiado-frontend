import Typography from '@mui/material/Typography';

const changelogData = [
  {
    version: '8.3.5',
    date: '1402-01-15',
    newChanges: [
      'material- ui اپدیت شد به   v5.11.15',
      'react-router اپدیت شد به   v6.10',
      'تیلویند سی اس اس آپدیت شد به v3.3.1',
      '@reduxjs/toolkit آپدیت شده به v1.9.3',
      'اکسیوس آپدیت شد بهv1.3.4',
      'fullcalendar آپدیت شد به  v6.1.5',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'پنل چت، نوارهای پیمایش سفارشی پیام ها به دلیل کار نکردن اسکرول پایین غیرفعال است',
      'برنامه چت، نوارهای پیمایش سفارشی پیام‌ها غیرفعال هستند، زیرا اسکرول پایین کار نمی‌کند.',
    ],
    breakingChanges: [
      <span className="flex flex-col space-y-8">
        <Typography component="span">DateTimePicker به نسخه 6 منتقل شد</Typography>
        <Typography component="span">
        لطفاً راهنمای مهاجرت را در {' '} دنبال کنید
          <a
            href="https://mui.com/x/migration/migration-pickers-v5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mui.com/x/migration/migration-pickers-v5/
          </a>
        </Typography>
      </span>,
    ],
  },
  {
    version: '8.3.0',
    date: '2022-12-30',
    newChanges: ['داشبورد کریپتو ایجاد شد.'],
    fixedChanges: [
      'مقدار عرض نوار کناری FusePageCarded در تلفن همراه اعمال نمی شود.',
      'مقدار عرض FusePageSimple Sidebar در تلفن همراه اعمال نمی شود.',
    ],
  },
  {
    version: '8.2.2',
    date: '2022-12-15',
    newChanges: [
      'material- ui اپدیت شد به   v5.11.0',
      'react-router اپدیت شد به  v6.4.5',
      'تیلویند سی اس اس آپدیت شد به  v3.2.4',
      '@reduxjs/toolkit آپدیت شده به  v1.8.6',
      'axios آپدیت شد به v1.2.1',
      'fullcalendar آپدیت شد به v6.0.0',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'طرح زمینه روشن ناوبار 3.',
      'اصلاحات عملکرد در FuseExample، اجزای FuseHighlight، FuseSvgIcon',
    ],
  },
  {
    version: '8.2.1',
    date: '2022-09-03',
    fixedChanges: ['مسئله Z-index  در DateTimePicker,مسیر های ورودی جدید'],
  },
  {
    version: '8.2.0',
    date: '2022-08-20',
    newChanges: [
      'دشبورد مالی اضافه شد',
      'material- ui اپدیت شد به   v5.10.1',
      'تیلویند سی اس اس آپدیت شد به  v3.1.8',
      'react-hook-form آپدیت شد به v7.34.2',
      '@reduxjs/toolkit آپدیت شده به  v1.8.5',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: ['طرح‌بندی طرح زمینه سبک‌های نوار ناوبری', 'حداکثر ارتفاع FuseSidePanel'],
  },
  {
    version: '8.1.0',
    date: '2022-07-14',
    newChanges: [
      'react آپدیت شد به v18.2.0',
      'material- ui اپدیت شد به   v5.9.0',
      'تیلویند سی اس اس آپدیت شد به  v3.1.6',
      'react-hook-form updated to v7.33.1',
      '@reduxjs/toolkit آپدیت شده به  v1.8.3',
      'همه پکیج های وابسته به روز شدند.',
      'صفحه تعاریف Mock API پالایش شد.',
    ],
  },
  {
    version: '8.0.0',
    date: '2022-05-15',
    newChanges: [
      'ظاهر بهبود داده شد.',
      'کل قالب را از ابتدا دوباره نوشته شد.',
      'Mock API با استفاده از تعاریف OPEN API بازسازی شد',
      'react آپدیت شد به v18.1.0',
      'material- ui اپدیت شد به   v5.7.0',
      '@reduxjs/toolkit آپدیت شد به  v1.8.1',
      'تیلویند سی اس اس آپدیت شد به  v3.0.24',
      'همه پکیج های وابسته به روز شدند.',
    ],
    breakingChanges: [
      'craco با react-app-rewired جایگزین شد.',
      'firebase و  نمونه‌های سرویس auth0 منسوخ شده است.',
    ],
    fixedChanges: [],
    notes: (
      <div className="text-14 p-24 border-2 border-red rounded-16 w-full max-w-lg mt-40 mb-24">
        <ul className="list-disc">
          <Typography component="li" className="leading-loose mb-16">
          این نسخه اصلی جدید Fuse React است و کاملاً با نسخه های قبلی بدون مسیر ارتقاء متفاوت است.
          </Typography>
          <Typography component="li" className="leading-loose">
          این نسخه نیاز به نصب clean دارد.
          </Typography>
        </ul>
      </div>
    ),
  },
  {
    version: '7.2.0',
    date: '2022-03-05',
    newChanges: [
      'material- ui اپدیت شد به   v5.4.4',
      'react-router اپدیت شد به  v6.2.2',
      'تیلویند سی اس اس آپدیت شد به  v3.0.23',
      '@reduxjs/toolkit آپدیت شده به  v1.8.0',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'تخصیص کامپوننت مسیر /callback.',
      'Authorization در برخی موارد نمی تواند موارد ناوبری را پنهان کند',
    ],
  },
  {
    version: '7.1.0',
    date: '2021-12-17',
    newChanges: [
      'material- ui اپدیت شد به   v5.2.4',
      'react-router اپدیت شد به  v6.1.1',
      'تیلویند سی اس اس آپدیت شد به  v3.0.5',
      'react-scripts آپدیت شد به v5.0.0',
      'همه پکیج های وابسته به روز شدند.',
    ],
    breakingChanges: ['redirectUrl با loginRedirectUrl  جابجا شد.'],
  },
  {
    version: '7.0.2',
    date: '2021-10-25',
    newChanges: [
      'material- ui اپدیت شد به   v5.0.4',
      'تیلویند سی اس اس آپدیت شد به  v2.2.17',
      'همه پکیج های وابسته به روز شدند.',
      "Default font changed to 'Inter'",
    ],
    breakingChanges: ['react-select حذف شد'],
  },
  {
    version: '7.0.1',
    date: '2021-09-30',
    newChanges: [
      'material- ui اپدیت شد به   v5.0.2',
      'تیلویند سی اس اس آپدیت شد به  v2.2.16',
      'همه پکیج های وابسته به روز شدند.',
      'Codebase بهبود یافته، انجام تغییرات جزئی',
    ],
  },
  {
    version: '7.0.0',
    date: '2021-09-22',
    newChanges: [
      'material-ui از نسخه 4 به نسخه 5 منتقل شد',
      'همه پکیج های وابسته به روز شدند.',
      ' بهبود یافته است. Codebase .',
    ],
    breakingChanges: [
      'yarn  به npm تغییر یافت',
      'react-charjs2 و کتابخانه های Formsy دیگر پشتیبانی نمی شوند.',
      'کامپوننت های FuseAnimate، FuseGroupAnimate، FuseChipSelect منسوخ شده اند.',
    ],
    notes: (
      <div className="text-14 p-24 border-2 rounded-16 w-full max-w-lg mt-40 mb-24">
        <ul className="list-disc">
          <Typography component="li" className="leading-loose mb-16">
          مهاجرت به نسخه اصلی جدید (v7.0.0) به دلیل ادغام آخرین material-ui (v5) می تواند دشوار باشد.
          </Typography>
          <Typography component="li" className="leading-loose">
          رای بهره مندی از مزایای رفع اشکال و بسیاری از پیشرفت ها مانند موتور استایل دهی جدید، باید به materil v5 مهاجرت کنید. راهنمای مهاجرت material-ui را در{' '} بررسی کنید
            <a href="https://mui.com/guides/migration-v4" target="_blank" rel="noopener noreferrer">
              https://mui.com/guides/migration-v4/
            </a>
          </Typography>
        </ul>
      </div>
    ),
  },
  {
    version: '6.2.0',
    date: '2021-08-13',
    newChanges: [
      'material- ui اپدیت شد به   v4.12.3',
      'تیلویند سی اس اس آپدیت شد به  v2.2.7',
      'همه پکیج های وابسته به روز شدند.',
      'پیکربندی prettier (prettierrc.) به فایل پیکربندی eslint منتقل شد.',
      "قالب‌بندی کد مطابق با راهنمای سبک Airbnb، فایل پیکربندی eslint به‌روزرسانی شد، کد دوباره قالب‌بندی شد.",
    ],
    fixedChanges: ["رنگ پس‌زمینه تکمیل خودکار کروم حذف شد."],
  },
  {
    version: '6.1.4',
    date: '2021-06-12',
    fixedChanges: [
      'موقعیت یابی ریسپانسیو چت پنل.',
      "مقادیر روشن تم اصلی یا تیره تم اصلی نباید در انتخاب تم اصلی فهرست شوند.",
    ],
  },
  {
    version: '6.1.3',
    date: '2021-06-03',
    fixedChanges: [
      "چت پنل پس از تغییر طرح و بارگذاری مجدد صفحه به درستی رندر نمی شود.",
    ],
  },
  {
    version: '6.1.2',
    date: '2021-06-03',
    newChanges: ['همه پکیج های وابسته به روز شدند.'],
  },
  {
    version: '6.1.1',
    date: '2021-04-07',
    newChanges: ['jss، jss-plugin-extend به نسخه 10.6.0 به روز شد'],
    fixedChanges: ['مشکل در اسکرول درونی لی اوت صفحات'],
  },
  {
    version: '6.1.0',
    date: '2021-04-07',
    newChanges: [
      <>
        react-hook-form v6 به v7 منتقل شد، <br />- راهنمای انتقال را بررسی کنید:{' '}
        <a
          href="https://react-hook-form.com/migrate-v6-to-v7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://react-hook-form.com/migrate-v6-to-v7
        </a>
      </>,
      'تیلویند سی اس اس آپدیت شد  به to v2.1.0',
    ],
    fixedChanges: ['هشدارهای Yarn2 pnp حل شد.'],
  },
  {
    version: '6.0.0',
    date: '2021-04-02',
    newChanges: [
      'برنامه تقویم: react-big-calendar با fullCalendar/react تغییر کرد',
      'draft-js و react-draft-wysiwyg اضافه شدند، نمونه ای  در فرم نوشتن نامه ایجاد شد.',
      'croco برای گسترش پیکربندی webpack اضافه شد.',
      'tailwindcss به داخل پیکربندی postcss با کروکو منتقل شد.',
      'framer-motion اضافه شد، همه انیمیشن ها به framer-motion منتقل شدند.',
      "نمودارها از 'react-chartjs-2' به 'react-apexcharts' تغییر کردند'",
      'همه فرم ها با react-hook-form تغییر کرده اند، yup برای اعتبار سنجی فرم استفاده می شود.',
      'طراحی تم با رویکرد مدرن تر به روز شد.',
      'redux serializableCheck میان‌افزار به‌طور پیش‌فرض برای نگرانی‌های مربوط به عملکرد توسعه غیرفعال است.',
      'طرح زمینه پیش‌فرض تغییر کرد',
      "فونت پیش‌فرض به «Poppins» تغییر کرد'",
      'همه طرح‌بندی‌های تم به‌روزرسانی شدند، اکنون پیش‌فرض تم،  اسکرول بادی میباشد.',
      'طرح زمینه vertical-layout-1 دارای سبک های ناوبری جدید است (Slide، Tabbed، Tabbed dense، folded).',
      'پیکربندی redux-logger: همه به جز خطاهای موجود در کنسول توسعه دهنده را جمع کنید.',
      'ایمپورت های غیرضروری React حذف شد.',
      'پانل اعلان ایجاد شد.',
      'کامپوننت  نوار ابزار AdjustFontSize ایجاد شد.',
      'react آپدیت شد به v17.0.2',
      'react-scripts updated to v4.0.3',
      'material- ui اپدیت شد به   v4.11.3',
      'همه پکیج های وابسته به روز شدند.',
    ],
  },
  {
    version: '5.3.1',
    date: '2021-01-15',
    newChanges: [
      'material- ui اپدیت شد به   v4.11.2',
      'همه پکیج های وابسته به روز شدند.',
      'اصلاحات جزئی در طراحی.',
      'وقتی کاربر از سیستم خارج شد، کل  redux store را بازنشانی کنید.',
      '  اضافه شدreportWebVitals .',
      'کلاس های مدل داده با نسخه های تابع تغییر کردند.',
    ],
    fixedChanges: ['FuseChipSelect ارتفاع ورودی خالی.'],
  },
  {
    version: '5.3.0',
    date: '2020-12-02',
    newChanges: [
      'تیلویند سی اس اس آپدیت شد  به to v2',
      'material- ui اپدیت شد به   v4.11.1',
      'همه پکیج های وابسته به روز شدند.',
      'برنامه تجارت الکترونیک: حذف قابلیت اقلام اضافه شده به جدول محصولات و سفارشات. هیچ پیامی برای مسیرهای صفحه محصول/سفارش وجود ندارد ایجاد نشده است.',
      'سایه‌های صاف: سایه‌های طراحی متریال با کلاس‌های tailwindcss تغییر کردند.',
    ],
    fixedChanges: ['هنگامی که موردی حذف می شود، گفتگوی NotesApp بسته نمی شود.'],
  },
  {
    version: '5.2.1',
    date: '2020-11-19',
    fixedChanges: ['کامپوننت های شامل ClickAwayListener کار نمی کنند.'],
  },
  {
    version: '5.2.0',
    date: '2020-11-17',
    newChanges: [
      'react آپدیت شد به v17.0.1,',
      'برنامه تجارت الکترونیک: نشانگر بارگیری هنگام واکشی اطلاعات جدول محصولات/سفارش ها را نشان می دهد.',
      'آیکون NavbarFoldedToggleButton با push_pin تغییر کرد',
      'FuseSearch:  placeholders و عناصر noResults برای محلی سازی اضافه شده است.',
      'آیکون های رابط کاربری material-ui به روز شدند و همه تغییرات برای انتخاب اضافه شدند.',
      'اصلاحات تلفن همراه: اجزای کشو با SwipeableDrawer تغییر کردند، کتابخانه react-swipeable اضافه شد.',
      'سبک‌های نوار پیمایش بومی به‌روزرسانی شد.',
      'تیلویند سی اس اس آپدیت شد  به to v1.9.6',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'ارسال تغییر زبان باید در فراخوانی i18n.changeLanguage فراخوانی شود',
      'خطای وارد کردن SDK فردی firebase.',
    ],
    breakingChanges: [
      'customScrollbars به طور پیش‌فرض به دلایل عملکرد در توسعه غیرفعال شده است.',
      'tبه روز رسانی tailwind.config.js.',
      'redux-toolkit immutableCheck میان افزار به طور پیش فرض برای عملکرد توسعه غیرفعال شده است.',
      'مکان وارد کردن فونت‌های آیکون material-ui تغییر کرد،  public/index.html  را بررسی کنید',
    ],
  },
  {
    version: '5.1.0',
    date: '2020-09-09',
    newChanges: [
      'FfullScreenToggle به نوار ابزار تم اضافه شد,',
      'i18nSlice برای ذخیره زبان فعلی در فروشگاه redux ایجاد شده است. اقدام changeLanguage ایجاد و استفاده شده در LanguageSwitcher.js',
      'Aتنظیمات برای طراحی ریسپانسیو بهتر',
      'تیلویند سی اس اس آپدیت شد  به to v1.8.6',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'کنش‌های FuseDialog و FuseMessage به لیست serializableCheck ignoredActions اضافه شدند',
      'برنامه Scrumboard: خطای تغییر مسیر موجود در برد برطرف شد.',
      'کامپوننت  formsy فاقد ویژگی رنگ اضافه شده است.',
      'فوتر طرح‌بندی تم نمی‌تواند در تلفن همراه اسکرول کند.',
      'FuseSearch، FuseShortcuts نمی تواند مورد ناوبری ترجمه شده را پیدا کند، فرآیند ترجمه به  redux store منتقل شد.',
    ],
  },
  {
    version: '5.0.0',
    date: '2020-07-18',
    newChanges: [
      <>
       منتقل شد به{' '}
        <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
          Redux-toolkit
        </a>{' '}
        (کتابخانه رسمی Redux)'
      </>,
      'طرح های رنگی تم به روز شد',
      'انتخاب طرح‌های رنگی به تنظیمات پنل اضافه شد',
      'طرح‌بندی اسناد جدید ایجاد شد و محتوا به‌روزرسانی شد.',
      "برجسته‌سازی پیش‌فرض به پیوندهای خارجی اضافه شد ('a.link, a:not([role=button])[target=_blank]').",
      'صفحه ورود/ثبت جدید اضافه شد (LaginPage3، RegisterPage3) صفحات پیش فرض ورود/ثبت به روز شد.',
      'تغییرات استایل برای طرح زمینه بهتر اعمال شد',
      'material- ui اپدیت شد به   v4.11',
      'همه پکیج های وابسته به روز شدند.',
    ],
    notes: (
      <>
        <Typography
          className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16"
          component="div"
        >
        مهاجرت به نسخه اصلی جدید (v5.0.0) به دلیل ادغام redux-toolkit می تواند دشوار باشد.
        </Typography>
        <Typography
          className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16 leading-loose"
          component="div"
        >
         برخی از مزایای redux-toolkit،,
          <ul className="list-disc ml-16">
            <li>redux-toolkit یک کتابخانه رسمی redux است.</li>
            <li>وابستگی های متداول redux موجود در کتابخانه</li>
            <ul className="ml-8">
              <li>"immer": "^7.0.3",</li>
              <li>"redux": "^4.0.0",</li>
              <li>"redux-thunk": "^2.3.0",</li>
              <li>"reselect": "^4.0.0"</li>
            </ul>
            <li>
            RTK بسیاری از استدلال های مربوط به boilerplate و کدهای غیر ضروری را حل می کند.
              <br />
              <ul className="ml-8">
              همانطور که در اسناد رسمی آن ذکر شده است، به حل سه مشکل عمده افراد با Redux کمک می کند:
                <li>“پیکربندی فروشگاه Redux بسیار پیچیده است.”</li>
                <li>“من باید بسته های زیادی را اضافه کنم تا Redux را برای انجام هر کار مفیدی انجام دهم.”</li>
                <li>“Redux به کد boilerplate بیش از حد نیاز دارد.”</li>
              </ul>
            </li>
            <li>
            با بهترین شیوه ها نوشتن redux را آسان تر می کند. - شامل میان افزارهای محبوب به طور پیش فرض (redux-inmutable-state-invariant، serializable-state-invariant-middleware thunk)
            </li>
            <li>
            Redux DevTools به طور پیش‌فرض و با یک پرچم ساده ترو یا فالس پشتیبانی می‌شوند - با تابع CreateSlice، همیشه لازم نیست نوع عمل، عمل و کاهش‌دهنده را جداگانه تعریف کنید.
            </li>
            <li>امکان جهش وضعیت با ImmerJS موجود است.</li>
            <li>
            با کمک یک کتابخانه دیگر شامل Reselect، عملکرد را می توان بهبود بخشید. <br /> - تابع createEntityAdapter مجموعه ای از کاهنده ها و انتخابگرهای از پیش ساخته شده را برای انجام آسانتر عملیات CRUD تولید می کند.
            </li>
          </ul>
          <br />
          <b>با تغییرات، ما 57 فایل مرتبط با redux را از فیوز-ری اکت حذف کردیم.</b>
        </Typography>
      </>
    ),
  },
  {
    version: '4.1.6',
    date: '2020-05-28',
    newChanges: [
      'material- ui اپدیت شد به   v4.10',
      'تیلویند سی اس اس آپدیت شد  به to v1.4.6',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: ['Tooltip z-index issue.'],
  },
  {
    version: '4.1.5',
    date: '2020-04-16',
    newChanges: [
      'material- ui اپدیت شد به   v4.9.10',
      'react آپدیت شد به v16.13.1',
      'همه پکیج های وابسته به روز شدند.',
      'hide/reveal button added to password input at the login page.',
    ],
  },
  {
    version: '4.1.1',
    date: '2020-03-14',
    newChanges: ['نکته مهم برای جلوگیری از مشکلات yarn v2 به سند نصب اضافه شده است.'],
    fixedChanges: ['مشکلات احتمالی برای مدیریت بسته های yarn  و yarn 2'],
  },
  {
    version: '4.1.0',
    date: '2020-03-13',
    newChanges: [
      'react آپدیت شد به v16.13.0',
      'react-table به نسخه 7 به روز شد، همچنین اسناد react-table و جدول برنامه Contacts به روز شد.',
      'formsy-react و HOC آن به روز شده است',
      'material- ui اپدیت شد به   v4.9.5',
      'همه پکیج های وابسته به روز شدند.',
      'بهبود عملکرد.',
      'پس زمینه تکمیل خودکار ورودی تغییر رنگ به شفاف.',
    ],
    fixedChanges: ['خطای FuseChipSelect برجسته کردن.'],
  },
  {
    version: '4.0.1',
    date: '2020-02-16',
    fixedChanges: [
      'react-scripts به نسخه 3.4.0 به روز شد که نسخه کوچکی است و عمدتاً شامل رفع اشکال است.',
    ],
  },
  {
    version: '4.0.0',
    date: '2020-02-10',
    newChanges: [
      'Eslint، پیکربندی prettier بر اساس راهنمای سبک جاوا اسکریپت Airbnb.',
      'Yپشتیبانی از yarn v2 (Package-manager).',
      'yarnrc.yml. ایجاد شده برای حل مسائل وابستگی (وابستگی های از دست رفته و غیره) برای PnP',
      'اسناد با عنوان IDE (Webstorm، VSCode) ایجاد شد.',
      'تغییر تنظیمات انیمیشن اضافه شد.',
      'پایگاه کد بهبود یافته است.',
      'material- ui اپدیت شد به   v4.9.1',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'میوتیشن در تنظیمات مسیر اصلاج شد.',
      'مسائل مربوط به وابستگی دایره ای.',
      'مشکل RTL FuseScrollbar حل شد.',
    ],
    breakingChanges: [
      <span>
    بهینه سازی اندازه بسته: ایمپورت های سطح بالا با ایمپورت مسیر تغییر کرد:
        <a
          href="https://material-ui.com/guides/minimizing-bundle-size/#how-to-reduce-the-bundle-size"
          target="_blank"
          rel="noopener noreferrer"
        >
          #چگونه_می توان_اندازه_بسته_را_کاهش_داد
        </a>
      </span>,
      'دایرکتوری‌های @fuse بازسازی شدند (@fuse/components > @fuse/core و غیره)، ایمپورت های سطح بالا از @fuse/index حذف شدند، مسیرهای ایمپورت  به‌روزرسانی شدند.',
      'همه مسیرهای ایمپورت دوباره مرتب شدند.',
      'همه پروژه ها با پیکربندی prettier, Eslint فرمت شده اند',
      'jss-extend با jss-plugin-extend تغییر کرد',
      'webpack-bundle-analyzer با source-map-explorer تغییر کرد',
    ],
  },
  {
    version: '3.4.0',
    date: '2020-01-16',
    newChanges: [
      'پشتیبانی از زبان راستچین اضافه شد.',
      'پشتیبانی از چند زبان اضافه شده است.',
      'همه پکیج های وابسته به روز شدند.',
      'به همه (مهمان، کاربر) اجازه دسترسی به صفحه ریشه (/) به عنوان صفحه فرود داده شود در حالی که اعتبار کل برنامه محافظت می شود.',
      'عنوان "کاربر وارد شده را به یک مسیر خاص بسته به نقش او هدایت کنید" به FuseAuthorization Doc اضافه شد.',
    ],
    fixedChanges: [
      "react-scripts به نسخه 3.2.0 برگردانده شد: نسخه 3.3.0 در حالت توسعه در IE یا edge کار نمی کند",
      'برنامه Scrumboard: منوی سرصفحه فهرست تابلو کار نمی کند.',
      'پنل چت: دکمه جابجایی در تلفن همراه کار نمی کند. ClickAwayListener با کنترل کننده رویداد سفارشی تغییر کرد.',
    ],
  },
  {
    version: '3.3.0',
    date: '2019-12-17',
    newChanges: [
      'material- ui اپدیت شد به   v4.8.0',
      'طرح تم پیش‌فرض تغییر کرد.',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'برنامه تجارت الکترونیک: هنگام فهرست کردن نتایج جستجو، صفحه جدول را بازنشانی کنید.',
      'داشبورد پروژه: "scales.[x/y]Axes.categoryPercentage" منسوخ شده و با "dataset.categoryPercentage" تغییر کرده است.',
    ],
  },
  {
    version: '3.2.5',
    date: '2019-11-20',
    newChanges: [
      'material- ui اپدیت شد به   v4.6.1',
      'react آپدیت شد به v16.12.0',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: ['کامپوننت طرح بندی FusePage: کشو با کلیک بر روی آن بسته می شود.'],
  },
  {
    version: '3.2.4',
    date: '2019-10-24',
    newChanges: [
      'material- ui اپدیت شد به   v4.5.1',
      'react آپدیت شد به 16.11.0',
      'همه پکیج های وابسته به روز شدند.',
      '@fake-db/mock.js).',
      'برنامه تجارت الکترونیکی، کامپوننت FuseLoading را در حین بارگیری اطلاعات محصول نشان می دهد.',
      'اصلاح اسکرول در صفحه دیالوگ مخاطب در نسخه موبایل در برنامه مخاطبین.',
      'ورودی تاریخ اصلی برنامه تقویم با DateTimePicker تغییر کرد.',
      'FuseNavigation، اتریبیوت dense برای متغیرهای dense اضافه شده است.',
    ],
    fixedChanges: [
      'دکمه NavbarMobileToggleFab برای نمایش عدم وجود نوار ابزار اضافه شد.',
      <span>
      react-select با وجود آرایه خالی، راه‌حلی که برای FuseChipSelect اعمال می‌شود، null برمی‌گرداند.
        <a
          href="https://github.com/intljusticemission/react-big-calendar/issues/1387#issuecomment-531465438"
          target="_blank"
          rel="noopener noreferrer"
        >
       موضوع مرتبط
        </a>
      </span>,
      'Fix for Safari: Contacts App column filter input text is not visible.',
      'Fix for Firefox: ScrumboardApp scroll issue.',
      'suppressScrollX for the navigation at layout-1 for to fix showing horizontal scroll while fold.',
      'Calendar App New Event, moment js deprecation warning - Not in a recognized ISO format',
      <span>
       رفع رها کردن و کشیدن برنامه تقویم:
        <a
          href="https://github.com/JedWatson/react-select/issues/3632"
          target="_blank"
          rel="noopener noreferrer"
        >
          موضوع مرتبط
        </a>
      </span>,
    ],
  },
  {
    version: '3.2.3',
    date: '2019-09-09',
    newChanges: [
      'material- ui اپدیت شد به   v4.4.1',
      'react آپدیت شد به 16.9.0',
      'همه پکیج های وابسته به روز شدند.',
      'FuseChipSelectFormsy Component اضافه شد.',
      'تاخیر بارگیری پیش فرض FuseSuspense به 0 تغییر کرد.',
    ],
    fixedChanges: [
      'موارد FuseHorizontalNav مشکلات جزئی موضوعی دارند.',
      'اصلاحات جزئی برای به‌روزرسانی‌های وابستگی.',
    ],
  },
  {
    version: '3.2.2',
    date: '2019-08-09',
    newChanges: [
      'withRouterAndRef hoc برای استفاده forwardRef با withRouter اضافه شده است.',
      'scrollToTopOnRouteChange به FuseScrollbars اضافه شد.',
      <span>
       پشتیبانی Nested Object برای useForm hook اضافه شده است. <br /> (استفاده از ویژگی <code>{`name="profile.username" value={form.profile.username}`}</code>)
      </span>,
    ],
    fixedChanges: [
      'scrollToTopOnChildChange با scrollToTopOnRouteChange در FusePageCarded تغییر کرد.',
      'Rاگر مسیر مسیر ورودی برنامه باشد، تنظیمات طرح زمینه جزء مسیر اعمال نمی شود.',
    ],
  },
  {
    version: '3.2.1',
    date: '2019-08-08',
    newChanges: [
      'material- ui اپدیت شد به   v4.3.1',
      'پیکربندی tailwind به روز شد.',
      'همه پکیج های وابسته به روز شدند.',
      'Some import paths optimized.',
      'HorizontalNavigation active highlighting added for group and collapse navigation items.',
    ],
    fixedChanges: [
      'FuseLayout do not hold render until settings at the redux state is updated. This causes multiple mount of the route component which has different layout settings.',
      'Layout style issues due to browser updates.',
      'Removal of event listeners in FuseScrollbars (@stephankaag).',
    ],
  },
  {
    version: '3.2.0',
    date: '2019-07-31',
    newChanges: [
      'material- ui اپدیت شد به   v4.3.0',
      'پیکربندی tailwind به روز شد.',
      'همه پکیج های وابسته به روز شدند.',
    ],
    fixedChanges: [
      'وقتی فوتر طرح زمینه ثابت است، برنامه Academy به درستی اسکرول نمی شود.',
      'فرم نام لیست برنامه Scrumboard کار نمی کند.',
    ],
    breakingChanges: [
      'رنگ‌های tailwindcss مطابق با رنگ‌های مواد (مقادیر سایه با رنگ‌ها تغییر می‌کند، برای مثال: .bg-red-dark به .bg-red-700)',
    ],
  },
  {
    version: '3.1.0',
    date: '2019-06-27',
    newChanges: [
      'material- ui اپدیت شد به   v4.1.3',
      'react-big-calendar به نسخه 0.22.0 به روز شد',
      'منتظر رندر باشید در حالی که به صورت خودکار مجدداً با رفرش یا بازدید مجدد کاربر احراز هویت شده وارد سیستم شوید. همچنین تغییر مسیر اضافی را حل می کند.',
      'همه پکیج های وابسته به روز شدند.',
    ],
  },
  {
    version: '3.0.1',
    date: '2019-06-18',
    newChanges: [
      'material- ui اپدیت شد به   v4.1.1',
      'react-redux آپدیت شد به  v7.1.0',
      'react-router اپدیت شد به  v5.0.1',
      'تیلویند سی اس اس آپدیت شد  به to v1.0.4',
      'همه پکیج های وابسته به روز شدند.',
    ],
  },
  {
    version: '3.0.0',
    date: '2019-06-02',
    newChanges: [
      <span>
    همه کدها به هوک  منتقل
        <a
          href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          the hooks
        </a>
        منتقل شدند.{" "}
        (ویژگی جدید react به شما امکان می دهد بدون نوشتن کلاس از حالت و سایر ویژگی های React استفاده کنید.)
      </span>,
      'material- ui اپدیت شد به   v4',
      'react-scripts updated to v3',
      'react-redux آپدیت شد به  v7.1 (برای پشتیبانی از هوک ها)',
      'تیلویند سی اس اس آپدیت شد  به to v1.0.2',
      <span>
     user.role می تواند آرایه ای برای تخصیص چندین نقش مجوز باشد. برای جزییات بیشتر
        <a
          href="http://react-material.fusetheme.com/documentation/fuse-components/fuse-authorization"
          target="_blank"
          rel="noopener noreferrer"
        >
          FuseAuthorization Docs
        </a>
        .را بررسی کنید
      </span>,
      'همه پکیج های وابسته به روز شدند.',
      'پایگاه کد بهبود یافته است.',
    ],
    fixedChanges: [
      <span>
        خطای <i>"createBrowserHistroy از history.js صادر نمی شود"</i> در محیط ویندوز (نادر)
      </span>,
    ],
    breakingChanges: [
      <span>
        react-loadable با React.suspense، React.lazy تغییر کرد. تمام تنظیمات مسیر با React.lazy به روز شدند
      </span>,
      'classNames() replaced with clsx().',
      <span>
   ما دیگر از اینترنت اکسپلورر به طور پیش فرض پشتیبانی نمی کنیم. اگر همچنان به آن نیاز دارید، می‌توانید
        <a
          href="https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-app-polyfill
        </a>
        را برای پشتیبانی نصب کنید.
      </span>,
    ],
    notes: (
      <Typography
        className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16"
        component="div"
      >
        مهاجرت به نسخه اصلی جدید (<b>v3.0.0</b>) به دلیل پشتیبانی از هوک ها و انتشار وابستگی های اصلی می تواند دشوار باشد.
      </Typography>
    ),
  },
  {
    version: '2.2.5',
    date: '2019-03-25',
    newChanges: [
      'بسته های وابستگی به روز شدند (react v16.8.5، react-router v5 و غیره).',
      'ایمیل و  تنظیمات مسیر برنامه‌های Todo به‌روزرسانی شد.',
      'طراحی صفحه تغییرات به روز شد.',
    ],
    fixedChanges: ['اصلاح رنگ متن جزئی.'],
  },
  {
    version: '2.2.4',
    date: '2019-03-06',
    newChanges: [
      'بسته های وابستگی به روز شد (react v16.8.4 و غیره).',
      'پایه setRef به FuseAnimate اضافه شد.',
    ],
    fixedChanges: [
      'لیست سفید به پیکربندی purgecss اضافه شد تا از حذف کلاس های ناوبری ایجاد شده به صورت پویا جلوگیری شود.', 'مشکلات طرح بندی در سافاری <= v10',
    ],
  },
  {
    version: '2.2.3',
    date: '2019-02-27',
    newChanges: [
      'بسته های وابستگی به روز شد (react v16.8.3 etc).',
      'purgecss برای کاهش حجم فایل بیلد تولیدی اضافه شده است.',
    ],
    fixedChanges: [
      'وقتی پیمایش به‌روزرسانی شد یا مسیر مکان تغییر کرد، لازم نیست موارد جمع‌کردن ناوبری عمودی فیوز جمع شوند.',
    ],
    breakingChanges: [
      'src/styles/fuse-helpers.css به src/styles/tailwind.css تغییر نام داد',
      'src/styles/fuse-helpers.tailwind.css به src/styles/tailwind.base.css تغییر نام داد',
    ],
  },
  {
    version: '2.2.2',
    date: '2019-02-18',
    newChanges: [
      'بسته های وابستگی به روز شد (react v16.8.1, react-scripts و غیره).',
      'فایل های PSD به روز شد.',
    ],
    fixedChanges: [
      'رندر کردن Dom در تابع "window.onload" برای صبر کردن همه فایل های بارگذاری شده (فایل های css).',
      'مسائل مربوط به تمینگ (FuseCountdown، جداول صفحات فاکتور).',
    ],
  },
  {
    version: '2.2.1',
    date: '2019-02-11',
    newChanges: [
      'بسته های وابستگی به روز شد (react, material-ui etc).',
      'اکشن  های به روز رسانی، حذف، اعمال و پیش انداختن در FuseNavigation ایجاد شد, صفحه مستندات به روز  شد.',
      'فایل react-chartjs-2-defaults.js ایجاد شد.',
    ],
    fixedChanges: [
      'react، react-dom به رزولوشن‌ها اضافه می‌شوند تا از بارگذاری دو نسخه از react جلوگیری کنند.+\n' +
        "دلیل اصلی این مشکل این است که از auth0-lock استفاده می کند به عنوان وابستگی نه peerDependency و آنها آن را با یک دلیل معتبر تغییر نمی دهند.\n" +
        '(https://github.com/auth0/lock/issues/1148#issuecomment-336765301).',
      'مشکل به‌روزرسانی هدر برنامه تقویم برطرف شد.',
    ],
  },
  {
    version: '2.2.0',
    date: '2019-02-03',
    newChanges: [
      'برنامه داشبورد پروژه اضافه شد.',
      "مورد پیوند خارجی به FuseNavigation اضافه شد (نوع: 'link').",
      '"metecons" فونت های آیکون اضافی اضافه شد.',
      'بسته های وابستگی به روز شد.',
    ],
  },
  {
    version: '2.1.0',
    date: '2019-01-22',
    newChanges: ['برنامه Notes اضافه شد.', 'بسته های وابستگی به روز شد.'],
    fixedChanges: [
      "خطای dir-glob با globby 8.0.2 از طریق قفل کردن نسخه آن رفع می شود. (این خطا فقط زمانی رخ می دهد که از npm برای نصب node_modules به جای yarn استفاده می کنید).",
      'FuseSearch موارد ناوبری محافظت شده را پنهان نکرد.',
    ],
  },
  {
    version: '2.0.0',
    date: '2019-01-11',
    newChanges: [
      'طرح تم جدید اضافه شد (طرح-3)',
      'حالت طرح بندی کانتینر ایجاد شده برای کلاس layout-2 و layout-3"container" به مکان های مربوطه اضافه شد.',
      'FuseSidePanel ایجاد و در layout-3 استفاده شد.',
      'FuseNavigation: متغیر  dense فقط برای طرح افقی اضافه شده است.',
      'FuseShortcuts: متغیرعمودی اضافه شده است.',
      'FuseSearch: متغیر اصلی اضافه شد (layout-3 را بررسی کنید)',
      'dark-material-bg.jpg به پس زمینه گرادیان تغییر کرد.',
      'صفحه HeroiconsUI اصلاح شد.',
      'ایجاد نقشه منبع به طور پیش فرض در ساخت تولید غیرفعال است.',
      'داده های ناوبری در نسخه آزمایشی بازسازی شد.',
      'اسناد به روز شد.',
      'بسته های وابستگی به روز شد.',
    ],
    fixedChanges: [
      'بهبود پایگاه کد.',
      'برخی از اصلاحات IE.',
      'FuseAuthorization باید حالتی داشته باشد تا هنگام تغییر مسیر کاربر غیرمجاز، از نصب اجزای مسیر محدود جلوگیری کند.',
      "«برنامه تجارت الکترونیک، پیمایش محصول به محصول جدید حالت فرم را به‌روزرسانی نکرد",
      'مشکلات زمان‌بندی احراز هویت برطرف شد.',
    ],
    breakingChanges: [
      'طرح‌بندی‌های تم از فایل‌های هسته فیوز@ خارج شده‌اند که به توسعه‌دهندگان امکان می‌دهد طرح‌بندی‌های تم را به راحتی ایجاد یا ویرایش کنند.',
      'ساختار پروژه پس از سیستم طرح بندی جدید تغییر کرد.',
      'وضعیت پیکربندی تم از FuseTheme به فروشگاه redux منتقل شد (fuse.settings).',
    ],
    notes: (
      <Typography
        className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16"
        component="div"
      >
        مهاجرت به نسخه اصلی جدید (v2.0.0) به دلیل تغییرات ساختار پروژه و سیستم چیدمان می تواند دشوار باشد.
      </Typography>
    ),
  },
  {
    version: '1.2.8',
    date: '2018-11-28',
    newChanges: [
      'اپلیکیشن آکادمی اضافه شد.',
      'FuseSearch Component اضافه شد (واقع در نوار ابزار اصلی و جستجو در ناوبری).',
      'صفحه مستندات FuseChipSelect اضافه شد.',
      'بسته های وابستگی به روز شد (Material-ui etc).',
    ],
    fixedChanges: [
      'انواع ورودی موجود به کامپوننت های مرتبه بالاتر Formsy اضافه شده است.',
      'FuseChipSelect استایل های متغیر ثابت شد.',
      "برنامه تجارت الکترونیک، پیمایش محصول به محصول جدید حالت فرم را به‌روزرسانی نکرد.",
      'مشکلات زمان‌بندی احراز هویت برطرف شد.',
    ],
  },
  {
    version: '1.2.7',
    date: '2018-11-18',
    newChanges: [
      'پشتیبانی JWT به احراز هویت منظم اضافه شد.',
      'متغیر های FuseMessage اضافه شد (خطا، موفقیت، هشدار، اطلاعات).',
      'بسته های وابستگی به روز شد (Material-ui etc).',
    ],
    fixedChanges: [
      'FuseMessage تغییر مکان داد (موقعیت مطلق به ثابت تغییر کرد).',
      'وقتی نمایش نوار نوار در تلفن همراه روی نادرست تنظیم شده است، دکمه نوار ناوبری را پنهان کنید.',
      'Layout-1 ناوبری تاشو   تلفن همراه.',
      'نسخه‌های react-router-config react-router-dom مطابقت دارند.',
      'اصلاح سبک برگه‌ها برای طرح‌بندی صفحه‌بندی‌شده.',
    ],
  },
  {
    version: '1.2.6',
    date: '2018-11-07',
    fixedChanges: ['طرح تم-1 رفع اشکال موبایل (!مهم)'],
  },
  {
    version: '1.2.5',
    date: '2018-11-06',
    newChanges: [
      'کامپوننت FuseDialog به طرح تم اضافه شده است تا پیام های محاوره ای را از طریق عمل redux به راحتی نشان دهد.',
      'بسته های وابستگی به روز شد (Material-ui, react-redux etc).',
    ],
    fixedChanges: ['ناوبری تاشو Layout-1 در مرورگر macOS safari خراب  شده است.'],
  },
  {
    version: '1.2.4',
    date: '2018-10-26',
    newChanges: ['بسته های وابستگی به روز شد (React, Material-ui etc).'],
  },
  {
    version: '1.2.3',
    date: '2018-10-14',
    newChanges: [
      'بسته های وابستگی به روز شد (Redux etc).',
      'ابزارهای توسعه‌دهنده Redux در زمان تولید غیرفعال شدند.',
    ],
    fixedChanges: [
      'رفع برنامه افزودنی Redux Developer Tools: اگر برنامه افزودنی در فایرفاکس فعال باشد مشکل رخ می دهد.',
    ],
  },
  {
    version: '1.2.2',
    date: '2018-10-09',
    newChanges: [
      'زمان بارگذاری اولیه با کامپوننت های تقسیم کد ( lazy load) و همچنین کاهش دهنده ها کاهش می یابد.',
      'کتابخانه   redux-loadable اضافه شد.',
      'کامپوننت FuseLoadable برای جلوگیری از تکرار ایجاد شده است.',
      'بسته webpack-bundle-analyzer برای تجزیه و تحلیل ساخت به devDependencies اضافه شد.',
      'Material-ui آپدیت شد به  v3.2.0.',
      'بسته های وابستگی به روز شد.',
    ],
  },
  {
    version: '1.2.1',
    date: '2018-10-04',
    newChanges: [
      'Create-React-app به نسخه 2 به روز شد',
      'Material-ui آپدیت شد به  v3.1.2',
      'گزینه سبک مورد فعال ناوبری برای استفاده از برجسته کردن مربع (سبک قدیمی) اضافه شده است.',
      'بسته های وابستگی به روز شد.',
      'داده ها/دارایی های برنامه تجارت الکترونیک به روز شد.',
    ],
    fixedChanges: [
      'رویداد onChange را به صورت مصنوعی برای کامپوننت های مرتبه بالاتر formsy فعال کنید.',
      // 'Edge, Ie font icon ligature fix.',
    ],
  },
  {
    version: '1.2.0',
    date: '2018-09-25',
    newChanges: [
      "طراحی با مشخصات جدید Google Material Design مدرن شده است. + آیکونها با آیکونهای مواد مشخص شده جایگزین شدند، + خانواده فونت اصلی به Muli تغییر یافت",
      'اپلیکیشن Scrumboard اضافه شد.',
      'Material-ui آپدیت شد به  v3.1.1',
      'FuseChipSelect: "Variant" attr برای انتخاب چند انتخاب قابل ایجاد یا ثابت اضافه شده است.',
      'بسته های وابستگی به روز شد.',
      "@مسیر lodash برای استفاده از میکس های lodash ایجاد شده است.",
      'استایل های نوار اسکرول Webkit اضافه شد.',
      'سرویس‌های Auth (Auth0، Firebase) برای غیرفعال کردن آسان اصلاح شده‌اند.',
      'اصلاحات مختلف دستگاه تلفن همراه اعمال شد.',
    ],
    fixedChanges: ['رویکرد تمیزتر برای برنامه ایمیل.'],
  },
  {
    version: '1.1.8',
    date: '2018-09-08',
    newChanges: [
      'برنامه تجارت الکترونیک اضافه شد.',
      'کامپوننت FuseChipSelect اضافه شد.',
      'Material-ui آپدیت شد به  v3.0.2',
      'بسته های وابستگی به روز شد.',
    ],
  },
  {
    version: '1.1.7',
    date: '2018-08-27',
    newChanges: [
      ' اضافه شدFuseSplashScreen .',
      <span>
        <b>firebaseService</b> و <b>auth0Service</b> ایجاد شد، کامپوننت <b>Auth</b> به عنوان نقطه ورودی برای احراز هویت اضافه شد.
      </span>,
      'ورود، ثبت نام صفحات به دلیل افزودن احراز هویت Auth0 به روز شد.',
      'تغییر مسیر صفحه 404 به مسیرها اضافه شد.',
      'Material-ui آپدیت شد به  v1.5.1',
      'بسته های وابستگی به روز شد.',
    ],
    breakingChanges: ['کامپوننت FirebaseAuth حذف شد و به جای آن از کامپوننت Auth استفاده شد.'],
  },
  {
    version: '1.1.6',
    date: '2018-08-12',
    newChanges: [
      'اپلیکیشن چت اضافه شد.',
      'Material-ui آپدیت شد به  v1.4.3',
      'بسته های وابستگی به روز شد.',
    ],
  },
  {
    version: '1.1.5',
    date: '2018-07-18',
    newChanges: [
      'پنل چت اضافه شد.',
      'مناطق طرح بندی پنل سمت چپ و سمت راست اضافه شدند.',
      'استایل Navbar اصلاح شده است.',
      'Material-ui آپدیت شد به  v1.4.0',
      'Other بسته های وابستگی به روز شد.',
    ],
  },
  {
    version: '1.1.4',
    date: '2018-07-09',
    newChanges: [
      'Todo App added.',
      'Material-ui آپدیت شد به  v1.3.1',
      'Other بسته های وابستگی به روز شد.',
    ],
  },
  {
    version: '1.1.3',
    date: '2018-06-28',
    newChanges: ['Material-ui آپدیت شد به  v1.3.0', 'بسته های وابستگی به روز شد.'],
  },
  {
    version: '1.1.2',
    date: '2018-06-18',
    newChanges: ['تغییر تنظیمات پیش فرض با پارامترهای مسیر.', 'بسته های وابستگی به روز شد.'],
    fixedChanges: [
      'خطای تزریق FuseAnimate، FuseAnimateGroup.',
      'فضای اضافی ناوبری تا شده بین 960 پیکسل و 1280 پیکسل عرض پنجره ثابت شده است.',
    ],
  },
  {
    version: '1.1.1',
    date: '2018-06-10',
    newChanges: [
      <span>
       <code>velocity-react</code> به عنوان وابستگی اضافه شد، از آن برای FuseAnimation استفاده شد
      </span>,
      <span>
        <code>FuseAnimation</code> <code>FuseAnimationGroup</code> برای متحرک سازی آسان اجزا ایجاد شده و بیشتر صفحات را اعمال می کند.
      </span>,
      <span>
      گزینه ویژگی <code>exact</code> برای تطبیق دقیق مکان به آیتم پیمایش اضافه شد.
      </span>,
      'بسته های وابستگی به روز شد.',
    ],
  },
  {
    version: '1.1.0',
    date: '2018-06-06',
    newChanges: [
      'سیستم چیدمان بهبود یافته است.',
      'طرح افقی جدید اضافه شد (طرح-2).',
      <span>
       <code>react-poper</code> به عنوان وابستگی اضافه شد، از آن برای پیمایش افقی استفاده می شود
      </span>,
      <span>
        <code>Material-UI</code> به نسخه 1.2.0 به روز شد
      </span>,
      'بسته های وابستگی به روز شد.',
    ],
    fixedChanges: [
      'به دلیل رفع اشکال React 16.4.0 برای getDeriveredStateFromProps، فرم گفتگوی برنامه Contacts و برنامه تقویم رفع شد.',
      '(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).',
      'اقدامات و کاهش دهنده های ناوبری فیوز اصلاح شده است.',
    ],
    breakingChanges: [
      'ساختار داده تنظیمات طرح‌بندی و طرح زمینه تغییر کرد.',
      'اگر داده های کاربر را در پایگاه داده ذخیره می کنید، تنظیمات ذخیره شده کاربر قدیمی با این نسخه کار نمی کنند.',
      'رفتار پیمایش پیش‌فرض طرح‌بندی صفحه به دلیل مکانیسم طرح‌بندی جدید به singleScroll تغییر کرد، ویژگی innerScroll اضافی نیز اضافه شد..',
      'FuseSettings از پانل تنظیمات جدا شد.',
    ],
  },
  {
    version: '1.0.5',
    date: '2018-05-29',
    newChanges: [
      <span>
       <code>Material-UI</code> به نسخه 1.1.0 به روز شد
      </span>,
      'بسته های وابستگی به روز شد.',
    ],
    fixedChanges: [
      'اگر user.data در Firebase Db وجود داشته باشد، کنترل اضافی اضافه شده است',
      'ناوبری به دلیل رفع اشکال React 16.4.0 برای getDeriveredStateFromProps رفع شد.',
      '(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).',
    ],
  },
  {
    version: '1.0.4',
    date: '2018-05-22',
    newChanges: [
      <span>
         <code>Material-UI</code> به نسخه 1.1.0 به روز شد
      </span>,
      'Firebase integration added as an example for authentication (Also saves user data to firebase/db).',
      'Register Page Created for Firebase.',
      'FuseMessage Component added to theme layout for easily show snackbar messages via redux action.',
    ],
    breakingChanges: [
      <span>
     <code>FuseAuth</code> به FuseAuthorization تغییر نام داد
      </span>,
      'Shortcuts data storage moved under the user.data.',
    ],
  },
  {
    version: '1.0.3',
    date: '2018-05-16',
    newChanges: [
      <span>
         <code>Material-UI</code> به نسخه 1.0.0-rc.0 به روز شد
      </span>,
      <span>
        <a
          href="https://github.com/mui-org/material-ui/releases/tag/v1.0.0-rc.0"
          target="_blank"
          rel="noopener noreferrer"
        >
        آخرین تغییرات را بررسی کنید
        </a>
      </span>,
      <span>
       آپدیت شد <code>google-map-react</code> .
      </span>,
    ],
  },
  {
    version: '1.0.2',
    date: '2018-05-12',
    fixedChanges: [
      'Tailwind error on windows.',
      <span>
      فایل های <code>.env</code> <code>.babelrc</code> موجود نیست اضافه شد.
      </span>,
    ],
  },
  {
    version: '1.0.1',
    date: '2018-05-10',
    newChanges: ['All dependencies updated.'],
    fixedChanges: [
      <span>
       کتابخانه <code>cross-env</code> برای مسیر مطلق در پلتفرم‌ها اضافه شد.
      </span>,
    ],
  },
  {
    version: '1.0.0',
    date: '2018-04-21',
    notes: (
      <ul className="mt-24 pl-24">
        <li>
          <Typography>انتشار اولیه</Typography>
        </li>
      </ul>
    ),
  },
];

export default changelogData;
