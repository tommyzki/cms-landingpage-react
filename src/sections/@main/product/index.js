import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// @mui
import { Container, Grid, Stack, Typography } from '@mui/material';
// components
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
};

export default function Product({ isPage, ...other }) {
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
            <Typography variant="h3" sx={{ mb: 5, mt: 12 }}>
              Products
            </Typography>
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
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
              <Grid item xs={12} sm={6} md={3}>
                <span>Loadmore</span>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </ProductLayoutRoot>
  );
}
