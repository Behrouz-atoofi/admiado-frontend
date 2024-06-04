import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

export default function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title="افزودن">
        <Button>رشد(Grow)</Button>
      </Tooltip>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="افزودن"
      >
        <Button>محو شدن(Fade)</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="افزودن">
        <Button>زوم(Zoom)</Button>
      </Tooltip>
    </div>
  );
}
