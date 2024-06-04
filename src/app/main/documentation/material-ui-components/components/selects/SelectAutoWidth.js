import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">سن</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="سن"
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>ده</MenuItem>
          <MenuItem value={21}>بیست ویک </MenuItem>
          <MenuItem value={22}>بیست و یک و خورده ای</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
