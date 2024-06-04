import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
   لورم ایپسوم متن  سفارشی
  </Button>
);

export default function LongTextSnackbar() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="من عاشق اسنک  هستم." action={action} />
      <SnackbarContent
        message={
          'من آبنبات دوست دارم. من شیرینی دوست دارم. من عاشق کاپ کیک هستم. \
          من عاشق چیزکیک هستم. من عاشق شکلات هستم.'
        }
      />
      <SnackbarContent
        message="من آبنبات دوست دارم. من شیرینی دوست دارم. من عاشق کاپ کیک هستم."
        action={action}
      />
      <SnackbarContent
        message={
          'من آبنبات دوست دارم. من شیرینی دوست دارم. من عاشق کاپ کیک هستم. \
          من عاشق چیزکیک هستم. من عاشق شکلات هستم.'
        }
        action={action}
      />
    </Stack>
  );
}
