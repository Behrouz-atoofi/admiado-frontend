import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('شما روی چیپ کلیک کرده اید');
  };

  const handleDelete = () => {
    console.info('شما روی آیکون حذف کلیک کرده اید');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="آیکون حذف سفارشی"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="آیکون حذف سفارشی"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
