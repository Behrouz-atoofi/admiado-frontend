import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">اولیه</Button>
      <Button variant="outlined" disabled>
        غیرفعال
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        لینک
      </Button>
    </Stack>
  );
}
