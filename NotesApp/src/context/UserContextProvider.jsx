import React, {useState} from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
  const [lightMode, setLightMode] = useState(true);

  const handleDark = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <UserContext.Provider
      value={{
        lightMode,

        handleDark,

        toggleModal,
        isModalVisible,
        setModalVisible,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
