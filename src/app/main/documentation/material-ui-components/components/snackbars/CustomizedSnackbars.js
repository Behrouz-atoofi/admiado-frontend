import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
       اسنک بار موفقیت را باز کنید
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         این یک پیام موفقیت است!
        </Alert>
      </Snackbar>
      <Alert severity="error">این یک هشدار خطا است!</Alert>
      <Alert severity="warning">این یک هشدار اخطار است!</Alert>
      <Alert severity="info">این یک هشدار  اطلاعاتی است!</Alert>
      <Alert severity="success">این یک هشدار موفقیت است!</Alert>
    </Stack>
  );
}
