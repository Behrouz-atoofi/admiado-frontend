import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';

function FuseMessageDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseMessage
      </Typography>

      <Typography className="mb-16" component="p">
      <code>FuseMessage</code> یک راه‌انداز ساده  snackbar برای نمایش آسان پیام‌ها از طریق عملکرد redux است و باید در طرح‌بندی تم قرار گیرد.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        استفاده
      </Typography>

      <Typography className="mb-16" component="p">
      با ارسال اکشن showMessage می‌توانید پیام‌ها را در هر جایی نشان دهید، این عملیات ازاسنک بار Material-UI استفاده می‌کند تا بتوانید پراپس ها را در آبجکت ارسال کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                    <Button 
                                        onClick={()=> dispatch(
                                            showMessage({
                                                message     : 'Hi, how are you?',//text or html
                                                autoHideDuration: 6000,//ms
                                                anchorOrigin: {
                                                    vertical  : 'top',//top bottom
                                                    horizontal: 'right'//left center right
                                                },
                                                variant: 'success'//success error info warning null
                                            }))}
                                    >
                                        Top - Right
                                    </Button>
                            `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        مثال
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        موقعیت
      </Typography>

      <div>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
              })
            )
          }
        >
          بالا-چپ 
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center',
                },
              })
            )
          }
        >
         بالا-وسط
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
              })
            )
          }
        >
         بالا - راست
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right',
                },
              })
            )
          }
        >
         پایین- چپ
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
                },
              })
            )
          }
        >
         پایین-وسط
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              })
            )
          }
        >
پایین - راست
        </Button>
      </div>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
       انواع
      </Typography>

      <div>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
              })
            )
          }
        >
          پیش فرض
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                variant: 'success',
              })
            )
          }
        >
          موفقیت (success)
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                variant: 'warning',
              })
            )
          }
        >
          هشدار
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                variant: 'error',
              })
            )
          }
        >
          خطا
        </Button>
        <Button
          onClick={() =>
            dispatch(
              showMessage({
                message: 'سلام رفیق، چطوری؟',
                variant: 'info',
              })
            )
          }
        >
          اطلاعات
        </Button>
      </div>
    </>
  );
}

export default FuseMessageDoc;
