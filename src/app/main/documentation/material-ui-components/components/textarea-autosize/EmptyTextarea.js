import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function EmptyTextarea() {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="خالی"
      style={{ width: 200 }}
    />
  );
}
