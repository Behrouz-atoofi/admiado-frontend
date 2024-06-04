import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel id="demo-simple-select-disabled-label">سن</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>ده</MenuItem>
          <MenuItem value={20}>بیست</MenuItem>
          <MenuItem value={30}>سی</MenuItem>
        </Select>
        <FormHelperText>غیرفعال</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">سن</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>ده</MenuItem>
          <MenuItem value={20}>بیست</MenuItem>
          <MenuItem value={30}>سی</MenuItem>
        </Select>
        <FormHelperText>خطا</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">سن</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>ده</MenuItem>
          <MenuItem value={20}>بیست</MenuItem>
          <MenuItem value={30}>سی</MenuItem>
        </Select>
        <FormHelperText>فقط خواندنی</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">سن</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>ده</MenuItem>
          <MenuItem value={20}>بیست</MenuItem>
          <MenuItem value={30}>سی</MenuItem>
        </Select>
        <FormHelperText>ضروری</FormHelperText>
      </FormControl>
    </div>
  );
}
