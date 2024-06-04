import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

function CompactInvoicePage() {
  return (
    <div className="inline-block p-24 sm:p-40 text-left print:p-0 w-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ bounceDamping: 0 }}
      >
        <Card className="w-xl p-64 mx-auto rounded-2xl shadow print:w-auto print:rounded-none print:shadow-none print:bg-transparent">
          <CardContent className="">
            <div className="flex items-start justify-between">
              <div className="grid grid-cols-2 gap-x-16 gap-y-1">
                <Typography className="text-4xl tracking-tight" color="text.secondary">
              صورتحساب
                </Typography>
                <Typography className="text-4xl">#9-0004</Typography>
                <Typography className="font-medium tracking-tight" color="text.secondary">
                 تاریخ صورتحساب
                </Typography>
                <Typography className="font-medium">20 مرداد 1402</Typography>
                <Typography className="font-medium tracking-tight" color="text.secondary">
                تاریخ سررسید
                </Typography>
                <Typography className="font-medium">20 شهریور 1402</Typography>
                <Typography className="font-medium tracking-tight" color="text.secondary">
                کل سررسید
                </Typography>
                <Typography className="font-medium">235,000.00 تومان</Typography>
              </div>

              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.dark,
                  color: (theme) => theme.palette.getContrastText(theme.palette.primary.dark),
                }}
                className="grid auto-cols-max grid-flow-col gap-x-32 -mr-64 py-24 px-32 rounded-l-2xl"
              >
                <div className="place-self-center w-96">
                  <img className="w-96" src="assets/images/logo/logo.svg" alt="قالب ادمین ری اکتی Fuse" />
                </div>
                <Box
                  className="pl-40 border-l text-md"
                  sx={{
                    borderColor: (theme) =>
                      alpha(theme.palette.getContrastText(theme.palette.primary.dark), 0.25),
                  }}
                >
                  <Typography className="font-medium">تهران</Typography>
                  <Typography> خیابان گلها، کوچه گل نیلوفر 1، پلاک 28</Typography>
                  <Typography> خیابان گلها، کوچه گل نیلوفر 1، پلاک 28</Typography>
                  <Typography>+98 123 455 87</Typography>
                  <Typography>hello@fuseinc.com</Typography>
                  <Typography>www.fuseinc.com</Typography>
                </Box>
              </Box>
            </div>

            <div className="text-md">
              <Typography className="text-xl font-medium">فاطمه کاظمی</Typography>
              <Typography>بین خیابان جواهریان و ضیایی، نرسیده به پارک، خیابان گلها، </Typography>
              <Typography>hughes.brian@company.com</Typography>
              <Typography>+98  552 455 87</Typography>
            </div>

            <div className="grid grid-cols-12 gap-x-4 mt-48">
              <div className="col-span-8 font-medium text-md" color="text.secondary">
              سرویس
              </div>
              <div className="font-medium text-md text-right" color="text.secondary">
              نرخ
              </div>
              <div className="font-medium text-md text-right" color="text.secondary">
              تعداد
              </div>
              <div className="col-span-2 font-medium text-md text-right" color="text.secondary">
              کل
              </div>

              <div className="col-span-12 my-16 border-b" />

              <Typography className="col-span-8 text-lg font-medium">نمونه اولیه و طراحی</Typography>
              <Typography className="self-center text-right">75,000 تومان</Typography>
              <Typography className="self-center text-right">240</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 18,000.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <Typography className="col-span-8 text-lg font-medium">توسعه</Typography>
              <Typography className="self-center text-right">تومان 60.50</Typography>
              <Typography className="self-center text-right">350</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 21,175.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <Typography className="col-span-8 text-lg font-medium">آزمایش کردن</Typography>
              <Typography className="self-center text-right">تومان 25.00</Typography>
              <Typography className="self-center text-right">50</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 1,250.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <Typography className="col-span-8 text-lg font-medium">
              مستندات
              </Typography>
              <Typography className="self-center text-right">تومان 26.50</Typography>
              <Typography className="self-center text-right">260</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 6,890.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8 text-lg font-medium">رفع اشکالات اساسی برای یک سال</div>
              <div className="self-center text-right">تومان 25,000</div>
              <div className="self-center text-right">2</div>
              <div className="col-span-2 self-center text-right">تومان 50,000.00</div>

              <div className="col-span-12 my-16 border-b" />

              <Typography className="col-span-8 text-lg font-medium">
              به روز رسانی امنیتی تمدید شده برای یک سال
              </Typography>
              <Typography className="self-center text-right">تومان 15.000</Typography>
              <Typography className="self-center text-right">2</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 30,000.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <Typography className="col-span-8 text-lg font-medium">
              به روز رسانی تمدید شده برای یک سال
              </Typography>
              <Typography className="self-center text-right">تومان 50.000</Typography>
              <Typography className="self-center text-right">2</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 100,000.00</Typography>

              <div className="col-span-12 mt-64" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
                جمع کل
              </Typography>
              <Typography className="col-span-2 text-right text-lg">تومان 227,315.00</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
               مالیات
              </Typography>
              <Typography className="col-span-2 text-right text-lg">تومان 11,365.75</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
               تخفیف
              </Typography>
              <Typography className="col-span-2 text-right text-lg">تومان 3,680.75</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center text-2xl font-medium tracking-tight"
                color="text.secondary"
              >
               کل
              </Typography>
              <div className="col-span-2 text-right text-2xl font-medium">تومان 235,000.00</div>
            </div>

            <div className="mt-64">
              <Typography className="font-medium">
              لطفا ظرف 15 روز پرداخت کنید. از بیزینس شما متشکریم
              </Typography>
              <div className="flex items-start mt-16">
                <img className="flex-0 w-40 mt-8" src="assets/images/logo/logo.svg" alt="قالب ادمین ری اکتی Fuse" />
                <Typography className="ml-24 text-sm" color="text.secondary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default CompactInvoicePage;

/**

 Use the following elements to add breaks to your pages. This will make sure that the section in between
 these elements will be printed on a new page. The following two elements must be used before and after the
 page content that you want to show as a new page. So, you have to wrap your content with them.

 Elements:
 ---------
 <div className="page-break-after"></div>
 <div className="page-break-before"></div>


 Example:
 --------

 Initial page content!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the second page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the third page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>
 * */
