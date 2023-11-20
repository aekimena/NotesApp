import React, {useState} from 'react';
import UserContext from './UserContext';
import {generateUniqueNotesId} from '../arrays/IdGenerator';
import {correctTime} from '../arrays/timeUpdate';
import {updatedTime} from '../arrays/timeUpdate';

const UserContextProvider = ({children}) => {
  const [lightMode, setLightMode] = useState(true);

  const [isModalVisible, setModalVisible] = useState(false);

  const [notesArray, setNotesArray] = useState([]);
  const [recents, setRecents] = useState([]);
  const [important, setImportant] = useState([]);
  const [favourites, setFavourite] = useState([]);
  const [noteId, setNoteId] = useState(null);
  const [titleText, setTitleText] = useState('');
  const [noteText, setNoteText] = useState('');
  const [inputFilled, setInputFilled] = useState(false);

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

  const updatedTime = new Date();

  const handleEditNote = (id, title, description) => {
    const noteIndex = notesArray[notesArray.findIndex(obj => obj.id === id)];
    console.log(noteIndex.title, titleText);

    noteIndex.title === titleText && noteIndex.description === noteText
      ? null
      : (titleText !== '' && noteText !== '') ||
        (titleText === '' && noteText !== '') ||
        (titleText !== '' && noteText === '')
      ? setNotesArray(prevData =>
          prevData.map(item =>
            item.id === id
              ? {
                  ...item,
                  description: description,
                  title: title,
                  time: correctTime(updatedTime),
                }
              : item,
          ),
        )
      : setNotesArray(notesArray.filter(item => item.id !== id));
  };

  return (
    <UserContext.Provider
      value={{
        lightMode,
        noteId,
        setNoteId,
        handleEditNote,
        titleText,
        setTitleText,
        // toggleModal,
        isModalVisible,
        setModalVisible,
        notesArray,
        setNotesArray,
        handleSaveNote,
        recents,
        noteText,
        setNoteText,
        inputFilled,
        setInputFilled,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
