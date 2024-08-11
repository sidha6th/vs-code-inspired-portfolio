export function setOrGet(key: string, value?: string): string | null {
  if (value != undefined) {
    localStorage.setItem(key, `${value}`);
    return null;
  }
  return localStorage.getItem(key);
}
