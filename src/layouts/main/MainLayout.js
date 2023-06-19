import { useState } from 'react';
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

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingBottom: theme.spacing(5),
}));

// ----------------------------------------------------------------------

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Navbar onOpenNav={() => setOpen(true)} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledRoot>
  );
}
