import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="خطا"
          defaultValue="مقدار تستی پیشفرض"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="خطا"
          defaultValue="مقدار تستی پیشفرض"
          helperText="ورودی نادرست."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="خطا"
          defaultValue="مقدار تستی پیشفرض"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="خطا"
          defaultValue="مقدار تستی پیشفرض"
          helperText="ورودی نادرست."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="خطا"
          defaultValue="مقدار تستی پیشفرض"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="خطا"
          defaultValue="مقدار تستی پیشفرض"
          helperText="ورودی نادرست."
          variant="standard"
        />
      </div>
    </Box>
  );
}
