import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'شناسه', width: 70 },
  { field: 'firstName', headerName: 'نام ', width: 130 },
  { field: 'lastName', headerName: 'نام خانوادگی', width: 130 },
  {
    field: 'age',
    headerName: 'سن',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'نام و نام خانوادگی ',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'فربُد', firstName: 'جمادی', age: 35 },
  { id: 2, lastName: 'شهرزاد ', firstName: 'جعفری', age: 42 },
  { id: 3, lastName: 'سارا', firstName: 'زمانی', age: 45 },
  { id: 4, lastName: 'نادر', firstName: 'براتی', age: 16 },
  { id: 5, lastName: 'محمد', firstName: 'منشی', age: null },
  { id: 6, lastName: 'کاظم', firstName: null, age: 150 },
  { id: 7, lastName: 'فاطمه', firstName: 'عیوضی', age: 44 },
  { id: 8, lastName: 'محمد', firstName: 'راشدی', age: 36 },
  { id: 9, lastName: 'پریا', firstName: 'خوشنظر', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
