import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import UserContext from '../context/UserContext';
// import {notesArray} from '../arrays/NotesArray';
// import {notesArray} from './AddNote';

const Notes = ({navigation}) => {
  const [text, setText] = useState('');
  // const {lightMode} = useContext(UserContext);
  const {lightMode, notesArray, setNotesArray} = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: lightMode ? '#f7fafc' : '#111111',
        paddingHorizontal: 15,
      }}>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20, gap: 20}}>
        {notesArray?.length > 0 &&
          notesArray.map(note => (
            <View
              style={{
                backgroundColor: lightMode
                  ? 'rgba(216, 216, 216, 0.5)'
                  : '#444444',
                borderRadius: 20,
                height: 'auto',
                justifyContent: 'space-evenly',
                gap: 10,
                paddingHorizontal: 10,
                paddingVertical: 17,
              }}
              key={note.id}>
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
                  {note.description}
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
            </View>
          ))}
        {/*  */}
        {/* <View
          style={{
            backgroundColor: lightMode ? 'rgba(216, 216, 216, 0.5)' : '#444444',
            borderRadius: 20,
            height: 'auto',
            justifyContent: 'space-evenly',
            gap: 10,
            paddingHorizontal: 10,
            paddingVertical: 17,
          }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: lightMode ? '#000' : '#f7fafc',
              }}>
              Title
            </Text>
          </View>
          <View>
            <Text style={{color: lightMode ? '#000' : '#f7fafc', fontSize: 20}}>
              my first note
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 18, color: lightMode ? '#000' : '#f7fafc'}}>
              Time
            </Text>
          </View>
        </View> */}
        {/*  */}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('AddNote')}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#81c784',
            width: 80,
            height: 80,
            borderRadius: 50,
            bottom: 80,
            right: 20,
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
