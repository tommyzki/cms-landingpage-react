import { Button, Box, Typography } from '@mui/material';
import HeadlineLayout from '../headlineLayout';

const backgroundImage = '/assets/cover.jpg';

export default function Headline() {
  const onSubmit = (e) => {
    e.preventDefault();
    const element = document.getElementById('menuSection');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <HeadlineLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'white', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src='/assets/cover.jpg' alt="increase priority" />
      <Box component="img" src="/assets/logo.svg" sx={{ mb: 4, width: 150 }} />
      <Typography color="inherit" variant="h2" marked="center">
        Welcome to Tan.patisserie
      </Typography>
      <Typography color="inherit" variant="subtitle1" sx={{ mb: 4, mt: 4 }}>
        Costume Birthday Cake, Cupcake, Flower Bouquet Cake, Letter/Number Cake, Mousse Cake, Etc with Premium Ingredients.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={onSubmit}
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
