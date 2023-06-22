import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Galery from '../sections/@shared/galery';

export default function GaleryPage() {
  const location = useLocation();
  const isPage = true;
  const isCreate = location.pathname.includes('/dashboard')
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      {/* <Blog isPage={isPage} isCreate={isCreate} /> */}
      <Galery isPage={isPage} isCreate={isCreate} />
    </>
  );
}
