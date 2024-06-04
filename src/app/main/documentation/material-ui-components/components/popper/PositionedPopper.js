import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>محتوای پاپر.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick('top-start')}>بالا-شروع</Button>
          <Button onClick={handleClick('top')}>بالا</Button>
          <Button onClick={handleClick('top-end')}>بالا-انتها</Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button onClick={handleClick('left-start')}>راست-شروع</Button>
          <br />
          <Button onClick={handleClick('left')}>راست</Button>
          <br />
          <Button onClick={handleClick('left-end')}>راست-انتها</Button>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Button onClick={handleClick('right-start')}>چپ-شروع</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right')}>چپ</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right-end')}>چپ-انتها</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick('bottom-start')}>پایین-شروع</Button>
          <Button onClick={handleClick('bottom')}>پایین</Button>
          <Button onClick={handleClick('bottom-end')}>پایین-انتها</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
