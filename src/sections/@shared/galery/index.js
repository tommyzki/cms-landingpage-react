import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../../../components/iconify';
import { GaleryCard } from '../../@dashboard/galery';
// mock
import POSTS from '../../../_mock/blog';

const GaleryLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
}));

Galery.propTypes = {
  isPage: PropTypes.bool,
  isCreate: PropTypes.bool,
};

export default function Galery({ isPage, isCreate }) {
  return (
    <GaleryLayoutRoot>
      <Container>
        {isPage ? (
          <>
            <Stack sx={{ mb: 1, mt: 12 }} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h3" gutterBottom>
                Galery
              </Typography>
              {isCreate ? (
                <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                  New Galery
                </Button>
              ) : (
                <></>
              )}
            </Stack>

            <Grid container spacing={3}>
              {POSTS.map((post, index) => (
                <GaleryCard key={post.id} post={post} index={index} />
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Stack sx={{ mb: 5 }} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h3" gutterBottom>
                Galery
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {POSTS.slice(0, 6).map((post, index) => (
                <GaleryCard key={post.id} post={post} index={index} />
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
    </GaleryLayoutRoot>
  );
}
