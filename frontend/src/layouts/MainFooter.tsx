import { Button, Layout } from 'antd';
import { Trans, useTranslation } from 'react-i18next';

const { Footer } = Layout;

const MainFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Footer style={{ textAlign: 'center' }}>
      <Trans
        t={t}
        i18nKey="footer.text"
        components={{
          site: (
            <Button
              style={{
                padding: 0,
              }}
              type="link"
              href="https://xinso.dev"
              target="_blank"
            />
          ),
        }}
      />
    </Footer>
  );
};

export default MainFooter;
