import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loading from '../Loading/Loading';
import Popup from 'components/Popup/Popup';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Popup type="error" title="Error 404" text="Not Found" children={<div>This is children block</div>} />
    </>
  );
};
