import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
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
          required
          id="outlined-required"
          label="ضروری"
          defaultValue="مقدار تستی پیشفرض"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="غیرفعال شده"
          defaultValue="مقدار تستی پیشفرض"
        />
        <TextField
          id="outlined-password-input"
          label="رمزعبور"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="فقط خواندنی - Read Only"
          defaultValue="مقدار تستی پیشفرض"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="عدد"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="جستجوی فیلد" type="search" />
        <TextField
          id="outlined-helperText"
          label="متن کمکی"
          defaultValue="مقدار پیش فرض"
          helperText="متن کمک"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="ضروری"
          defaultValue="مقدار تستی پیشفرض"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="غیرفعال شده"
          defaultValue="مقدار تستی پیشفرض"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="رمزعبور"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="فقط خواندنی - Read Only"
          defaultValue="مقدار تستی پیشفرض"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="عدد"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="جستجوی فیلد"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="متن کمکی"
          defaultValue="مقدار پیش فرض"
          helperText="متن کمک"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="ضروری"
          defaultValue="مقدار تستی پیشفرض"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="غیرفعال شده"
          defaultValue="مقدار تستی پیشفرض"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="رمزعبور"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="فقط خواندنی - Read Only"
          defaultValue="مقدار تستی پیشفرض"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="عدد"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="جستجوی فیلد"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="متن کمکی"
          defaultValue="مقدار پیش فرض"
          helperText="متن کمک"
          variant="standard"
        />
      </div>
    </Box>
  );
}
