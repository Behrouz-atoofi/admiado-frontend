import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<PhoneIcon />} label="بالا" />
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="ابتدا" />
      <Tab icon={<FavoriteIcon />} iconPosition="end" label="انتها" />
      <Tab icon={<PersonPinIcon />} iconPosition="bottom" label="پایین" />
    </Tabs>
  );
}
