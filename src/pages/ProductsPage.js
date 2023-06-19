import { Helmet } from 'react-helmet-async';
// mock
import Product from '../sections/@main/product';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const isPage = true;
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <Product isPage={isPage} />
    </>
  );
}
