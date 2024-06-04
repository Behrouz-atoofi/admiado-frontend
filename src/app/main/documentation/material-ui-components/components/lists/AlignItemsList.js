import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="ناهاراین هفته?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              الکس
              </Typography>
              {" — من در محله شما خواهم بود و این کار را انجام می دهم…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="باربیکیو تابستانی؟"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              به اسکات، الکس، جنیفر
              </Typography>
              {" —کاش میتونستم بیام، اما من خارج از شهر هستم…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="اوی اوی"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               ساندرا آدامز
              </Typography>
              {' — آیا توصیه های  برای پاریس دارید؟ تا حالا شده…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
