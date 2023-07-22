import { setLocalOj } from "./storage";

const getUrlVars = () => {
  var vars = {};
  for (let prop of window.location.hash.substring(1).split('&')) {
    let [key, val] = prop.split('=');
    vars[key] = val;
  }
  return vars;
};

const getToken = () => {
  const { access_token, refresh_token } = getUrlVars();

  if (access_token && refresh_token) {
    setLocalOj('access_token', access_token);
    setLocalOj('refresh_token', refresh_token);
    setLocalOj('token_timestamp', Date.now());
    return access_token;
  }
}


export const token = getToken();

export const logout = () => {
  window.localStorage.clear();
  window.sessionStorage.clear();
  window.location.replace('/');
}