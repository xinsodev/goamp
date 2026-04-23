import { Layout, Spin, theme } from 'antd';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const MainContent: React.FC = () => {
  const { t } = useTranslation();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        marginTop: 0,
        marginRight: 16,
        marginBottom: 0,
        marginLeft: 16,
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              minHeight: '100%',
            }}
          >
            <Spin size="large" description={t('app.loading')} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Content>
  );
};

export default MainContent;
