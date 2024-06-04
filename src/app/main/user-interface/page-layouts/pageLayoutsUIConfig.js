import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import EmptyExampleComponent from './empty/EmptyExampleComponent';
import PageLayoutOverview from './PageLayoutOverview';
import SimpleWithSidebarsNormalScrollComponent from './simple/with-sidebars/SimpleWithSidebarsNormalScrollComponent';
import SimpleWithSidebarsPageScrollComponent from './simple/with-sidebars/SimpleWithSidebarsPageScrollComponent';
import SimpleWithSidebarsContentScrollComponent from './simple/with-sidebars/SimpleWithSidebarsContentScrollComponent';
import SimpleFullWidthNormalScrollComponent from './simple/full-width/SimpleFullWidthNormalScrollComponent';
import SimpleFullWidthPageScrollComponent from './simple/full-width/SimpleFullWidthPageScrollComponent';
import SimpleFullWidthContentScrollComponent from './simple/full-width/SimpleFullWidthContentScrollComponent';
import CardedFullWidthNormalScrollComponent from './carded/full-width/CardedFullWidthNormalScrollComponent';
import CardedFullWidthPageScrollComponent from './carded/full-width/CardedFullWidthPageScrollComponent';
import CardedFullWidthContentScrollComponent from './carded/full-width/CardedFullWidthContentScrollComponent';
import CardedWithSidebarsNormalScrollComponent from './carded/with-sidebars/CardedWithSidebarsNormalScrollComponent';
import CardedWithSidebarsPageScrollComponent from './carded/with-sidebars/CardedWithSidebarsPageScrollComponent';
import CardedWithSidebarsContentScrollComponent from './carded/with-sidebars/CardedWithSidebarsContentScrollComponent';

const OverviewPageLayoutsUI = lazy(() => import('./OverviewPageLayoutsUI'));

