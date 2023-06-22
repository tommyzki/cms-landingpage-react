import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Blog from '../sections/@shared/blog';

export default function BlogPage() {
  const location = useLocation();
  const isPage = true;
  const isCreate = location.pathname.includes('/dashboard')
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <Blog isPage={isPage} isCreate={isCreate} />
    </>
  );
}
