import { fuseReactLatestVersion } from './changelog/ChangelogDoc';
import FuseComponentsNavigation from './fuse-components/FuseComponentsNavigation';
import MaterialUIComponentsNavigation from './material-ui-components/MaterialUIComponentsNavigation';
import ThirdPartyComponentsNavigation from './third-party-components/ThirdPartyComponentsNavigation';

const DocumentationNavigation = {
  id: 'documentation',
  title: 'مستندات',
  subtitle: 'تمام مواردی که باید در مورد Fuse بدانید',
  icon: 'heroicons-outline:support',
  type: 'group',
  children: [
    {
      id: 'changelog',
      title: 'تاریخچهٔ تغییرات',
      type: 'item',
      icon: 'heroicons-outline:speakerphone',
      url: '/documentation/changelog',
      badge: {
        title: fuseReactLatestVersion,
        bg: 'rgb(236, 12, 142)',
        fg: '#FFFFFF',
      },
    },
    {
      id: 'getting-started',
      title: '"شروع به کار"',
      type: 'collapse',
      icon: 'play_arrow',
      children: [
        {
          id: 'introduction-doc',
          title: 'معرفی',
          type: 'item',
          url: '/documentation/getting-started/introduction',
        },
        {
          id: 'installation-doc',
          title: 'نصب',
          type: 'item',
          url: '/documentation/getting-started/installation',
        },
        {
          id: 'git-repository-doc',
          title: 'مخزن گیت',
          type: 'item',
          url: '/documentation/getting-started/git-repository',
        },
      ],
    },
    {
      id: 'development',
      title: 'توسعه',
      type: 'collapse',
      icon: 'developer_board',
      children: [
        {
          id: 'development-server-doc',
          title: 'سرور توسعه',
          type: 'item',
          url: '/documentation/development/development-server',
        },
        {
          id: 'production-doc',
          title: 'تولید  ',
          type: 'item',
          url: '/documentation/development/production',
        },
        {
          id: 'deployment-doc',
          title: 'دیپلوی',
          type: 'item',
          url: '/documentation/development/deployment',
        },
        {
          id: 'directory-structure-doc',
          title: 'ساختار دایرکتوری',
          type: 'item',
          url: '/documentation/development/directory-structure',
        },
        {
          id: 'api-calls-doc',
          title: 'فراخوانی API',
          type: 'item',
          url: '/documentation/development/api-calls',
        },
        {
          id: 'updating-fuse-react-doc',
          title: '  به روز رسانی Fuse React',
          type: 'item',
          url: '/documentation/development/updating-fuse-react',
        },
        {
          id: 'fuse-react-ides-vscode-webstorm-doc',
          title: 'IDE ها (Webstorm، VsCode)',
          type: 'item',
          url: '/documentation/development/ides-vscode-webstorm',
        },
        {
          id: 'fuse-react-heroku-notes-doc',
          title: 'یادداشت های HEROKU',
          type: 'item',
          url: '/documentation/development/heroku-notes',
        },
      ],
    },
    {
      id: 'mock-api',
      title: 'ای پی آی mock',
      type: 'item',
      icon: 'heroicons-outline:cloud',
      url: '/documentation/mock-api',
    },
    {
      id: 'theming',
      title: 'تمینگ',
      type: 'collapse',
      icon: 'palette',
      children: [
        {
          id: 'theme-schemes-doc',
          title: 'طرح های تم',
          type: 'item',
          url: '/documentation/theming/theme-schemes',
        },
        {
          id: 'theme-layouts-doc',
          title: 'طرح بندی قالب',
          type: 'item',
          url: '/documentation/theming/theme-layouts',
        },
        {
          id: 'page-layouts-doc',
          title: 'طرح بندی صفحه',
          type: 'item',
          url: '/documentation/theming/page-layouts',
        },
        {
          id: 'rtl-doc',
          title: 'پشتبانی راست چین',
          type: 'item',
          url: '/documentation/theming/rtl-support',
        },
        {
          id: 'changing-default-font-doc',
          title: 'تغییر فونت پیش فرض',
          type: 'item',
          url: '/documentation/theming/changing-default-font',
        },
      ],
    },
    {
      id: 'configs',
      title: 'پیکربندی',
      type: 'collapse',
      icon: 'settings',
      children: [
        {
          id: 'default-settings-doc',
          title: 'تنظیمات پیش فرض',
          type: 'item',
          url: '/documentation/configuration/settings',
        },
        {
          id: 'fuse-react-routing-doc',
          title: 'مسیریابی',
          type: 'item',
          url: '/documentation/configuration/routing',
        },
        {
          id: 'fuse-react-navigation-doc',
          title: 'ناوبری',
          type: 'item',
          url: '/documentation/configuration/navigation',
        },
        {
          id: 'fuse-react-code-splitting-doc',
          title: 'تقسیم کد',
          type: 'item',
          url: '/documentation/configuration/code-splitting',
        },
        {
          id: 'fuse-react-multi-language-doc',
          title: 'چندزبانه',
          type: 'item',
          url: '/documentation/configuration/multi-language',
        },
      ],
    },
    {
      id: 'authentication',
      title: 'احراز هویت',
      type: 'collapse',
      icon: 'verified_user',
      children: [
        {
          id: 'jwt-auth-doc',
          title: 'سرویس احراز هویت JWT',
          type: 'item',
          url: '/documentation/authentication/jwt',
        },
      ],
    },
    FuseComponentsNavigation,
    MaterialUIComponentsNavigation,
    ThirdPartyComponentsNavigation,
  ],
};

export default DocumentationNavigation;
