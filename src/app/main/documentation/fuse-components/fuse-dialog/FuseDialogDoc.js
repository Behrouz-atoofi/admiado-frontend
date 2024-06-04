import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';

function FuseDialogDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseDialog
      </Typography>

      <Typography className="mb-16" component="p">
      <code>FuseDialog</code> یک راه‌انداز گفتگوی ساده برای نمایش آسان پیام‌های گفتگو از طریق عمل redux است و باید در طرح‌بندی تم قرار گیرد.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        استفاده
      </Typography>

      <Typography className="mb-16" component="p">
        Yمی‌توانید با ارسال اکشن openDialog، گفت‌وگو را در هر جایی نشان دهید که از گفتگوی Material-UI استفاده می‌کند، بنابراین می‌توانید props را در آبجکت ارسال کنید:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                        <Button
                            onClick={()=> dispatch(openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                     )
                                 }))}
                            variant="contained"
                            color="secondary"
                        >
                            Open Dialog
                        </Button>
                        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        مثال
      </Typography>

      <Button
        onClick={() =>
          dispatch(
            openDialog({
              children: (
                <>
                  <DialogTitle id="alert-dialog-title">از سرویس لوکیشن گوگل استفاده می‌کنید؟</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    به Google اجازه دهید به برنامه‌ها در تعیین مکان کمک کند. این به معنای ارسال اطلاعات مکان ناشناس به Google است، حتی زمانی که هیچ برنامه‌ای در حال اجرا نیست.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => dispatch(closeDialog())} color="primary">
                    مخالفم
                    </Button>
                    <Button onClick={() => dispatch(closeDialog())} color="primary" autoFocus>
                      موافقم
                    </Button>
                  </DialogActions>
                </>
              ),
            })
          )
        }
        variant="contained"
        color="secondary"
      >
      گفتگو را باز کنید
      </Button>
    </>
  );
}

export default FuseDialogDoc;
