/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from '@mui/material/Link';

export default function ButtonLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("من یک  دکمه هستم.");
      }}
    >
دکمه لینک
    </Link>
  );
}
