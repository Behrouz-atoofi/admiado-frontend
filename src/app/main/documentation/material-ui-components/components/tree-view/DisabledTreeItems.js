import * as React from 'react';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function DisabledTreeItems() {
  const [focusDisabledItems, setFocusDisabledItems] = React.useState(false);
  const handleToggle = (event) => {
    setFocusDisabledItems(event.target.checked);
  };

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }} px={2}>
      <Box sx={{ mb: 1 }}>
        <FormControlLabel
          control={
            <Switch
              checked={focusDisabledItems}
              onChange={handleToggle}
              name="focusDisabledItems"
            />
          }
          label="موارد غیرفعال را متمرکز کنید"
        />
      </Box>
      <TreeView
        aria-label="disabled items"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        disabledItemsFocusable={focusDisabledItems}
        multiSelect
      >
        <TreeItem nodeId="1" label="یک">
          <TreeItem nodeId="2" label="دو" />
          <TreeItem nodeId="3" label="سه" />
          <TreeItem nodeId="4" label="چهار" />
        </TreeItem>
        <TreeItem nodeId="5" label="پنج" disabled>
          <TreeItem nodeId="6" label="شش" />
        </TreeItem>
        <TreeItem nodeId="7" label="هفت">
          <TreeItem nodeId="8" label="هشت" />
          <TreeItem nodeId="9" label="نه">
            <TreeItem nodeId="10" label="ده">
              <TreeItem nodeId="11" label="یازده" />
              <TreeItem nodeId="12" label="دوازده" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
}
