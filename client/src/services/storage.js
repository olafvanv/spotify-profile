export const setLocalOj = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));
export const getLocalObj = (key) => {
  const o = window.localStorage.getItem(key);
  if (o === null || o === undefined) return null;
  return JSON.parse(o);
}

export const setSessionObj = (key, value) => window.sessionStorage.setItem(key, JSON.stringify(value));
export const getSessionObj = (key) => {
  const o = window.sessionStorage.getItem(key);
  if (o === null || o === undefined) return null;
  return JSON.parse(o);
}