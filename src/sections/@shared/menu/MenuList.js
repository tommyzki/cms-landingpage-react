import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Button, Card, Link, Typography, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// utils
// components
import Label from '../../../components/label';

// ----------------------------------------------------------------------

ShopMenuList.propTypes = {
  product: PropTypes.array,
};

export default function ShopMenuList({ product }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>cover</TableCell>
            <TableCell>name</TableCell>
            <TableCell>price</TableCell>
            <TableCell>status</TableCell>
            <TableCell>Total Product</TableCell>
            <TableCell>action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <img height={90} src={row.cover} alt={row.id} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.product.length}</TableCell>
              <TableCell>
                <Button sx={{ textAlign: 'center', position: 'relative' }}>
                  <span>Edit</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
