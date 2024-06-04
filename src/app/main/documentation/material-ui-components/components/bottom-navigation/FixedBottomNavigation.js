import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction  label="آخرین ها" icon={<RestoreIcon />} />
          <BottomNavigationAction label="مورد علاقه ها" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="آرشیو" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'برانچ این هفته؟',
    secondary: "من این هفته در محله خواهم بود. بیا یه لقمه بخوریم",
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    primary: 'هدیه تولد',
    secondary: `آیا پیشنهادی برای هدیه خوب برای جان در سالگرد کارش دارید؟ من واقعا سردرگم هستم و دوست دارم نظر شما در این مورد بدانم.`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
  {
    primary: 'دستور غذا برای امتحان',
    secondary: 'من این دستور جدید BBQ را امتحان می کنم، فکر می کنم این ممکن است شگفت انگیز باشد',
    person: '/material-ui-static/images/avatar/2.jpg',
  },
  {
    primary: 'بله!',
    secondary: 'من بلیط های ReactConf را برای امسال دارم.',
    person: '/material-ui-static/images/avatar/3.jpg',
  },
  {
    primary: "وقت دکتر",
    secondary: 'نوبت من برای دکتر برای شنبه آینده موکول شد.',
    person: '/material-ui-static/images/avatar/4.jpg',
  },
  {
    primary: 'بحث',
    secondary: `منوهایی که توسط نوار برنامه پایین (مانند پایین
      کشوی پیمایش یا منوی سرریز) به عنوان برگه های پایینی در ارتفاعی بالاتر از نوار باز می شود.`,
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    primary: 'باربیکیو تابستانی',
    secondary: `چه کسی می خواهد این آخر هفته غذای آشپزی داشته باشد؟ من به تازگی برای حیاط خلوتم مبلمان گرفتم و دوست دارم کباب پز را روشن کنم.`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
];
