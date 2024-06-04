import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPlacement() {
  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">  محل قرار گیری لیبل </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="بالا"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio />}
          label="شروع"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="پایین"
          labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<Radio />} label="انتها" />
      </RadioGroup>
    </FormControl>
  );
}
