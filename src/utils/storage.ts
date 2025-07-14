export function getLocalStorage(key: string) {
  const storedValue = localStorage.getItem(key);

  if (!storedValue) return null;

  if (typeof storedValue === 'string') {
    return storedValue;
  }

  return JSON.parse(storedValue);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}
