import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('یک');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="نمونه تب های لیبل پیچیده"
      >
        <Tab
          value="یک"
          label="آثار جدید در طولانی‌ترین متن غیرداستانی که باید در خط بعدی ظاهر شود"
          wrapped
        />
        <Tab value="دو" label="آیتم دو" />
        <Tab value="سه" label="آیتم سه" />
      </Tabs>
    </Box>
  );
}
