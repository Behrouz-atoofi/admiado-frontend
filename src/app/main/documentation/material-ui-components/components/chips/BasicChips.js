import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="چیپ پر شده است" />
      <Chip label="چیپ مشخص شده" variant="outlined" />
    </Stack>
  );
}
