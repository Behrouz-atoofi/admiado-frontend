import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">    قرار دادن لیبل</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="بالا"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="شروع"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="پایین"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="انتها"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
