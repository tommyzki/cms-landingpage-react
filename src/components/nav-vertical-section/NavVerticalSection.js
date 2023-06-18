import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavVerticalSection.propTypes = {
  data: PropTypes.array,
};

export default function NavVerticalSection({ data = [], ...other }) {
  return (
    <>
      {data.map((item) => (
        <NavVerticalItem key={item.title} item={item} />
      ))}
    </>
  );
}

// ----------------------------------------------------------------------

NavVerticalItem.propTypes = {
  item: PropTypes.object,
};

function NavVerticalItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      {/* <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> */}

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
