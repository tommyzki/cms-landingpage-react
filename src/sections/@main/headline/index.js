import { Button, Box, Typography } from '@mui/material';
import HeadlineLayout from '../headlineLayout';

const backgroundImage = 'https://images.unsplash.com/photo-1552689486-f6773047d19f?auto=format&fit=crop';

export default function Headline() {
  return (
    <HeadlineLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'white', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Box component="img" src="/assets/illustrations/illustration_avatar.png" sx={{ width: 100 }} />
      <Typography color="inherit" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" variant="h5" sx={{ mb: 4, mt: 4 }}>
        Enjoy secret offers up to -70% off the best luxury product every Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Buy Now
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </HeadlineLayout>
  );
}
