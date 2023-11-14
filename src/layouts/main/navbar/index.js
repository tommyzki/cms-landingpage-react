import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Box, AppBar, Toolbar, IconButton, Menu } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import NavVerticalSection from '../../../components/nav-vertical-section';
//
import navbarConfig from './config';
import Logo from '../../../components/logo/Logo';
// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  color: theme.palette.primary,
  backgroundColor: 'transparent',
  borderBottom: '1px solid #b5b3b3'
}));

const StyledToolbar = styled(Toolbar)(() => ({
  minHeight: HEADER_MOBILE,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  justifyContent: 'space-between',
  //   [theme.breakpoints.up('lg')]: {
  //     minHeight: HEADER_DESKTOP,
  //     padding: '0px',
  //   },
}));

// ----------------------------------------------------------------------

Navbar.propTypes = {
  // onOpenNav: PropTypes.func,
};

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <StyledRoot>
      <Container>
        <StyledToolbar>
          <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="text.primary"
            >
              <Iconify icon="eva:menu-2-fill" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              MenuListProps={{ sx: { padding: '8px' } }}
            >
              <NavVerticalSection data={navbarConfig} />
            </Menu>
          </Box>
          <Logo
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          />
          <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' } }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <NavVerticalSection data={navbarConfig} />
          </Box>
        </StyledToolbar>
      </Container>
    </StyledRoot>
  );
}
