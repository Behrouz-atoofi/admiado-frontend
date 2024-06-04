import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function FuseScrollbarsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseScrollbars
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseScrollbars</code> یک{' '}
    
     کامپوننت ساده      <a
          href="http://utatti.github.io/perfect-scrollbar/"
          target="_blank"
          rel="noreferrer noopener"
        >
          perfect-scrollbar
        </a>{' '} برای react می‌باشد.
      </Typography>

      <Typography className="mb-16" component="p">
      با تنظیمات فیوز (<code>app/configs/settingsConfig.js</code>) می‌توان آن را به صورت global غیرفعال کرد.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                <FuseScrollbars className={classes.content}>
                                    Content
                                </FuseScrollbars>
                                `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        پراپس ها
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                FuseScrollbars.defaultProps = {
                                    className               : '',
                                    enable                  : true,
                                    scrollToTopOnChildChange: false,
                                    scrollToTopOnRouteChange: false,
                                    option                  : {
                                        wheelPropagation: true
                                    },
                                    ref                     : undefined,
                                    onScrollY               : undefined,
                                    onScrollX               : undefined,
                                    onScrollUp              : undefined,
                                    onScrollDown            : undefined,
                                    onScrollLeft            : undefined,
                                    onScrollRight           : undefined,
                                    onYReachStart           : undefined,
                                    onYReachEnd             : undefined,
                                    onXReachStart           : undefined,
                                    onXReachEnd             : undefined
                                };
                                `}
      </FuseHighlight>
    </>
  );
}

export default FuseScrollbarsDoc;
