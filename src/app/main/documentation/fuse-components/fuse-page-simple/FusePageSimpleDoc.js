import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const demos = [
  {
    id: 'full-width',
    title: 'نمای کلی تمام عرض',
    type: 'item',
    url: '/ui/page-layouts/simple/full-width/overview',
  },
  {
    id: 'with-sidebars',
    title: 'نمای کلی با سایدبارها',
    type: 'item',
    url: '/ui/page-layouts/simple/with-sidebars/overview',
  },
];

function FusePageSimpleDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FusePageSimple
      </Typography>

      <Typography className="mb-16" component="p">
      <code>FusePageSimple</code> کامپوننت طرح بندی صفحه ساده Fuse React است.
      </Typography>
      <Typography className="mb-24" component="p">
      این کامپوننت دارای مناطق طرح بندی است تا به راحتی محتویات برنامه را وارد کنید.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
           <FusePageSimple
                header={
                    Header
                }
                content={
                    Content
                }
                leftSidebarContent={
                    Left Sidebar Content
                }
                rightSidebarContent={
                    Right Sidebar Content
                }
                scroll="page"
            />
        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پیش نمایش ها
      </Typography>

      <ul>
        {demos.map((demo) => (
          <li key={demo.url} className="mb-8">
            <Link to={demo.url}>{demo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FusePageSimpleDoc;
