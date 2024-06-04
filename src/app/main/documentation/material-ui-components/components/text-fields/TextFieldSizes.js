import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
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
          label="اندازه"
          id="outlined-size-small"
          defaultValue="کوچک"
          size="small"
        />
        <TextField label="اندازه" id="outlined-size-normal" defaultValue="Normal" />
      </div>
      <div>
        <TextField
          label="اندازه"
          id="filled-size-small"
          defaultValue="کوچک"
          variant="filled"
          size="small"
        />
        <TextField
          label="اندازه"
          id="filled-size-normal"
           defaultValue="نرمال"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="اندازه"
          id="standard-size-small"
          defaultValue="کوچک"
          size="small"
          variant="standard"
        />
        <TextField
          label="اندازه"
          id="standard-size-normal"
           defaultValue="نرمال"
          variant="standard"
        />
      </div>
    </Box>
  );
}
