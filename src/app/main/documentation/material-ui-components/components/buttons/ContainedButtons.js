import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">گنجانده شده</Button>
      <Button variant="contained" disabled>
        غیرفعال
      </Button>
      <Button variant="contained" href="#contained-buttons">
        لینک
      </Button>
    </Stack>
  );
}
