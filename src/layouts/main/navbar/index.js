import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Box, AppBar, Toolbar, IconButton, Typography, Menu } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import NavVerticalSection from '../../../components/nav-vertical-section';
//
import navbarConfig from './config';
// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  color: theme.palette.primary,
  backgroundColor: 'transparent',
  //   padding: '0px'
}));

const StyledToolbar = styled(Toolbar)(() => ({
  minHeight: HEADER_MOBILE,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
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
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            LOGO Min
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            LOGO tgh
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <></>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <NavVerticalSection data={navbarConfig} />
          </Box>
        </StyledToolbar>
      </Container>
    </StyledRoot>
  );
}
