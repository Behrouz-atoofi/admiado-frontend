import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'بلا استفاده',
  1: 'بلا استفاده+',
  1.5: 'ضعیف',
  2: 'ضعیف+',
  2.5: 'Ok',
  3: 'اوکی+',
  3.5: 'خوب',
  4: 'خوب+',
  4.5: 'عالی',
  5: 'عالی+',
};

export default function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
