import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="مقدار تستی پیشفرض" inputProps={ariaLabel} />
      <Input placeholder="نگهدارنده مکان" inputProps={ariaLabel} />
      <Input disabled defaultValue="غیرفعال" inputProps={ariaLabel} />
      <Input defaultValue="خطا" error inputProps={ariaLabel} />
    </Box>
  );
}
