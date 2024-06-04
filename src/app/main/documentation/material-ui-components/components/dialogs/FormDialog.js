import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      دیالوگ فرم را باز کن
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>اشتراک</DialogTitle>
        <DialogContent>
          <DialogContentText>
          برای عضویت در این وب سایت، لطفا آدرس ایمیل خود را در اینجا وارد کنید. ما هر از گاهی به روز رسانی ها را ارسال خواهیم کرد.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="آدرس ایمیل"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>لغو</Button>
          <Button onClick={handleClose}>اشتراک </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
