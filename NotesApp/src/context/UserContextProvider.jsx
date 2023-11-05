import React, {useState} from 'react';
import UserContext from './UserContext';
import {generateUniqueNotesId} from '../arrays/IdGenerator';
import {correctTime} from '../arrays/timeUpdate';
import {updatedTime} from '../arrays/timeUpdate';
const UserContextProvider = ({children}) => {
  const [lightMode, setLightMode] = useState(true);

  const handleDark = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [notesArray, setNotesArray] = useState([]);
  const [recents, setRecents] = useState([]);

  const handleSaveNote = (titleText, noteText) => {
    const updatedTime = new Date();
    const newNote = {
      id: generateUniqueNotesId(notesArray),
      title: titleText,
      description: noteText,
      type: 'note',
      time: correctTime(updatedTime),
      favourite: false,
      important: false,
    };
    setNotesArray([newNote, ...notesArray]);
    setRecents([newNote, ...notesArray]);
  };

  return (
    <UserContext.Provider
      value={{
        lightMode,

        handleDark,

        toggleModal,
        isModalVisible,
        setModalVisible,
        notesArray,
        setNotesArray,
        handleSaveNote,
        recents,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
