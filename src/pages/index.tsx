import * as React from 'react';
import Layout from '@/components/layout';
import SideBarSection from '@/components/layout/sideBar';
import MainSection from '@/components/mainSection';

function Home() {
  return (
    <Layout>
      <div className='sections w-full h-full overflow-hidden flex'>
        <SideBarSection />
        <MainSection />
      </div>
    </Layout>
  );
}
export default Home;
