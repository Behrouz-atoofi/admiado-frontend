import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import fa from './navigation-i18n/fa';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import authRoles from '../auth/authRoles';

i18next.addResourceBundle('fa', 'navigation', fa);
i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'apps',
    title: 'Applications',
    translate: 'ابزارها',
    subtitle: 'برنامه های کاربردی و سفارشی',
    type: 'group',
    icon: 'heroicons-outline:cube',
    children: [
      {
        id: 'apps.academy',
        title: 'Academy',
        translate: 'آکادمی',
        type: 'item',
        icon: 'heroicons-outline:academic-cap',
        url: '/apps/academy',
      },
      {
        id: 'apps.chat',
        title: 'Chat',
        translate: 'چت',
        type: 'item',
        icon: 'heroicons-outline:chat-alt',
        url: '/apps/chat/training',
      },
      {
        id: 'apps.help-center',
        title: 'Help Center',
        translate: 'مرکز کمک',
        type: 'collapse',
        icon: 'heroicons-outline:support',
        url: '/apps/help-center',
        children: [
          {
            id: 'apps.help-center.home',
            title: 'Home',
            translate: 'خانه',
            type: 'item',
            url: '/apps/help-center',
            end: true,
          },
          {
            id: 'apps.help-center.faqs',
            title: 'FAQs',
            translate: 'سوالات متداول',
            type: 'item',
            url: '/apps/help-center/faqs',
          },
          {
            id: 'apps.help-center.guides',
            title: 'Guides',
            translate: 'راهنما ها',
            type: 'item',
            url: '/apps/help-center/guides',
          },
          {
            id: 'apps.help-center.support',
            title: 'Support',
            translate: 'پشتیبانی',
            type: 'item',
            url: '/apps/help-center/support',
          },
        ],
      }
    ],
  },{
    id: 'dashboards',
    title: 'Dashboards',
    translate: 'پنل کاربری',
    type: 'group',
    icon: 'heroicons-outline:home',
    children: [
      {
        id: 'apps.profile',
        title: 'Profile',
        translate: 'پروفایل',
        type: 'item',
        icon: 'heroicons-outline:user-circle',
        url: '/apps/profile',
      },
      {
        id: 'pages.pricing.simple',
        title: 'Pricing',
        translate: 'خرید اشتراک',
        type: 'item',
        icon: 'heroicons-outline:shopping-cart',
        url: '/pages/pricing/simple',
      },
      {
        id: 'dashboards.finance',
        title: 'Finance',
        translate: 'مالی',
        type: 'item',
        icon: 'heroicons-outline:cash',
        url: '/dashboards/finance',
      },{
        id: 'sign-out',
        title: 'Sign out',
        translate: 'خروج',
        type: 'item',
        auth: authRoles.user,
        url: 'sign-out',
        icon: 'exit_to_app',
      }
    ],
  }
];

export default navigationConfig;
