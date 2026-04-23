import { DashboardFilled } from '@ant-design/icons';
import { Layout, Menu, type MenuProps, theme } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const MainSider: React.FC = () => {
  const { t } = useTranslation();

  const {
    token: { colorPrimary, colorInfoBg },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    getItem(t('menu.dashboard'), '1', <DashboardFilled />),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme={'light'}
    >
      <div
        style={{ color: colorPrimary, backgroundColor: colorInfoBg }}
        className={`m-4 flex h-8 items-center justify-center rounded-md text-lg font-bold`}
      >
        <span>{collapsed ? t('app.name')[0] : t('app.name')}</span>
      </div>
      <Menu
        theme={'light'}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default MainSider;
