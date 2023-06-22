import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContactusLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
}));

export default function Contactus() {
  return (
    <ContactusLayoutRoot>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={2} sm={12} sx={{ alignSelf: 'center' }}>
            <Box component="img" src="/assets/illustrations/illustration_avatar.png" sx={{ width: 100 }} />
          </Grid>
          <Grid item md={6} sm={12} sx={{ alignSelf: 'center' }}>
            <Typography color="inherit" variant="h2" marked="center">
              GET IN TOUCH
            </Typography>
            <Typography color="inherit" variant="h5" sx={{ mb: 2, mt: 2 }}>
              Hey! We are looking forward to start a project with you!
            </Typography>
            <Typography variant="body2" color="inherit">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </Typography>
          </Grid>
          <Grid item md={4} sm={12} sx={{ alignSelf: 'center', textAlign: {md:'right', xs:'left'} }}>
            <Typography color="inherit" variant="body1" sx={{ mb: 2 }}>
              +62 811 123 123
            </Typography>
            <Typography color="inherit" variant="body1" sx={{ mb: 2 }}>
              Instagram
            </Typography>
            <Typography color="inherit" variant="body1" >
              Address
            </Typography>
            <Typography color="inherit" variant="body1" >
              Jl. nan this value
            </Typography>
            <Typography color="inherit" variant="body1" >
              Jakarta. Banten. (151515)
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ContactusLayoutRoot>
  );
}
