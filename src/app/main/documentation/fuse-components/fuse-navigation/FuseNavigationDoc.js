import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseUtils from '@fuse/utils';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import {
  appendNavigationItem,
  prependNavigationItem,
  removeNavigationItem,
  resetNavigation,
  setNavigation,
  updateNavigationItem,
} from 'app/store/fuse/navigationSlice';

function FuseNavigationDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseNavigation
      </Typography>

      <Typography className="mb-16" component="p">
      <code>FuseNavigation</code> یک کامپوننت فیوز سفارشی ساخته شده است که به شما امکان می دهد یک ناوبری جمع شونده چند سطحی ایجاد کنید.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [ناوبری]
      </Typography>

      <Typography className="mb-16" component="p">
      <code>FuseNavigation</code> از یک آرایه برای پر کردن کل مسیریابی استفاده می کند. از چهار آیتم ناوبری مختلف پشتیبانی می کند. گروه، جمع کردن، آیتم و تقسیم کننده. این موارد را می توان برای ایجاد طرح های ناوبری منحصر به فرد و پیچیده با هم ترکیب کرد.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [طرح بندی(layout)]
      </Typography>

      <Typography className="mb-16" component="p">
      گزینه های طرح بندی "عمودی" یا "افقی".
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [فعال]
      </Typography>

      <Typography className="mb-16" component="p">
      می توانید <b>active</b> را روی "مربع" تنظیم کنید تا از سبک مورد فعال مربعی به جای گرد/دایره برای <b>طرح بندی عمودی</b> استفاده کنید.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        [dense]
      </Typography>

      <Typography className="mb-16" component="p">
      می توانید از <b>{`dense={true}`}</b> برای تنظیم متغیر dense پیمایش استفاده کنید.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
      استفاده
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                    <FuseNavigation navigation={navigation} layout="vertical" active="square" dense={true}/>
                                `}
      </FuseHighlight>

      <Typography className="mt-48 mb-8" variant="h4">
      انواع آیتم های ناوبری
      </Typography>

      <Typography className="mt-32 p-8 rounded-4 bg-yellow-100 border-1 border-yellow-700 text-black mb-8">
      دادن یک شناسه منحصر به فرد به همه موارد ناوبری شما الزامی است.
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        'گروه'
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
              {
                id: 'apps',
                title: 'Applications',
                subtitle: 'Custom made application designs',
                type: 'group',
                icon: 'heroicons-outline:home',
                children: [
                  {
                    id: 'apps.academy',
                    title: 'Academy',
                    type: 'item',
                    icon: 'heroicons-outline:academic-cap',
                    url: '/apps/academy',
                  }
                ]
             }
        `}
      </FuseHighlight>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        جمع شونده ها
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
            {
                id: 'apps.ecommerce',
                title: 'ECommerce',
                type: 'collapse',
                icon: 'heroicons-outline:shopping-cart',
                children: [
                  {
                    id: 'e-commerce-products',
                    title: 'Products',
                    type: 'item',
                    url: 'apps/e-commerce/products',
                    end: true,
                  },
              ]
            }
      `}
      </FuseHighlight>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        آیتم
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
           {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
            }
        `}
      </FuseHighlight>
      <Typography className="text-20 mt-24 mb-8 font-medium" component="h2">
        end: bool
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      وقتی true است، کلاس/سبک فعال فقط در صورتی اعمال می‌شود که مکان دقیقاً مطابقت داشته باشد.
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
          {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
              end: true
          }
                                `}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        لینک
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
            {
                'id'    : 'test-link',
                'title' : 'Test Link',
                'type'  : 'link',
                'icon'  : 'link',
                'url'   : 'http://fusetheme.com',
                'target': '_blank'
            },
         `}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
      تقسیم کننده
      </Typography>
      <FuseHighlight component="pre" className="language-json">
        {`
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          {
              'type': 'divider
          },
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          `}
      </FuseHighlight>

      <Typography className="mt-48 mb-8" variant="h4">
        اکشن ها
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        setNavigation
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      از عملکرد <code>setNavigation(navigation{'<Array>'})</code> برای تنظیم/تغییر کل ناوبری استفاده کنید.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، کل ناوبری تغییر می کند.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              setNavigation([
                {
                  id: 'dashboards',
                  title: 'Dashboards',
                  subtitle: 'Unique dashboard designs',
                  type: 'group',
                  icon: 'heroicons-outline:home',
                  children: [
                    {
                      id: 'dashboards.project',
                      title: 'Project',
                      type: 'item',
                      icon: 'heroicons-outline:clipboard-check',
                      url: '/dashboards/project',
                    },
                    {
                      id: 'dashboards.analytics',
                      title: 'Analytics',
                      type: 'item',
                      icon: 'heroicons-outline:chart-pie',
                      url: '/dashboards/analytics',
                    },
                  ],
                },
                {
                  id: 'auth',
                  title: 'Auth',
                  type: 'group',
                  icon: 'verified_user',
                  children: [
                    {
                      id: 'sign-out',
                      title: 'Sign out',
                      type: 'item',
                      url: 'sign-out',
                      icon: 'exit_to_app',
                    },
                  ],
                },
              ])
            );
          }}
          variant="contained"
          color="secondary"
        >
        تنظیم ناوبری
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
          <Button
            onClick={() => {
              dispatch(
                setNavigation([
                  {
                    id: 'dashboards',
                    title: 'Dashboards',
                    subtitle: 'Unique dashboard designs',
                    type: 'group',
                    icon: 'heroicons-outline:home',
                    children: [
                      {
                        id: 'dashboards.project',
                        title: 'Project',
                        type: 'item',
                        icon: 'heroicons-outline:clipboard-check',
                        url: '/dashboards/project',
                      },
                      {
                        id: 'dashboards.analytics',
                        title: 'Analytics',
                        type: 'item',
                        icon: 'heroicons-outline:chart-pie',
                        url: '/dashboards/analytics',
                      },
                    ],
                  },
                  {
                    id: 'auth',
                    title: 'Auth',
                    type: 'group',
                    icon: 'verified_user',
                    children: [
                      {
                        id: 'sign-out',
                        title: 'Sign out',
                        type: 'item',
                        url: 'sign-out',
                        icon: 'exit_to_app',
                      },
                    ],
                  },
                ])
              );
            }}
            variant="contained"
            color="secondary"
          >
            Set Navigation
          </Button>
        `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        resetNavigation
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      از عمل <code>resetNavigation()</code> برای بازنشانی ناوبری به حالت اولیه استفاده کنید.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، ناوبری به تنظیمات پیش‌فرض برمی‌گردد.
        </Typography>

        <Button
          onClick={() => {
            dispatch(resetNavigation());
          }}
          variant="contained"
          color="secondary"
        >
         بازنشانی ناوبری
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                onClick={()=> {
                    dispatch(resetNavigation());
                }}
                variant="contained"
                color="secondary"
            >
                Reset Navigation
            </Button>
            `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        updateNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      از عمل <code> updateNavigationItem(id, <i>object</i>) </code> برای به‌روزرسانی یک آیتم ناوبری استفاده کنید.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، عنوان "داشبوردها" تغییر می کند و یک نشان اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              updateNavigationItem('dashboards', {
                title: 'All Dashboards',
              })
            );
          }}
          variant="contained"
          color="secondary"
        >
          به روز رسانی آیتم ناوبری
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
          <Button
            onClick={() => {
              dispatch(
                updateNavigationItem('dashboards', {
                  title: 'All Dashboards',
                })
              );
            }}
            variant="contained"
            color="secondary"
          >
            Update Navigation Item
          </Button>
        `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        removeNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      از عمل <code>removeNavigationItem(id)</code> برای حذف یک آیتم ناوبری استفاده کنید.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر،آیتم ناوبری «تقویم» حذف می‌شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(removeNavigationItem('apps.calendar'));
          }}
          variant="contained"
          color="secondary"
        >
         حذف آیتم ناوبری
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                  onClick={()=> {
                      dispatch(removeNavigationItem('apps.calendar'))
                  }}
                  variant="contained"
                  color="secondary"
            >
            Remove Navigation Item
            </Button>
      `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        prependNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      از عمل <code>prependNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)</code> برای اضافه کردن یک آیتم ناوبری به آرایه ناوبری استفاده کنید.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم ناوبری "fusetheme.com" در بالای آرایه ناوبری اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              prependNavigationItem({
                id: `test-link-${FuseUtils.generateGUID()}`,
                title: 'fusetheme.com',
                type: 'link',
                icon: 'link',
                url: 'http://fusetheme.com',
                target: '_blank',
              })
            );
          }}
          variant="contained"
          color="secondary"
        >
         آیتم ناوبری را آماده کنید
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                onClick={()=> {
                    dispatch(prependNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Prepend Navigation Item
            </Button>
            `}
        </FuseHighlight>
      </div>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم پیمایش "fusetheme.com" به بالای فرزند(children) "داشبورد" اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              prependNavigationItem(
                {
                  id: `test-link-${FuseUtils.generateGUID()}`,
                  title: 'fusetheme.com',
                  type: 'link',
                  icon: 'link',
                  url: 'http://fusetheme.com',
                  target: '_blank',
                },
                'dashboards'
              )
            );
          }}
          variant="contained"
          color="secondary"
        >
         آیتم ناوبری را آماده کنید
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        appendNavigationItem
      </Typography>
      <Typography className="text-16 mb-8" component="h2">
      از عمل <code> appendNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?) </code> برای اضافه کردن یک آیتم ناوبری به آرایه ناوبری استفاده کنید.
      </Typography>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم ناوبری "fusetheme.com" در پایین آرایه اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              appendNavigationItem({
                id: `test-link-${FuseUtils.generateGUID()}`,
                title: 'fusetheme.com',
                type: 'link',
                icon: 'link',
                url: 'http://fusetheme.com',
                target: '_blank',
              })
            );
          }}
          variant="contained"
          color="secondary"
        >
          افزودن آیتم ناوبری
        </Button>
        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
            <Button
                onClick={()=> {
                    dispatch(appendNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Append Navigation Item
            </Button>
            `}
        </FuseHighlight>
      </div>

      <div className="border-1 rounded-16 p-16 my-16">
        <Typography className="text-16 mb-24" component="h2">
        با دکمه زیر، آیتم ناوبری "fusetheme.com" به پایین  فرزند "داشبورد"  اضافه می شود.
        </Typography>

        <Button
          onClick={() => {
            dispatch(
              appendNavigationItem(
                {
                  id: `test-link-${FuseUtils.generateGUID()}`,
                  title: 'fusetheme.com',
                  type: 'link',
                  icon: 'link',
                  url: 'http://fusetheme.com',
                  target: '_blank',
                },
                'dashboards'
              )
            );
          }}
          variant="contained"
          color="secondary"
        >
        افزودن آیتم ناوبری
        </Button>

        <FuseHighlight component="pre" className="language-jsx mt-24">
          {`
                                <Button
                                    onClick={()=> {
                                        dispatch(appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Append Navigation Item
                                </Button>
                                `}
        </FuseHighlight>
      </div>
    </>
  );
}

export default FuseNavigationDoc;
