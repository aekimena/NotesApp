import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import UserContext from '../context/UserContext';
// import {notesArray} from '../arrays/NotesArray';
// import {generateUniqueNotesId} from '../arrays/IdGenerator';
// export let notesArray = [];

const AddNote = ({navigation}) => {
  const [titleText, setTitleText] = useState('');
  const [noteText, setNoteText] = useState('');
  const {lightMode, notesArray, setNotesArray, handleSaveNote} =
    useContext(UserContext);
  // const {lightMode} = useContext(UserContext);

  // const handleSaveNote = () => {
  //   const newNote = {
  //     id: generateUniqueNotesId(),
  //     title: titleText,
  //     description: noteText,
  //     type: 'note',
  //     time: '',
  //     favourite: false,
  //     important: false,
  //   };
  //   // setNotesArray(notesArray.push(newNote));
  //   setNotesArray([...notesArray, newNote]);

  //   // notesArray.unshift(notesArray.splice(notesArray.indexOf(newNote), 1)[0]),
  //   navigation.goBack();
  //   console.log(notesArray);
  // };

  const handleSaveNote2 = () => {
    handleSaveNote(titleText, noteText);
    navigation.goBack();
    console.log(notesArray);

    // notesArray.unshift(notesArray.splice(notesArray.indexOf(newNote), 1)[0]),
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: lightMode ? '#f7fafc' : '#111111',
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              size={30}
              color={lightMode ? '#000' : '#f7fafc'}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: lightMode ? '#000' : '#f7fafc',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Notes
          </Text>
        </View>

        <Pressable onPress={handleSaveNote2}>
          <Icon name="check" size={30} color={lightMode ? '#000' : '#f7fafc'} />
        </Pressable>
      </View>
      <View style={{marginTop: 20, flex: 1}}>
        <View>
          <TextInput
            style={{
              backgroundColor: 'transparent',
              fontSize: 30,
              fontWeight: '500',
              color: lightMode ? '#000' : '#f7fafc',
            }}
            multiline={true}
            placeholder="Title"
            placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
            onChangeText={newText => setTitleText(newText)}
            defaultValue={titleText}
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              backgroundColor: 'transparent',
              fontSize: 22,
              //   fontWeight: 'bold',
              color: lightMode ? '#000' : '#f7fafc',
              flex: 1,
              textAlignVertical: 'top',
            }}
            multiline={true}
            placeholder="Note something down"
            placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
            onChangeText={newText => setNoteText(newText)}
            defaultValue={noteText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
