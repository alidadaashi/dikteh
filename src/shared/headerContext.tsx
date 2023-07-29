import { createContext, ReactNode, useState } from 'react';

import { header } from '@/types/header';

const HeaderContext = createContext<header>({
  name: 'John',
  surname: 'Doe',
  education: 'University of Life',
  field: 'Computer Science',
  updateUserInfo: () => {},
});

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [headerContextValue, setHeaderContextValue] = useState<header>({
    name: 'John',
    surname: 'Doe',
    education: 'University of Life',
    field: 'Computer Science',
    updateUserInfo: () => {},
  });

  const updateUserInfo = (info: header) => {
    setHeaderContextValue(info);
  };

  return (
    <HeaderContext.Provider value={{ ...headerContextValue, updateUserInfo }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;
