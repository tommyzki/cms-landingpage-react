import { Link, Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from '../../../components/iconify';

const FooterLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '40px 0px',
  borderTop: '1px solid #e5e5e5'
}));

export default function Footer() {
  return (
    <FooterLayoutRoot>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3} sm={12}>
            <Box component="img" src="/assets/logo.svg" sx={{ width: 200 }} />
            <Typography variant="caption">
              {'Copyright © 2023 '}
              <Link href="https://www.instagram.com/tommyzki/" underline="hover" title="tommyzki" target="_blank">
                Tommyzki
              </Link>
            </Typography>
          </Grid>

          <Grid item md={4} sm={12}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
              }}
            >
              TAN Patisserie
            </Typography>
            <Typography
              variant="caption"
              sx={{
                mb: 2,
              }}
            >
              Costume Birthday Cake, Flower Bouquet Cake, <br /> Cupcake, Letter/Number Cake, Mousse Cake, Etc <br />
              with Premium Ingredients.
            </Typography>
          </Grid>

          <Grid item md={3} sm={12}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
              }}
            >
              Address
            </Typography>

            <Typography
              variant="caption"
              sx={{
                mt: 1,
              }}
            >
              <Link
                underline="hover"
                href="https://www.google.com/maps/place/Yubake.id+%26+TAN+Patisserie/@-6.2840986,106.6125366,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fd262579204b:0x5c0ddf69211cdc08!8m2!3d-6.2840986!4d106.6125366!16s%2Fg%2F11q4bv8_82?hl=en-ID&entry=ttu"
                target="_blank"
              >
                Jl. Gn. Batu No.4, <br /> Cijantra, Kec. Pagedangan. <br /> Kabupaten Tangerang (15336)
              </Link>
            </Typography>
          </Grid>

          <Grid item md={2} sm={12}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
              }}
            >
              Social
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
              }}
            >
              <Link
                underline="hover"
                href="https://api.whatsapp.com/send/?phone=6282125970350&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Whatsapp
              </Link>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
              }}
            >
              <Link underline="hover" href="https://www.instagram.com/tan.patisserie/" target="_blank">
                Instagram
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterLayoutRoot>
  );
}
