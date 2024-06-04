import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('ماست یخ زده', 159, 6.0, 24, 4.0),
  createData('ساندویچ بستنی', 237, 9.0, 37, 4.3),
  createData('اکلر', 262, 16.0, 24, 6.0),
  createData('کیک فنجانی', 305, 3.7, 67, 4.3),
  createData('نان زنجبیلی', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>دسر (مقدار در100g )</TableCell>
            <TableCell align="right">کالری</TableCell>
            <TableCell align="right">چربی&nbsp;(g)</TableCell>
            <TableCell align="right">کربوهیدرات&nbsp;(g)</TableCell>
            <TableCell align="right">پروتئین&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
