import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function FallbackAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="رمی شارپ"
        src="/broken-image.jpg"
      >
       ب
      </Avatar>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="رمی شارپ"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
}
