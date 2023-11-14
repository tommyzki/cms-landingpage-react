import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import BreadcrumbsContainer from '../components/breadcrumbs';
import { fetchMenuById } from '../services/menu.services';
// ----------------------------------------------------------------------

const DesertCakeLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
}));

export default function MenuDetailPage() {
  const [breadcrumbPath, setBreadcrumbPath] = useState([
    { path: '/home', name: 'Home' },
    { path: '/menu', name: 'Menu' },
  ]);

  const paramId = useParams().id;
  const noimg = '/assets/noimg.jpg';
  const [productData, setProductData] = useState({});
  useEffect(() => {
    console.log('run')
    fetchMenuById(paramId)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProductData(snapshot.val());
          setBreadcrumbPath((prevBreadcrumbPath) => [...prevBreadcrumbPath, { path: '', name: snapshot.val().name }]);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [paramId]);

  return (
    <>
      <Helmet>
        <title> Tan Patisserie - Menu </title>
      </Helmet>
      <BreadcrumbsContainer breadcrumbPath={breadcrumbPath} />
      <Container>
        <Typography variant="h3" sx={{ mb: 3, mt: 6 }}>
          {productData.name}
        </Typography>
        <Typography color="inherit" variant="body1" sx={{ mb: 8 }}>
          {productData.body1}
        </Typography>
      </Container>

      <DesertCakeLayoutRoot>
        <Container>
          <Grid container spacing={{ xs: 2, md: 8 }} sx={{ mb: 8 }}>
            {productData.product &&
              productData.product.map((data, index) => (
                <React.Fragment key={index}>
                  {data.cover && (
                    <Grid item sx={{ display: { xs: 'block', md: 'none' } }} xs={12}>
                      <Box
                        component="img"
                        src={data.cover ? data.cover : noimg}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '20px',
                          maxHeight: '400px',
                        }}
                      />
                    </Grid>
                  )}
                  <Grid item md={6} xs={12} sx={{ alignSelf: 'center' }}>
                    <Typography color="inherit" variant="h5" sx={{ mb: { xs: 1, md: 2 } }}>
                      {data.title}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={data.price ? 9 : 12}>
                        {data.subtitle.map((subtitleData, index) => (
                          <Typography key={index} color="inherit" variant="body1" marked="center" sx={{ mb: 1 }}>
                            {subtitleData}
                          </Typography>
                        ))}
                      </Grid>
                      {data.price && (
                        <Grid item xs={3}>
                          {data.price &&
                            data.price.map((subtitleData, index) => (
                              <Typography
                                key={index}
                                color="inherit"
                                variant="body1"
                                marked="center"
                                sx={{ textAlign: 'end', mb: 1 }}
                              >
                                {subtitleData}
                              </Typography>
                            ))}
                        </Grid>
                      )}
                    </Grid>

                    {data.notes &&
                      data.notes.map((noteData, index) => (
                        <Typography
                          key={index}
                          color="inherit"
                          variant="body2"
                          marked="center"
                          sx={{ textAlign: 'center', pt: 1 }}
                        >
                          {noteData}
                        </Typography>
                      ))}

                    {data.extreamNotes && (
                      <Typography color="red" variant="body2" marked="center" sx={{ textAlign: 'center', pt: 1 }}>
                        {data.extreamNotes}
                      </Typography>
                    )}
                  </Grid>
                  {data.cover && (
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                      <Box
                        component="img"
                        src={data.cover ? data.cover : noimg}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '20px',
                          maxHeight: '400px',
                        }}
                      />
                    </Grid>
                  )}
                </React.Fragment>
              ))}
          </Grid>
          <Typography color="inherit" variant="h5" marked="center" sx={{ pb: 1 }}>
            T&C
          </Typography>
          {productData.tnc &&
            productData.tnc.map((data, index) => (
              <Typography key={index} color="inherit" variant="body1" marked="center">
                {index}. &nbsp;{data}
              </Typography>
            ))}
        </Container>
      </DesertCakeLayoutRoot>
    </>
  );
}
