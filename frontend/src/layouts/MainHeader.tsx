import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Layout, Space, theme } from 'antd';
import { Language, Theme } from '../enums';
import { useConfig } from '../hooks';

const { Header } = Layout;

const MainHeader: React.FC = () => {
  const currentLanguage = useConfig((state) => state.language);
  const changeLocale = useConfig((state) => state.changeLocale);

  const currentTheme = useConfig((state) => state.theme);
  const changeTheme = useConfig((state) => state.changeTheme);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: '0 24px',
        background: colorBgContainer,
        marginBottom: 16,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Space size="small">
        <Button variant="text" color="default" onClick={changeTheme}>
          {currentTheme === Theme.Light ? <SunOutlined /> : <MoonOutlined />}
        </Button>
        <Button variant="text" color="default" onClick={changeLocale}>
          {currentLanguage === Language.English ? 'EN' : 'VI'}
        </Button>
      </Space>
    </Header>
  );
};

export default MainHeader;
