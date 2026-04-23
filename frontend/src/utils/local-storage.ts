enum Key {
  Language = 'language',
  Theme = 'theme',
}

const get = (key: Key) => {
  return localStorage.getItem(key);
};

const set = (key: Key, value: string) => {
  localStorage.setItem(key, value);
};

const remove = (key: Key) => {
  localStorage.removeItem(key);
};

const LS = {
  Key,
  get,
  set,
  remove,
};

export { LS };
