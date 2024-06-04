import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">مسئولیت تعیین کنید</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.gilad} onChange={handleChange} name="gilad" />
          }
          label="رضا سهرابی"
        />
        <FormControlLabel
          control={
            <Switch checked={state.jason} onChange={handleChange} name="jason" />
          }
          label="محمد زمانی"
        />
        <FormControlLabel
          control={
            <Switch checked={state.antoine} onChange={handleChange} name="antoine" />
          }
          label="علی محمدی"
        />
      </FormGroup>
      <FormHelperText>مراقب باش</FormHelperText>
    </FormControl>
  );
}
