import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
       <Tab label="آیتم یک" />
        <Tab label="آیتم دو" />
        <Tab label="آیتم سه" />
        <Tab label="آیتم چهار" />
        <Tab label="آیتم پنج" />
        <Tab label="آیتم شش" />
        <Tab label="آیتم هفت" />
      </Tabs>
    </Box>
  );
}
