import { Helmet } from 'react-helmet-async';
// @mui
import Headline from '../sections/@main/headline';
import About from '../sections/@main/about';
import Menu from '../sections/@shared/menu';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Tan Patisserie - Home Page </title>
      </Helmet>

      <Headline />
      <About />
      <Menu isPage={false} />
    </>
  );
}
