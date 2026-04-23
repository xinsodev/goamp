import { Layout } from 'antd';
import MainContent from './MainContent';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import MainSider from './MainSider';

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainSider />
      <Layout>
        <MainHeader />
        <MainContent />
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
