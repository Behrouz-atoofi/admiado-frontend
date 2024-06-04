import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="صادق محمدی" src="/material-ui-static/images/avatar/1.jpg" />
      <Avatar alt="نازنین ساروی" src="/material-ui-static/images/avatar/2.jpg" />
      <Avatar alt="هادی اسلامی" src="/material-ui-static/images/avatar/3.jpg" />
      <Avatar alt="محمد طیبی" src="/material-ui-static/images/avatar/4.jpg" />
      <Avatar alt="نسیم رضایی" src="/material-ui-static/images/avatar/5.jpg" />
    </AvatarGroup>
  );
}
