import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="با آیکون" />
      <Chip icon={<FaceIcon />} label="با آیکون" variant="outlined" />
    </Stack>
  );
}