export const overviews = {
  carded: {
    fullWidth: {
      title: 'طرح بندی صفحه با عرض کامل',
      description:
        'طرح بندی کارتی که کل عرض منطقه محتوا را با یک هدر اختصاصی و 3 حالت مختلف اسکرول در بر می گیرد.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'اسکرول نرمال',
        },
        {
          value: 'pageScroll',
          title: 'اسکرول صفحه',
        },
        {
          value: 'contentScroll',
          title: 'اسکرول محتوا',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'بدون دستکاری در ناحیه اسکرول، کل صفحه نمایش اسکرول (پیمایش بدنه).',
          link: '/ui/page-layouts/carded/full-width/normal-scroll',
          component: CardedFullWidthNormalScrollComponent,
        },
        pageScroll: {
          description:
            'فقط ناحیه صفحه اسکرول می‌کند و نوار ابزار اصلی و پاورقی را به ترتیب به بالا و پایین پنجره دید می‌چسباند.',
          link: '/ui/page-layouts/carded/full-width/page-scroll',
          component: CardedFullWidthPageScrollComponent,
        },
        contentScroll: {
          description:
            'فقط قسمت محتوای صفحه اسکرول می‌شود و همه چیز را در موقعیت‌های خود قرار می‌دهد.',
          link: '/ui/page-layouts/carded/full-width/content-scroll',
          component: CardedFullWidthContentScrollComponent,
        },
      },
    },
    withSidebars: {
      title: 'طرح بندی صفحه با ساید بار ',
      description:
        'چیدمان با ساید بار  چپ و راست، هدر اختصاصی و 3 حالت مختلف اسکرول.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'اسکرول نرمال',
        },
        {
          value: 'pageScroll',
         title: 'اسکرول صفحه',
        },
        {
          value: 'contentScroll',
           title: 'اسکرول محتوا',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'بدون دستکاری در ناحیه اسکرول، کل صفحه نمایش اسکرول (پیمایش بدنه).',
          link: '/ui/page-layouts/carded/with-sidebars/normal-scroll',
          component: CardedWithSidebarsNormalScrollComponent,
        },
        pageScroll: {
          description:
            'فقط ناحیه صفحه اسکرول می‌کند و نوار ابزار اصلی و پاورقی را به ترتیب به بالا و پایین پنجره دید می‌چسباند.',
          link: '/ui/page-layouts/carded/with-sidebars/page-scroll',
          component: CardedWithSidebarsPageScrollComponent,
        },
        contentScroll: {
          description:
            'فقط قسمت محتوای صفحه اسکرول می‌شود و همه چیز را در موقعیت‌های خود قرار می‌دهد.',
          link: '/ui/page-layouts/carded/with-sidebars/content-scroll',
          component: CardedWithSidebarsContentScrollComponent,
        },
      },
    },
  },
  simple: {
    fullWidth: {
      title: 'طرح بندی صفحه با عرض کامل',
      description:
        'Layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'اسکرول نرمال',
        },
        {
          value: 'pageScroll',
         title: 'اسکرول صفحه',
        },
        {
          value: 'contentScroll',
           title: 'اسکرول محتوا',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'بدون دستکاری در ناحیه اسکرول، کل صفحه نمایش اسکرول (پیمایش بدنه).',
          link: '/ui/page-layouts/simple/full-width/normal-scroll',
          component: SimpleFullWidthNormalScrollComponent,
        },
        pageScroll: {
          description:
            'فقط ناحیه صفحه اسکرول می‌کند و نوار ابزار اصلی و پاورقی را به ترتیب به بالا و پایین پنجره دید می‌چسباند.',
          link: '/ui/page-layouts/simple/full-width/page-scroll',
          component: SimpleFullWidthPageScrollComponent,
        },
        contentScroll: {
          description:
            'فقط قسمت محتوای صفحه اسکرول می‌شود و همه چیز را در موقعیت‌های خود قرار می‌دهد.',
          link: '/ui/page-layouts/simple/full-width/content-scroll',
          component: SimpleFullWidthContentScrollComponent,
        },
      },
    },
    withSidebars: {
      title: 'طرح بندی صفحه ساده با نوارهای کناری',
      description:
        'چیدمان با ساید بار کناری چپ و راست، هدر اختصاصی و 3 حالت مختلف اسکرول.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'اسکرول نرمال',
        },
        {
          value: 'pageScroll',
         title: 'اسکرول صفحه',
        },
        {
          value: 'contentScroll',
           title: 'اسکرول محتوا',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'بدون دستکاری در ناحیه اسکرول، کل صفحه نمایش اسکرول (پیمایش بدنه).',
          link: '/ui/page-layouts/simple/with-sidebars/normal-scroll',
          component: SimpleWithSidebarsNormalScrollComponent,
        },
        pageScroll: {
          description:
            'فقط ناحیه صفحه اسکرول می‌کند و نوار ابزار اصلی و پاورقی را به ترتیب به بالا و پایین پنجره دید می‌چسباند.',
          link: '/ui/page-layouts/simple/with-sidebars/page-scroll',
          component: SimpleWithSidebarsPageScrollComponent,
        },
        contentScroll: {
          description:
            'فقط قسمت محتوای صفحه اسکرول می‌شود و همه چیز را در موقعیت‌های خود قرار می‌دهد.',
          link: '/ui/page-layouts/simple/with-sidebars/content-scroll',
          component: SimpleWithSidebarsContentScrollComponent,
        },
      },
    },
  },
};

const pageLayoutsUIConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'ui/page-layouts',
      children: [
        {
          path: '',
          element: <Navigate to="overview" />,
        },
        {
          path: 'overview',
          element: <OverviewPageLayoutsUI />,
        },
        {
          path: 'empty',
          element: <EmptyExampleComponent />,
        },
        {
          path: 'carded',
          children: [
            {
              path: 'full-width',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.carded.fullWidth} />,
                },
                {
                  path: 'normal-scroll',
                  element: <CardedFullWidthNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <CardedFullWidthPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <CardedFullWidthContentScrollComponent />,
                },
              ],
            },
            {
              path: 'with-sidebars',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.carded.withSidebars} />,
                },
                {
                  path: 'normal-scroll',
                  element: <CardedWithSidebarsNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <CardedWithSidebarsPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <CardedWithSidebarsContentScrollComponent />,
                },
              ],
            },
          ],
        },
        {
          path: 'simple',
          children: [
            {
              path: 'full-width',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.simple.fullWidth} />,
                },
                {
                  path: 'normal-scroll',
                  element: <SimpleFullWidthNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <SimpleFullWidthPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <SimpleFullWidthContentScrollComponent />,
                },
              ],
            },
            {
              path: 'with-sidebars',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.simple.withSidebars} />,
                },
                {
                  path: 'normal-scroll',
                  element: <SimpleWithSidebarsNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <SimpleWithSidebarsPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <SimpleWithSidebarsContentScrollComponent />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default pageLayoutsUIConfig;
