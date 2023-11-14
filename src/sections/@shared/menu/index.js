import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Button, Container, Grid, Typography } from '@mui/material';
// components
import ShopMenuCard from './MenuCard';
import { fetchMenu } from '../../../services/menu.services';
import ShopMenuList from './MenuList';

const MenuLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
}));

Menu.propTypes = {
  isPage: PropTypes.bool,
  isCreate: PropTypes.bool,
};

export default function Menu({ isPage, isCreate }) {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    fetchMenu()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProductArray(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MenuLayoutRoot id="menuSection">
      <Container>
        {isCreate ? (
          <>
            <ShopMenuList product={productArray} />
          </>
        ) : (
          <>
            {isPage ? (
              <>
                <Grid container spacing={3}>
                  {productArray.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={3}>
                      <ShopMenuCard product={product} />
                    </Grid>
                  ))}
                </Grid>
              </>
            ) : (
              <>
                <Typography variant="h3" sx={{ mb: 5 }}>
                  Menu
                </Typography>
                <Grid container spacing={3}>
                  {productArray.slice(0, 8).map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={3}>
                      <ShopMenuCard product={product} />
                    </Grid>
                  ))}
                  <Grid item xs={12} sm={6} md={3} sx={{ alignSelf: 'center', textAlign: 'center' }}>
                    <Button component={RouterLink} to="/menu" sx={{ textAlign: 'center', position: 'relative' }}>
                      <span>LOAD MORE</span>
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          </>
        )}
      </Container>
    </MenuLayoutRoot>
  );
}
