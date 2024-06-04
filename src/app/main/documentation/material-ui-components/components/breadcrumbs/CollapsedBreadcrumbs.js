/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          خانه
        </Link>
        <Link underline="hover" color="inherit" href="#">
          کاتالوگ
        </Link>
        <Link underline="hover" color="inherit" href="#">
          اکسسوری
        </Link>
        <Link underline="hover" color="inherit" href="#">
        کالکشن جدید
        </Link>
        <Typography color="text.primary">کمربند</Typography>
      </Breadcrumbs>
    </div>
  );
}
