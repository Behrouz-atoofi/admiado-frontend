import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="آیتم یک" {...a11yProps(0)} />
        <Tab label="آیتم دو" {...a11yProps(1)} />
        <Tab label="آیتم سه" {...a11yProps(2)} />
        <Tab label="آیتم چهار" {...a11yProps(3)} />
        <Tab label="آیتم پنج" {...a11yProps(4)} />
        <Tab label="آیتم شش" {...a11yProps(5)} />
        <Tab label="آیتم هفت" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        آیتم یک
      </TabPanel>
      <TabPanel value={value} index={1}>
        آیتم دو
      </TabPanel>
      <TabPanel value={value} index={2}>
        آیتم سه
      </TabPanel>
      <TabPanel value={value} index={3}>
        آیتم چهار
      </TabPanel>
      <TabPanel value={value} index={4}>
        آیتم پنج
      </TabPanel>
      <TabPanel value={value} index={5}>
        آیتم شش
      </TabPanel>
      <TabPanel value={value} index={6}>
        آیتم هفت
      </TabPanel>
    </Box>
  );
}
