import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
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
          id="outlined-multiline-flexible"
          label="چند خطی"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="نگهدارنده مکان چند خطی"
          placeholder="نگهدارنده مکان"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="چند خطی"
          multiline
          rows={4}
          defaultValue="مقدار پیش فرض"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="چند خطی"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="نگهدارنده مکان چند خطی"
          placeholder="نگهدارنده مکان"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="چند خطی"
          multiline
          rows={4}
          defaultValue="مقدار پیش فرض"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="چند خطی"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="نگهدارنده مکان چند خطی"
          placeholder="نگهدارنده مکان"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="چند خطی"
          multiline
          rows={4}
          defaultValue="مقدار پیش فرض"
          variant="standard"
        />
      </div>
    </Box>
  );
}
