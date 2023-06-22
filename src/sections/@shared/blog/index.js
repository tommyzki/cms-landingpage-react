import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../../../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../@dashboard/blog';
// mock
import POSTS from '../../../_mock/blog';

const BlogLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(10),
}));

Blog.propTypes = {
  isPage: PropTypes.bool,
  isCreate: PropTypes.bool,
};

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function Blog({ isPage, isCreate }) {
  return (
    <BlogLayoutRoot>
      <Container>
        {isPage ? (
          <>
            <Stack sx={{ mb: 1, mt: 12 }} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h3" gutterBottom>
                Blog
              </Typography>
              {isCreate ? (
                <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                  New Post
                </Button>
              ) : (
                <></>
              )}
            </Stack>

            <Stack mb={3} direction="row" alignItems="center" justifyContent="space-between">
              <BlogPostsSearch posts={POSTS} />
              <BlogPostsSort options={SORT_OPTIONS} />
            </Stack>

            <Grid container spacing={3}>
              {POSTS.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Stack sx={{ mb: 5 }} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h3" gutterBottom>
                Blog
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {POSTS.slice(0, 6).map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
              <Grid item xs={12} sm={6} md={3} sx={{ alignSelf: 'center', textAlign: 'center' }}>
                <Button sx={{ textAlign: 'center', position: 'relative' }}>
                  <span>LOAD MORE</span>
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </BlogLayoutRoot>
  );
}
