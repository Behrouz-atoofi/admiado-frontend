import FuseNavigation from '@fuse/core/FuseNavigation';

const navigationData = [
  {
    id: '1',
    title: 'اقدامات',
    subtitle: 'تسک، پروژه و تیم',
    type: 'group',
    children: [
      {
        id: '1.1',
        title: 'ایجاد تسک',
        type: 'item',
        icon: 'heroicons-outline:plus-circle',
      },
      {
        id: '1.2',
        title: 'ایجاد تیم',
        type: 'item',
        icon: 'heroicons-outline:user-group',
      },
      {
        id: '1.3',
        title: 'ایجاد پروژه',
        type: 'item',
        icon: 'heroicons-outline:briefcase',
      },
      {
        id: '1.4',
        title: 'ایجاد کاربر',
        type: 'item',
        icon: 'heroicons-outline:user-add',
      },
      {
        id: '1.5',
        title: 'کاربر یا تیم را اختصاص دهید',
        subtitle: 'به یک کار یا پروژه اختصاص دهید',
        type: 'item',
        icon: 'heroicons-outline:badge-check',
      },
    ],
  },
  {
    id: '2',
    title: 'تسک ها',
    type: 'group',
    children: [
      {
        id: '2.1',
        title: 'همه تسک ها',
        type: 'item',
        icon: 'heroicons-outline:clipboard-list',
        badge: {
          title: '49',
          classes: 'px-2 bg-primary text-on-primary rounded-full',
        },
      },
      {
        id: '2.2',
        title: 'تسک های در حال انجام',
        type: 'item',
        icon: 'heroicons-outline:clipboard-copy',
      },
      {
        id: '2.3',
        title: 'تسک های کامل شده',
        type: 'item',
        icon: 'heroicons-outline:clipboard-check',
      },
      {
        id: '2.4',
        title: 'تسک های رها شده',
        type: 'item',
        icon: 'heroicons-outline:clipboard',
      },
      {
        id: '2.5',
        title: 'به من اختصاص داده شده',
        type: 'item',
        icon: 'heroicons-outline:user',
      },
      { id: '2.6', title: 'به تیم من اختصاص داده شده است', type: 'item', icon: 'heroicons-outline:users' },
    ],
  },
  {
    id: '3',
    title: 'تنظیمات',
    type: 'group',
    children: [
      {
        id: '3.1',
        title: 'عمومی',
        type: 'collapse',
        icon: 'heroicons-outline:cog',
        children: [
          {
            id: '3.1.1',
            title: 'تسک ها',
            type: 'item',
          },
          {
            id: '3.1.2',
            title: 'کاربران',
            type: 'item',
          },
          {
            id: '3.1.3',
            title: 'تیم ها',
            type: 'item',
          },
        ],
      },
      {
        id: '3.2',
        title: 'حساب کاربری',
        type: 'collapse',
        icon: 'heroicons-outline:user-circle',
        children: [
          {
            id: '3.2.1',
            title: 'شخصی',
            type: 'item',
          },
          {
            id: '3.2.2',
            title: 'پرداخت',
            type: 'item',
          },
          {
            id: '3.2.3',
            title: 'امنیت',
            type: 'item',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    type: 'divider',
  },
];

function DemoSidebar() {
  return (
    <div className="px-12 py-24 min-h-6xl">
      <div className="mx-12 text-3xl font-bold tracking-tighter">دمو سایدبار</div>

      <FuseNavigation navigation={navigationData} className="px-0" />
    </div>
  );
}

export default DemoSidebar;
