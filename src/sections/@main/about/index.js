import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const backgroundImage = 'https://images.unsplash.com/photo-1552689486-f6773047d19f?auto=format&fit=crop';

const AboutLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
}));

export default function About() {
  return (
    <AboutLayoutRoot>
      <Container>
        <Grid container spacing={8}>
          <Grid item md={6} sm={12}>
            <Box
              component="img"
              src={backgroundImage}
              sx={{ width: '100%', height: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '20px' }}
            />
          </Grid>
          <Grid item md={6} sm={12} sx={{ alignSelf: 'center' }}>
            <Typography color="inherit" variant="h3" marked="center">
              About Us
            </Typography>
            <Typography color="inherit" variant="body1" sx={{ mt: 4 }}>
              Enjoy secret offers up to -70% off the best luxury product every Sunday.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AboutLayoutRoot>
  );
}
