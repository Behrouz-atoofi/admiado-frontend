import sub from 'date-fns/sub';

const exampleActivitiesData = [
  {
    id: '493190c9-5b61-4912-afe5-78c21f1044d7',
    icon: 'heroicons-solid:star',
    description: 'درخواست شما پذیرفته شد',
    date: sub(new Date(), { minutes: 25 }),
    extraContent: `<div class="font-bold">برای قبولی شما تبریک می گویم!</div><br>
                        <div>سلام علی,<br>درخواست شما پذیرفته شده است و شما آماده انتقال به مرحله بعدی هستید. وقتی آماده شدید، با من تماس بگیرید و ما ....</div>`,
  },
  {
    id: '6e3e97e5-effc-4fb7-b730-52a151f0b641',
    image: 'assets/images/avatars/male-04.jpg',
    description:
      '<strong>پویان صابری</strong> شما را به گروه <strong>پروژه فوق سری</strong> اضافه کرد و به عنوان <strong>مدیر پروژه</strong> منصوب کرد',
    date: sub(new Date(), { minutes: 50 }),
    linkedContent: 'پروژه فوق سری',
    link: '/dashboards/project',
    useRouter: true,
  },
  {
    id: 'b91ccb58-b06c-413b-b389-87010e03a120',
    icon: 'heroicons-solid:mail',
    description: 'شما 15 نامه خوانده نشده در 3 صندوق پستی دارید',
    date: sub(new Date(), { hours: 3 }),
    linkedContent: 'صندوق پستی',
    link: '/apps/mailbox',
    useRouter: true,
  },
  {
    id: '541416c9-84a7-408a-8d74-27a43c38d797',
    icon: 'heroicons-solid:refresh',
    description: '<strong>کانتینر Docker</strong> شما آماده انتشار است',
    date: sub(new Date(), { hours: 5 }),
    linkedContent: 'کانتینر را دانلود کن',
    link: '.',
    useRouter: true,
  },
  {
    id: 'ef7b95a7-8e8b-4616-9619-130d9533add9',
    image: 'assets/images/avatars/male-06.jpg',
    description: '<strong>محمد طیبی </strong> درخواست دوستی شما را پذیرفت',
    date: sub(new Date(), { hours: 7 }),
    extraContent: `شما <span class="font-semibold">8</span> دوست مشترک دارید.`,
  },
  {
    id: 'eb8aa470-635e-461d-88e1-23d9ea2a5665',
    image: 'assets/images/avatars/female-04.jpg',
    description: '<strong> فاطمه امانی</strong> یک پیام مستقیم برای شما ارسال کرد',
    date: sub(new Date(), { hours: 9 }),
  },
  {
    id: 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
    icon: 'heroicons-solid:mail',
    description: 'شما 3 ایمیل جدید دارید',
    date: sub(new Date(), { days: 1 }),
    extraContent: `<ol class="list-decimal list-inside space-y-2">
                            <li class="font-medium">لطفا توافقنامه پیوست را بررسی و امضا کنید</li>
                            <li class="font-medium">تایید آدرس تحویل</li>
                            <li class="font-medium">مشتریان قبلی و فاکتورهای آنها</li>
                        </ol>`,
    linkedContent: 'صندوق پستی',
    link: '/apps/mailbox',
    useRouter: true,
  },
  {
    id: 'fd0f01b4-f3de-4333-add5-cd86850279f8',
    image: 'assets/images/avatars/female-02.jpg',
    description: '<strong>صبا رضایی</strong> یک گفتگو را با شما آغاز کرد',
    date: sub(new Date(), { days: 1 }),
    linkedContent: ' گفتگو کن با (صبا رضایی)',
    link: '/apps/chat/5636c0ba-fa47-42ca-9160-27340583041e',
    useRouter: true,
  },
  {
    id: '8f8e1bf9-4661-4939-9e43-390957b60f42',
    icon: 'heroicons-solid:star',
    description:
      'ارسال شما پذیرفته شده است و شما آماده ثبت نام برای تکلیف نهایی هستید که تا 2 روز دیگر آماده می شود.',
    date: sub(new Date(), { days: 3 }),
  },
  {
    id: '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
    icon: 'heroicons-solid:refresh',
    description: 'کانتینر Vagrant شما آماده دانلود است',
    date: sub(new Date(), { days: 4 }),
  },
];

export default exampleActivitiesData;
