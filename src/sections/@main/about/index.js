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
              About Tan.patisserie
            </Typography>
            <Typography color="inherit" variant="body1" sx={{ mt: 4 }}>
              Based in Gading Serpong, TAN Patisserie attention to detail, as well as ensuring equally spectacular in
              taste as they are in sight. All it takes is submitting an enquiry form and making known a few simple
              points of detail.
            </Typography>
            <Typography color="inherit" variant="body1" sx={{ mt: 2 }}>
              TAN Patisserie's cake is lovingly baked from scratch. Our cake made of imported premium butter for our
              buttercream and we do not use any emulsifier or any chemicals because quality and the flavor of the cake
              are our priorities.
            </Typography>
            <Typography color="inherit" variant="body1" sx={{ mt: 2 }}>
              Then sit back, relax, & excitedly anticipate your buttercream dreams being turned into reality! Each cake
              is unique to the client, carefully designed and styled to perfection.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AboutLayoutRoot>
  );
}
