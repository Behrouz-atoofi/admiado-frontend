import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            دشبورد
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>پروفایل</MenuItem>
            <MenuItem onClick={popupState.close}>حساب من </MenuItem>
            <MenuItem onClick={popupState.close}>خروج</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
