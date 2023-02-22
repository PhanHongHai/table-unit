export const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key: string): string => {
  const item = localStorage.getItem(key);
  if (item) return item;
  return "";
};

export const getLocalStorageItemArray = (key: string): any[] => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
  return [];
};
export const getLocalStorageItemObject = (key: string): any => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
  return {};
};
