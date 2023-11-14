import { Helmet } from 'react-helmet-async';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Menu from '../sections/@shared/menu';
import Iconify from '../components/iconify';
import BreadcrumbsContainer from '../components/breadcrumbs';

export default function MenuPage() {
  const isPage = true;
  const location = useLocation();
  const dashboard = location.pathname.includes('dashboard');
  const breadcrumbPath = [
    { path: dashboard ? '/dashboard' : '/home', name: 'Home' },
    { path: '/menu', name: 'Menu' },
  ];
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, []);
  return (
    <>
      <Helmet>
        <title> Tan Patisserie -  Menu Page </title>
      </Helmet>
      <BreadcrumbsContainer breadcrumbPath={breadcrumbPath} />
      <Container>
        <Stack sx={{ mb: 6, mt: 6 }} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            Menu
          </Typography>
          {dashboard && (
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Menu
            </Button>
          )}
        </Stack>
      </Container>

      <Menu isPage={isPage} isCreate={dashboard} />
    </>
  );
}
