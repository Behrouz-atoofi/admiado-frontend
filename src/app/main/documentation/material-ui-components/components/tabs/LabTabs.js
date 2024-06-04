import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="آیتم یک" value="1" />
            <Tab label="آیتم دو" value="2" />
            <Tab label="آیتم سه" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">آیتم یک</TabPanel>
        <TabPanel value="2">آیتم دو</TabPanel>
        <TabPanel value="3">آیتم سه</TabPanel>
      </TabContext>
    </Box>
  );
}
