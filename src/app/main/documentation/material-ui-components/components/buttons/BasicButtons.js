import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">متن</Button>
      <Button variant="contained">گنجانده شده</Button>
      <Button variant="outlined">مشخص شده</Button>
    </Stack>
  );
}
