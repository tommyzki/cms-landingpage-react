import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// @mui
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
// components
import Iconify from '../../../components/iconify';
import { ProductSort, ProductFilterSidebar, ProductCard } from '../../@dashboard/products';
// mock
import products from '../../../_mock/products';

const ProductLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
}));

Product.propTypes = {
  isPage: PropTypes.bool,
  isCreate: PropTypes.bool,
};

export default function Product({ isPage, isCreate, ...other }) {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <ProductLayoutRoot>
      <Container>
        {isPage ? (
          <>
            <Stack sx={{ mb: 1, mt: 12 }} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h3" gutterBottom>
                Products
              </Typography>
              {isCreate ? (
                <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                  New Product
                </Button>
              ) : (
                <></>
              )}
            </Stack>
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <ProductFilterSidebar
                  openFilter={openFilter}
                  onOpenFilter={handleOpenFilter}
                  onCloseFilter={handleCloseFilter}
                />
                <ProductSort />
              </Stack>
            </Stack>
            <Grid container spacing={3} {...other}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h3" sx={{ mb: 5 }}>
              Products
            </Typography>
            <Grid container spacing={3} {...other}>
              {products.slice(0, 7).map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                  <ProductCard product={product} />
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md={3} sx={{ alignSelf: 'center', textAlign: 'center' }}>
                <Button sx={{ textAlign: 'center', position: 'relative' }}>
                  <span>LOAD MORE</span>
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </ProductLayoutRoot>
  );
}
