import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import About from '../sections/@main/about';
import BreadcrumbsContainer from '../components/breadcrumbs';

// ----------------------------------------------------------------------

export default function AboutPage() {
  const breadcrumbPath = [
    {path: '/home', name: 'Home'},
    {path: '/about', name: 'About'},
  ]
  return (
    <>
      <Helmet>
        <title> Tan Patisserie - About </title>
      </Helmet>
      <BreadcrumbsContainer breadcrumbPath={breadcrumbPath} />
      <Container>
        <Typography variant="h3" sx={{ mb: 6, mt: 6 }}>
          About
        </Typography>
      </Container>

      <About />
    </>
  );
}
