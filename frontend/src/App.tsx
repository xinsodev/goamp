import { ConfigProvider, theme } from 'antd';
import enUS from 'antd/es/locale/en_US';
import viVN from 'antd/es/locale/vi_VN';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { Language, Theme } from './enums';
import { useConfig } from './hooks';
import i18n from './i18n';
import router from './router';

const App = () => {
  const currentLanguage = useConfig((state) => state.language);
  const currentTheme = useConfig((state) => state.theme);

  const algorithms = {
    [Theme.Dark]: theme.darkAlgorithm,
    [Theme.Light]: theme.defaultAlgorithm,
  };

  const locales = {
    [Language.English]: enUS,
    [Language.Vietnamese]: viVN,
  };

  return (
    <ConfigProvider
      locale={locales[currentLanguage]}
      theme={{ algorithm: [algorithms[currentTheme]] }}
    >
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ConfigProvider>
  );
};

export default App;
