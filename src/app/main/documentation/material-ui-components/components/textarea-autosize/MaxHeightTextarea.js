import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function MaxHeightTextarea() {
  return (
    <TextareaAutosize
      maxRows={4}
      aria-label="maximum height"
      placeholder="حداکثر 4 ردیف"
      defaultValue="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
      style={{ width: 200 }}
    />
  );
}
