import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Product from '../sections/@shared/product';

export default function ProductsPage() {
  const location = useLocation();
  const isPage = true;
  const isCreate = location.pathname.includes('/dashboard')
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <Product isPage={isPage} isCreate={isCreate}  />
    </>
  );
}
