import { getI18n } from 'react-i18next';
import { create } from 'zustand';
import { Language, Theme } from '../enums';
import { getLanguage, getTheme, setLanguage, setTheme } from '../utils/config';

type Config = {
  language: Language;
  theme: Theme;
  changeLocale: () => void;
  changeTheme: () => void;
};

const useConfig = create<Config>((set) => ({
  language: getLanguage(),
  changeLocale: () => {
    set((state) => {
      const nextLanguage =
        state.language === Language.English
          ? Language.Vietnamese
          : Language.English;

      getI18n().changeLanguage(nextLanguage);
      setLanguage(nextLanguage);

      return { language: nextLanguage };
    });
  },

  theme: getTheme(),
  changeTheme: () => {
    set((state) => {
      const nextTheme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;

      setTheme(nextTheme);

      return { theme: nextTheme };
    });
  },
}));

export { useConfig };
