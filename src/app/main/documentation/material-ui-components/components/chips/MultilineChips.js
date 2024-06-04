import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function MultilineChips() {
  return (
    <Box width={100}>
      <Chip
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
        }}
        label="این یک چیپ  است که چندین خط دارد."
      />
    </Box>
  );
}
