import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function AvatarChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>م</Avatar>} label="آواتار" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/material-ui-static/images/avatar/1.jpg" />}
        label="آواتار"
        variant="outlined"
      />
    </Stack>
  );
}
