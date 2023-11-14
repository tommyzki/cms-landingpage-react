import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
// components
import Label from '../../../components/label';

// ----------------------------------------------------------------------

const StyledMenutImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const StyledMenutBody = styled('div')({
  maxHeight: '80px',
});

// ----------------------------------------------------------------------

ShopMenuCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopMenuCard({ product }) {
  const { id, name, cover, price, body1, status, priceSale } = product;
  return (
    <Link component={RouterLink} to={`/menu/${id}`} underline="none">
      <Card>
        <Box sx={{ pt: '50%', position: 'relative' }}>
          {status && (
            <Label
              variant="filled"
              color={(status === 'sale' && 'error') || 'info'}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: 'absolute',
                textTransform: 'uppercase',
              }}
            >
              {status}
            </Label>
          )}
          <StyledMenutImg alt={name} src={cover} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="h6" noWrap>
            {name}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <StyledMenutBody>
              <Typography
                variant="body2"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {body1}
              </Typography>
            </StyledMenutBody>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && priceSale}
            </Typography>
            <Typography variant="overline">{price}</Typography>
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
}
