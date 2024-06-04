import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function ComposedTextField() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">نام</InputLabel>
        <Input id="component-simple" defaultValue="فیلد متنی ساخته شده" />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">نام</InputLabel>
        <Input
          id="component-helper"
          defaultValue="فیلد متنی ساخته شده"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          تعدادی متن کمکی
        </FormHelperText>
      </FormControl>
      <FormControl disabled variant="standard">
        <InputLabel htmlFor="component-disabled">نام</InputLabel>
        <Input id="component-disabled" defaultValue="فیلد متنی ساخته شده" />
        <FormHelperText>غیرفعال، شده</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">نام</InputLabel>
        <Input
          id="component-error"
          defaultValue="فیلد متنی ساخته شده"
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">خطا</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">نام</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="فیلد متنی ساخته شده"
          label="نام"
        />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">نام</InputLabel>
        <FilledInput id="component-filled" defaultValue="فیلد متنی ساخته شده" />
      </FormControl>
    </Box>
  );
}
