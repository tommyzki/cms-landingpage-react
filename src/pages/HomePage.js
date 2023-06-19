import { Helmet } from 'react-helmet-async';
// @mui
import Headline from '../sections/@main/headline';
import About from '../sections/@main/about';
import Product from '../sections/@main/product';
import Contactus from '../sections/@main/contactus';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Home Page </title>
      </Helmet>

      <Headline />
      <About />
      <Product isPage={false} />
      <Contactus />
    </>
  );
}
