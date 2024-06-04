import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SizesChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="کوچک" size="small" />
      <Chip label="کوچک" size="small" variant="outlined" />
    </Stack>
  );
}
