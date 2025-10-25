import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Alice', connected: true });

  const toggleConnection = () => {
    setUser(prev => ({ ...prev, connected: !prev.connected }));
  };

  return (
    <UserContext.Provider value={{ user, toggleConnection }}>
      {children}
    </UserContext.Provider>
  );
}
