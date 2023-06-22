import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import About from '../sections/@main/about';
import Contactus from '../sections/@main/contactus';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> About | Minimal UI </title>
      </Helmet>
      <Container>
        <Typography variant="h3" sx={{ mb: 6, mt: 12 }}>
          About
        </Typography>
      </Container>

      <About />
      <Contactus />
    </>
  );
}
