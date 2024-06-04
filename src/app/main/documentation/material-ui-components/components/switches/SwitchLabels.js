import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="برچسب" />
      <FormControlLabel disabled control={<Switch />} label="غیرفعال شده" />
    </FormGroup>
  );
}
