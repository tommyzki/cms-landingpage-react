import { Link, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const backgroundImage = 'https://images.unsplash.com/photo-1552689486-f6773047d19f?auto=format&fit=crop';

const FooterLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.primary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '20px 0px'
}));

export default function Footer() {
  return (
    <FooterLayoutRoot>
      <Container>
        <Typography variant="caption">
          {'Copyright © 2023 '}
          <Link href="https://www.instagram.com/tommyzki/" title="tommyzki">
            Tommyzki
          </Link>
        </Typography>
      </Container>
    </FooterLayoutRoot>
  );
}
