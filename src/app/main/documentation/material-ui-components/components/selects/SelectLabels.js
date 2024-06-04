import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">سن</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="سن"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>ده</MenuItem>
          <MenuItem value={20}>بیست</MenuItem>
          <MenuItem value={30}>سی</MenuItem>
        </Select>
        <FormHelperText>با لیبل و متن کمکی</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>ده</MenuItem>
          <MenuItem value={20}>بیست</MenuItem>
          <MenuItem value={30}>سی</MenuItem>
        </Select>
        <FormHelperText>بدون لیبل</FormHelperText>
      </FormControl>
    </div>
  );
}
