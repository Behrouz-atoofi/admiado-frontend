import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function HelperTextMisaligned() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="لطفا نام خود را وارد  کنید"
        id="demo-helper-text-misaligned"
        label="نام"
      />
      <TextField id="demo-helper-text-misaligned-no-helper" label="نام" />
    </Box>
  );
}
