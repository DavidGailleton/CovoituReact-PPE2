import { createContext } from 'react';

export type ThemeUser = {
  isLog: boolean;
  updateUser: () => void;
};
export const UserContext = createContext<ThemeUser>({
  isLog: false,
  updateUser: () => {},
});
