import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>تک</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>دوبل</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          سفارشی: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>قبل از پاراگراف فاصله اضافه کنید</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>قبل از پاراگراف فاصله اضافه کنید</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>فاصله سفارشی...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
