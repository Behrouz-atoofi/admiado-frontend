import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="قابل کلیک" onClick={handleClick} />
      <Chip label="قابل کلیک" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}
