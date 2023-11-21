import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import UserContext from '../context/UserContext';

const Notes = ({navigation}) => {
  const [text, setText] = useState('');

  const {
    lightMode,
    notesArray,
    setNotesArray,
    noteId,
    setNoteId,
    titleText,
    setTitleText,
    noteText,
    setNoteText,
    inputFilled,
    setInputFilled,
    handleFavorite,
    handleImportant,
    selectAllMode,
    setSelectAllMode,
    handleSelected,
    allSelected,
    setAllSelected,
    filtered,
    setFiltered,
  } = useContext(UserContext);

  const [numOfSelected, setNumOfSelected] = useState([]);
  const [count, setCount] = useState(0);

  const showNote = item => {
    setTitleText(item.title);
    setNoteText(item.description);
    setNoteId(item.id);
    setInputFilled(true);
    navigation.navigate('AddNote');
  };
  const setNoteNull = () => {
    setInputFilled(false);
    setTitleText('');
    setNoteText('');
    navigation.navigate('AddNote');
  };

  const selectAll = () => {
    allSelected
      ? (notesArray.map(item => handleSelected(item.id, false)),
        setAllSelected(false))
      : (notesArray.map(item => handleSelected(item.id, true)),
        setAllSelected(true));
    // notesArray.map(item =>
    //   item.selected
    //     ? (handleSelected(item.id, false), setAllSelected(false))
    //     : (handleSelected(item.id, true), setAllSelected(true)),
    // );
  };

  const longPress = item => {
    handleSelected(item.id, true);
    setSelectAllMode(true);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: lightMode ? '#f7fafc' : '#111111',
        paddingHorizontal: 15,
      }}>
      {!selectAllMode && (
        <View style={{paddingVertical: 20, paddingBottom: 15}}>
          <View style={{paddingTop: 0}}>
            <Text
              style={{
                color: lightMode ? '#000' : '#f7fafc',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Notes
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View style={{position: 'absolute', padding: 10, zIndex: 5}}>
              <Icon
                name="magnifying-glass"
                size={22}
                color={lightMode ? '#777777' : '#f7fafc'}
              />
            </View>
            <TextInput
              style={{
                height: 55,
                backgroundColor: lightMode
                  ? 'rgba(216, 216, 216, 0.5)'
                  : '#444444',
                borderRadius: 20,
                paddingVertical: 15,
                paddingHorizontal: 45,
                fontSize: 18,
                position: 'relative',
                flex: 1,
                color: lightMode ? '#000' : '#f7fafc',
              }}
              placeholder="Search notes"
              placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
          </View>
        </View>
      )}
      {selectAllMode && (
        <View
          style={{
            paddingTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
            }}>
            <Pressable onPress={() => setSelectAllMode(false)}>
              <Icon name="xmark" size={30} color="#81c784" />
            </Pressable>

            <Text style={{color: '#222', fontSize: 20}}>
              {filtered.length} {filtered.length < 2 ? 'Item' : 'Items'}{' '}
              selected
            </Text>
          </View>
          <Pressable onPress={selectAll}>
            <Icon
              name="square"
              size={20}
              color={allSelected ? '#81c784' : '#222'}
              solid={allSelected ? true : false}
            />
          </Pressable>
        </View>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 20,
          gap: 20,
          paddingBottom: 120,
          flex: notesArray.length < 1 ? 1 : 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {notesArray?.length > 0 &&
          notesArray.map(note => (
            <View
              style={{
                backgroundColor: lightMode
                  ? 'rgba(216, 216, 216, 0.5)'
                  : '#444444',
                borderRadius: 20,
                height: 150,
                gap: 10,
                paddingHorizontal: 15,
                paddingVertical: 17,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              key={note.id}>
              <Pressable
                style={{
                  flex: 1,
                  justifyContent: 'space-evenly',
                  gap: 10,
                }}
                onPress={() => showNote(note)}
                onLongPress={() => longPress(note)}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: '800',
                      color: lightMode ? '#000' : '#f7fafc',
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {note.title}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: lightMode ? '#000' : '#f7fafc',
                      fontSize: 20,
                      fontWeight: '500',
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {note.description.length < 1 ? '--' : note.description}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: lightMode ? '#000' : '#f7fafc',
                    }}>
                    {note.time}
                  </Text>
                </View>
              </Pressable>
              {!selectAllMode && (
                <View
                  style={{
                    justifyContent: 'space-between',
                    height: '100%',
                    alignItems: 'center',
                  }}>
                  <Pressable
                    onPress={() =>
                      handleFavorite(note.id, note.favorite ? false : true)
                    }>
                    <Icon
                      name="heart"
                      size={20}
                      color={note.favorite ? '#81c784' : '#222'}
                      solid={note.favorite ? true : false}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      handleImportant(note.id, note.important ? false : true)
                    }>
                    <Icon
                      name="star"
                      size={20}
                      color={note.important ? '#81c784' : '#222'}
                      solid={note.important ? true : false}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      setNotesArray(
                        notesArray.filter(item => item.id !== note.id),
                      )
                    }>
                    <Icon5 name="trash-alt" size={20} color={'#222'} />
                  </Pressable>
                </View>
              )}
              {selectAllMode && (
                <Pressable
                  onPress={() =>
                    handleSelected(note.id, note.selected ? false : true)
                  }>
                  <Icon
                    name="square"
                    size={20}
                    color={note.selected ? '#81c784' : '#222'}
                    solid={note.selected ? true : false}
                  />
                </Pressable>
              )}
            </View>
          ))}
        {notesArray.length < 1 && (
          <Text style={{textAlign: 'center', fontSize: 20, color: '#222'}}>
            No notes
          </Text>
        )}
      </ScrollView>
      <TouchableOpacity onPress={() => setNoteNull()}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#81c784',
            width: 80,
            height: 80,
            borderRadius: 50,
            bottom: 10,
            right: 0,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="plus" size={50} color="#fff"></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Notes;
