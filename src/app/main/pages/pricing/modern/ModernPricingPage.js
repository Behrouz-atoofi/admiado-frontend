import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { darken } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import ModernPricingCard from './ModernPricingCard';
import ModernPricingFeatureItem from './ModernPricingFeatureItem';

function ModernPricingPage() {
  const [period, setPeriod] = useState('month');

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex flex-col flex-auto min-w-0 overflow-hidden">
      <div className="relative pt-32 pb-48 sm:pt-80 sm:pb-96 px-24 sm:px-64 overflow-hidden">
        <svg
          className="-z-1 absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: 'divider' }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.05 } }}
          >
            <h2 className="text-xl font-semibold">قیمت گذاری</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            <div className="mt-4 text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight text-center">
              بهره وری خود را کنترل کنید
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.15 } }}
          >
            <Typography
              className="mt-12 sm:text-2xl text-center tracking-tight"
              color="text.secondary"
            >
              کوچک و رایگان شروع کنید، هر چه می خواهید ارتقا دهید.
              <br />
             کنترل همه چیز را در دست بگیرید.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
            <Box
              className="flex items-center mt-32 sm:mt-64 p-2 rounded-full overflow-hidden"
              sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
            >
              <Box
                component="button"
                className={clsx(
                  'h-40 items-center px-16 cursor-pointer rounded-full font-medium',
                  period === 'year' && 'shadow'
                )}
                onClick={() => setPeriod('year')}
                sx={{ backgroundColor: period === 'year' ? 'background.paper' : '' }}
                type="button"
              >
                صورتحساب سالانه
              </Box>

              <Box
                component="button"
                className={clsx(
                  'h-40 items-center px-16 cursor-pointer rounded-full font-medium',
                  period === 'month' && 'shadow'
                )}
                onClick={() => setPeriod('month')}
                sx={{ backgroundColor: period === 'month' ? 'background.paper' : '' }}
                type="button"
              >
               صورتحساب ماهانه
              </Box>
            </Box>
          </motion.div>
        </div>

        <div className="flex justify-center mt-40 sm:mt-80">
          <div className="w-full max-w-sm md:max-w-7xl">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 md:gap-x-24"
            >
              <motion.div variants={item}>
                <ModernPricingCard
                  period={period}
                  title="شخصی"
                  subtitle="ایده آل برای یک فرد یا یک تیم کوچک که در حال گسترش می‌باشد"
                  yearlyPrice="100000 "
                  monthlyPrice="590000 "
                  buttonTitle="شروع"
                  details={
                    <div className="flex flex-col mt-48">
                      <Typography className="font-semibold">ویژگی های اصلی، از جمله:</Typography>
                      <div className="mt-16 space-y-8">
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>10</b> پروژه
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            <b>5GB</b> فضای ذخیره سازی
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">تجزیه و تحلیل</Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">اپلیکیشن رایگان موبایل</Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">دسترسی به انجمن</Typography>
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
              <motion.div variants={item}>
                <ModernPricingCard
                  period={period}
                  title="برتر"
                  subtitle="ایده آل برای تیم های در حال رشدی که می خواهند کنترل بیشتری داشته باشند"
                  yearlyPrice="985000"
                  monthlyPrice="1500000"
                  buttonTitle=" دوره آزمایشی رایگان 14 روزه را شروع کنید"
                  details={
                    <div className="flex flex-col mt-48">
                      <Typography className="font-semibold">علاوه بر امکانات شخصی : </Typography>
                      <div className="mt-16 space-y-8">
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            پروژه های <b>نامحدود</b>
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                            فضای ذخیره سازی <b>نامحدود</b>
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">دامنه های سفارشی</Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">ویرایش انبوه</Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">12 / 5 پشیتبانی</Typography>
                        </div>
                      </div>
                    </div>
                  }
                  isPopular
                />
              </motion.div>
              <motion.div variants={item}>
                <ModernPricingCard
                  period={period}
                 title = "شرکت"
               subtitle="مناسب برای شرکت هایی که خواهان ابزارهای پیشرفته و پشتیبانی هستند"
                  yearlyPrice="$49.00"
                  monthlyPrice="$69.00"
                  buttonTitle="Start a free 7-day trial"
                  details={
                    <div className="flex flex-col mt-48">
                      <Typography className="font-semibold">ویژگی های برتر، به علاوه:</Typography>
                      <div className="mt-16 space-y-8">
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                          سخت افزار <b>اختصاصی</b>
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">
                          زمان آپدیت <b>%99.9</b>
                          </Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">تجزیه و تحلیل پیشرفته</Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">ادغام های شخص ثالث</Typography>
                        </div>
                        <div className="flex">
                          <FuseSvgIcon className="text-green-600" size={20}>
                            heroicons-solid:check
                          </FuseSvgIcon>
                          <Typography className="ml-2 leading-5">پشتیبانی 24/7</Typography>
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Paper className="flex flex-col items-center px-24 py-40 sm:px-64 sm:pt-72 sm:pb-80">
        <div className="w-full max-w-7xl">
          <div>
            <Typography className="text-4xl font-extrabold tracking-tight leading-tight">
              همه چیزهایی که برای ساخت کارآمد نیاز دارید
            </Typography>
            <Typography className="max-w-xl mt-2 text-xl" color="text.secondary">
              ساخت برنامه خود را با استفاده از ابزارهای ما شروع کنید، کارآمد باشید، زمان کمتری را با جزئیات صرف کنید و زمان بیشتری را با کسب و کار خود اختصاص دهید
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-x-24 gap-y-48 sm:grid-cols-2 lg:grid-cols-3 lg:gap-64 w-full mt-48 sm:mt-64">
            <ModernPricingFeatureItem
              icon="heroicons-outline:pencil-alt"
              title="ایجاد و ویرایش پروژه ها"
              subtitle="پروژه ها را ایجاد و ویرایش کنید، تصاویر را از طریق کشیدن دراپ آپلود کنید، دسته بندی ها را اضافه کنید، فیلدهای سفارشی اضافه کنید، فرم های تعاملی ایجاد کنید و موارد دیگر."
            />
            <ModernPricingFeatureItem
              icon="heroicons-outline:filter"
              title="جستجو و فیلتر"
              subtitle="جستجو و فیلتر در پروژه ها، دسته ها و فیلدهای سفارشی. برای دسترسی آسان، جزئیات جستجو و فیلتر را ذخیره کنید."
            />
            <ModernPricingFeatureItem
              icon="heroicons-outline:refresh"
              title="آپدیت های Real Time"
              subtitle="به‌روزرسانی‌های بی‌درنگ که نیازی به بارگیری مجدد صفحه ندارند. به عقب بایستید و تغییرات را در زمان واقعی مشاهده کنید."
            />
            <ModernPricingFeatureItem
              icon="heroicons-outline:tag"
              title="اطلاعات متا"
              subtitle="اطلاعات متا را به فیلدهای سفارشی اضافه و حذف کنید تا آنها را در گزارش ها و نتایج تجزیه و تحلیل متمایز کنید، از آنها برای گزارش های دقیق استفاده کنید."
            />
            <ModernPricingFeatureItem
              icon="heroicons-outline:document-text"
              title="نتایج از پیش رندر شده"
              subtitle="برای دسترسی بیشتر به گزارش‌ها و تجزیه و تحلیل‌ها توسط صفحه‌خوان‌ها و سایر ابزارهای دسترسی، نتایج را از قبل رندر کنید."
            />
            <ModernPricingFeatureItem
              icon="heroicons-outline:chart-square-bar"
              title="تجزیه و تحلیل ساده"
              subtitle="تجزیه و تحلیل ساده بدون جریان داده یا وزن غیر ضروری. نتایج قابل خواندن بیشتر با مصرف داده کمتر."
            />
          </div>
        </div>
      </Paper>
      <Box
        sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}
        className="px-24 py-40 sm:py-48 sm:px-64"
      >
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center">
          <Typography className="text-3xl sm:text-4xl sm:text-5xl font-extrabold leading-6 sm:leading-10">
         بهره وری خود را افزایش دهید.
          </Typography>
          <Typography
            className="mt-8 text-3xl sm:text-4xl sm:text-5xl font-extrabold leading-6 sm:leading-10"
            color="text.secondary"
          >
          استفاده از فیوز را از امروز شروع کنید.
          </Typography>
          <Button
            className="mt-32 px-48 text-lg"
            size="large"
            color="secondary"
            variant="contained"
          >
            ثبت نام رایگان
          </Button>
        </div>
      </Box>

      <div className="flex flex-col items-center pt-12 sm:pt-72 pb-32 sm:pb-80 px-24 sm:px-64">
        <div className="w-full max-w-7xl">
          <div>
            <Typography className="text-4xl font-extrabold tracking-tight leading-tight">
            سوالات متداول
            </Typography>
            <Typography className="max-w-xl mt-8 text-xl" color="text.secondary">
            در اینجا متداول ترین سؤالاتی است که ممکن است قبل از شروع بررسی کنید
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-x-24 gap-y-48 sm:grid-cols-2 lg:gap-x-64 w-full mt-48 sm:mt-64">
            <div>
              <Typography className="text-xl font-semibold">
              مدت زمان آزمایشی رایگان چقدر است؟
              </Typography>
              <Typography className="mt-8 leading-6" color="text.secondary">
                برنامه ما به مدت 14 روز رایگان است، اگر بیشتر می خواهید، می توانید جزئیات پرداخت را ارائه دهید که دوره آزمایشی شما را تا 30 روز افزایش می دهد و 16 روز دیگر را برای امتحان برنامه ما به شما می دهد.
              </Typography>
            </div>
            <div>
              <Typography className="text-xl font-semibold">
               آیا برای استفاده غیرانتفاعی یا آموزشی تخفیف وجود دارد؟
              </Typography>
              <Typography className="mt-2 leading-6" color="text.secondary">
                بله، بسته های شخصی و پرمیوم ما برای استفاده غیرانتفاعی و آموزشی رایگان است. پس از شروع آزمایشی رایگان، مشخصات خود را برای ما ایمیل کنید و در صورت واجد شرایط بودن، حساب شما را ارتقاء خواهیم داد.
              </Typography>
            </div>
            <div>
              <Typography className="text-xl font-semibold">ذخیره سازی برای چیست؟</Typography>
              <Typography className="mt-8 leading-6" color="text.secondary">
                از آنجایی که ما یک ابزار گزارش و تجزیه و تحلیل بسیار دقیق ارائه می کنیم، آنها به فضای ذخیره سازی کمی نیاز دارند. برای استفاده متوسط، لازم نیست نگران تمام شدن فضا باشید زیرا بسته شخصی پروژه هایی را که می توانید داشته باشید محدود می کند.
              </Typography>
              <Typography className="mt-8 leading-6" color="text.secondary">
                بنا به دلایلی اگر فضای خالی شما تمام شد، با ما تماس بگیرید و ما خواهیم دید که در مورد آن چه کاری می توان انجام داد و مطمئن خواهیم شد که گزارش های غیر ضروری و/یا داده های تحلیلی تولید نمی کنید.
              </Typography>
            </div>
            <div>
              <Typography className="text-xl font-semibold">
               اگر راضی نباشم چه اتفاقی می افتد؟
              </Typography>
              <Typography className="mt-8 leading-6" color="text.secondary">
               اگر هنوز در دوره آزمایشی رایگان خود هستید، می توانید در هر زمان با یک کلیک یک دکمه حساب خود را لغو کنید. اگر قبلاً برای ماه اول خود پرداخت کرده اید، ما همچنین 30 روز ضمانت بازگشت وجه را بدون هیچ سؤالی ارائه می دهیم.
              </Typography>
              <Typography className="mt-8 leading-6" color="text.secondary">
               پس از ماه اول، همچنان می‌توانید در هر زمانی حساب خود را لغو کنید، اما ما مبلغی را محاسبه می‌کنیم که مربوط به روزهایی است که در آن ماه از برنامه ما استفاده کرده‌اید و فقط مبلغ باقی‌مانده را بازپرداخت می‌کنیم.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernPricingPage;
