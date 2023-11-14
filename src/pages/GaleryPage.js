import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Galery from '../sections/@shared/galery';
import BreadcrumbsContainer from '../components/breadcrumbs';

export default function GaleryPage() {
  const location = useLocation();
  const isPage = true;
  const isCreate = location.pathname.includes('/dashboard')
  const breadcrumbPath = [
    {path: '/home', name: 'Home'},
    {path: '/galery', name: 'Galery'},
  ]
  return (
    <>
      <Helmet>
        <title> Tan Patisserie - Blog </title>
      </Helmet>
      <BreadcrumbsContainer breadcrumbPath={breadcrumbPath} />
      {/* <Blog isPage={isPage} isCreate={isCreate} /> */}
      <Galery isPage={isPage} isCreate={isCreate} />
    </>
  );
}
