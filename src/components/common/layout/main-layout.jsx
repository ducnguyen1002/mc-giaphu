import React, { } from 'react';
import TheFooter from '@/components/common/the-footer';
import TheHeader from '@/components/common/the-header';

const MainLayout = ({ children }) => {

  return (
    <main>
      {/* <TheHeader /> */}
      <main className='bg-lightBlue'>{children}</main>
      {/* <TheFooter /> */}
    </main>
  );
};

export default MainLayout;