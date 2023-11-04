import React, {useState} from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
  const [lightMode, setLightMode] = useState(false);
  const handleDark = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };
  return (
    <UserContext.Provider value={{lightMode, handleDark}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
