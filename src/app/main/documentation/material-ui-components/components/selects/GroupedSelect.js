import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">گروه بندی</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="دسته بندی 1">
            <option value={1}>گزینه 1</option>
            <option value={2}>گزینه 2</option>
          </optgroup>
          <optgroup label="دسته بندی 2">
            <option value={3}>گزینه 3</option>
            <option value={4}>گزینه 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">گروه بندی</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <ListSubheader>دسته بندی  1</ListSubheader>
          <MenuItem value={1}>گزینه 1</MenuItem>
          <MenuItem value={2}>گزینه 2</MenuItem>
          <ListSubheader>دسته بندی 2</ListSubheader>
          <MenuItem value={3}>گزینه 3</MenuItem>
          <MenuItem value={4}>گزینه 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
