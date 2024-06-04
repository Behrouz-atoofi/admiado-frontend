import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';

function ModernInvoicePage() {
  return (
    <div className="inline-block p-24 sm:p-40 text-left print:p-0 w-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ bounceDamping: 0 }}
      >
        <Card className="w-xl p-64 mx-auto rounded-2xl shadow print:w-auto print:rounded-none print:shadow-none print:bg-transparent">
          <CardContent className="">
            <div className="flex items-start">
              <div className="grid grid-rows-2 place-items-start gap-y-48">
                <div className="grid auto-cols-max grid-flow-col gap-x-32">
                  <div className="place-self-center w-96">
                    <img className="w-96" src="assets/images/logo/logo.svg" alt="lozgo" />
                  </div>
                  <div className="pl-40 border-l text-md">
                  <Typography className="font-medium">تهران</Typography>
                  <Typography> خیابان گلها، کوچه گل نیلوفر 1، پلاک 28</Typography>
                  <Typography> خیابان گلها، کوچه گل نیلوفر 1، پلاک 28</Typography>
                  <Typography>+98 123 455 87</Typography>
                  <Typography>hello@fuseinc.com</Typography>
                  <Typography>www.fuseinc.com</Typography>
                  </div>
                </div>
                <div className="grid auto-cols-max grid-flow-col gap-x-32">
                  <Typography
                    className="place-self-center w-96 text-center text-2xl"
                    color="text.secondary"
                  >
             ارسال به
                  </Typography>
                  <div className="pl-40 border-l text-md">
                  <Typography className="text-xl font-medium">فاطمه کاظمی</Typography>
              <Typography>بین خیابان جواهریان و ضیایی، نرسیده به پارک، خیابان گلها، </Typography>
              <Typography>hughes.brian@company.com</Typography>
              <Typography>+98  552 455 87</Typography>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-16 gap-y-4 ml-auto">
                <Typography
                  className="justify-self-end text-4xl tracking-tight"
                  color="text.secondary"
                >
                   صورتحساب
                </Typography>
                <Typography className="text-4xl">#9-0004</Typography>
                <Typography
                  className="justify-self-end font-medium tracking-tight"
                  color="text.secondary"
                >
                    تاریخ صورتحساب
                </Typography>
                <Typography className="font-medium">20 مرداد 1402</Typography>
                <Typography
                  className="justify-self-end font-medium tracking-tight"
                  color="text.secondary"
                >
                   تاریخ سررسید
                </Typography>
                <Typography className="font-medium">20 شهریور 1402</Typography>
                <Typography
                  className="justify-self-end font-medium tracking-tight"
                  color="text.secondary"
                >
                  کل سررسید
                </Typography>
                <Typography className="font-medium">235,000.00 تومان</Typography>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-4 mt-16">
              <Typography className="col-span-8 font-medium text-md" color="text.secondary">
              سرویس
              </Typography>
              <Typography className="font-medium text-md text-right" color="text.secondary">
              نرخ
              </Typography>
              <Typography className="font-medium text-md text-right" color="text.secondary">
              تعداد
              </Typography>
              <Typography
                className="col-span-2 font-medium text-md text-right"
                color="text.secondary"
              >
                کل
              </Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">نمونه اولیه و طراحی</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                نمونه سازی از گردش کار کلی برنامه و طراحی دقیق 72 صفحه نمایش آن به عنوان نمونه اولیه کار
                </Typography>
              </div>
              <Typography className="self-center text-right"> تومان 75.00</Typography>
              <Typography className="self-center text-right">240</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 18,000.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">توسعه</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                توسعه وب و موبایل اپلیکیشن با استفاده از ابزارهای مناسب و
ثبت آن در فروشگاه های بزرگ برنامه
                </Typography>
              </div>
              <Typography className="self-center text-right">تومان 60.50</Typography>
              <Typography className="self-center text-right">350</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 21,175.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">آزمایش کردن</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                تست گسترده برنامه با استفاده از دستگاه های مختلف موبایل و دسکتاپ با
سیستم عامل های مختلف.
                </Typography>
              </div>
              <Typography className="self-center text-right">تومان 25.00</Typography>
              <Typography className="self-center text-right">50</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 1,250.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">مستندات</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                توسعه مستندات دقیق، تهیه راهنماها و فیلم های آموزشی و آموزش گسترده 2 نفر
                </Typography>
              </div>
              <Typography className="self-center text-right">تومان 26.50</Typography>
              <Typography className="self-center text-right">260</Typography>
              <Typography className="col-span-2 self-center text-right">تومان 6,890.00</Typography>

              <div className="col-span-12 mt-64" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
              جمع  کل
              </Typography>
              <Typography className="col-span-2 text-right text-lg">تومان 47,315.00</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
                مالیات
              </Typography>
              <Typography className="col-span-2 text-right text-lg">تومان 2,365.75</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
               تخفیف
              </Typography>
              <Typography className="col-span-2 text-right text-lg">تومان 180.75</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center text-2xl font-medium tracking-tight"
                color="text.secondary"
              >
                کل
              </Typography>
              <Typography className="col-span-2 text-right text-2xl font-medium">
                تومان 49,000.00
              </Typography>
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

export default ModernInvoicePage;

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
