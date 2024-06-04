import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">کوچک</Button>
        <Button size="medium">متوسط</Button>
        <Button size="large">بزرگ</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          کوچک
        </Button>
        <Button variant="outlined" size="medium">
        متوسط
        </Button>
        <Button variant="outlined" size="large">
        بزرگ
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
        کوچک
        </Button>
        <Button variant="contained" size="medium">
        متوسط
        </Button>
        <Button variant="contained" size="large">
        بزرگ
        </Button>
      </div>
    </Box>
  );
}
