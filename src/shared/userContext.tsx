import React, { createContext, ReactNode, useState } from 'react';

// Define the type for the UserContext value
interface UserContextValue {
  name: string;
  age: number;
  updateUserInfo: (name: string, age: number) => void;
}

// Create the initial value for the UserContext
const initialUserContextValue: UserContextValue = {
  name: 'John Doe',
  age: 30,
  updateUserInfo: () => {},
};

// Create the context
export const UserContext = createContext<UserContextValue>(
  initialUserContextValue
);

// Create the UserProvider component
export const UserProvider: React.FC = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<UserContextValue>(initialUserContextValue);

  // Function to update user info
  const updateUserInfo = (name: string, age: number) => {
    setUser({ ...user, name, age });
  };

  return (
    <UserContext.Provider value={{ ...user, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
