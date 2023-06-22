import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import Navbar from './navbar';
import Footer from './footer';


const StyledRoot = styled('div')({
  // display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(() => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
}));

// ----------------------------------------------------------------------

export default function MainLayout() {

  return (
    <StyledRoot>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledRoot>
  );
}
