import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setCookies = (name: string, value: string) => {
  return sessionStorage.set(name, value);
};

export const deleteCookie = (name: string) => {
  return sessionStorage.clear();
};
