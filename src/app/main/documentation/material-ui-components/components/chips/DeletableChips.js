import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function DeletableChips() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="قابل حذف" onDelete={handleDelete} />
      <Chip label="قابل حذف" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
