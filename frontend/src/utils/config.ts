import { Language, Theme } from '../enums';
import { LS } from './local-storage';

const getLanguage = (): Language => {
  return LS.get(LS.Key.Language) === Language.Vietnamese
    ? Language.Vietnamese
    : Language.English;
};

const getTheme = (): Theme => {
  return LS.get(LS.Key.Theme) === Theme.Dark ? Theme.Dark : Theme.Light;
};

const setLanguage = (language: Language) => {
  LS.set(LS.Key.Language, language);
};

const setTheme = (theme: Theme) => {
  LS.set(LS.Key.Theme, theme);
};

export { getLanguage, getTheme, setLanguage, setTheme };
