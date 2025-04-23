import { PropsWithChildren } from 'react';

import { useOutlet } from 'react-router-dom';

import Footer from '@/components/footer';
import Header from '@/components/header';

export const DefaultLayout: React.FC<PropsWithChildren> = () => {
  const outlet = useOutlet();

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="mt-14 flex-1">{outlet}</main>
      <Footer />
    </div>
  );
};
