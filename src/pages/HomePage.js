import { Helmet } from 'react-helmet-async';
// @mui
import Headline from '../sections/@main/headline';
import About from '../sections/@main/about';
import Product from '../sections/@shared/product';
import Contactus from '../sections/@main/contactus';
import Blog from '../sections/@shared/blog';
import Galery from '../sections/@shared/galery';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Home Page </title>
      </Helmet>

      <Headline />
      <About />
      <Product isPage={false} />
      <Blog isPage={false} />
      <Galery isPage={false} />
      <Contactus />
    </>
  );
}
