import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function MiddleDividers() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              مسواک
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
            93,000 تومان
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
        بلوز نخی آبی گل ذرتی راه راه شما را به پیاده روی به پارک یا پایین راهرو می برد.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
        نوع را انتخاب کنید
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="خیلی نرم" />
          <Chip color="primary" label="نرم" />
          <Chip label="متوسط" />
          <Chip label="سفت" />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>افزودن به سبد خرید</Button>
      </Box>
    </Box>
  );
}
