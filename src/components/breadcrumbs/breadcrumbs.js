// @mui
import { Breadcrumbs, Link, Typography, Container } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

BreadcrumbsContainer.propTypes = {
  breadcrumbPath: PropTypes.array,
};

export default function BreadcrumbsContainer({ breadcrumbPath }) {
  return (
    <Container>
      <Breadcrumbs sx={{ mt: 12 }} aria-label="breadcrumb">
        {breadcrumbPath.length > 0 &&
          breadcrumbPath.map((data, index) => {
            const isLast = index === breadcrumbPath.length - 1;

            return (
              <span key={index}>
                {isLast ? (
                  <Typography color="text.primary">{data.name}</Typography>
                ) : (
                  <Link key={data.path} underline="hover" component={RouterLink} to={data.path}>
                    {data.name}
                  </Link>
                )}
              </span>
            );
          })}
      </Breadcrumbs>
    </Container>
  );
}
