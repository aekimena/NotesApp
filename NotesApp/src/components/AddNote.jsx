import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const AddNote = ({lightMode}) => {
  const [titleText, setTitleText] = useState('');
  const [noteText, setNoteText] = useState('');
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
          <Icon name="arrow-left" size={30} color="#000" />
          <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
            Notes
          </Text>
        </View>
        <Icon name="check" size={30} color="#000" />
      </View>
      <View style={{marginTop: 20, flex: 1}}>
        <View>
          <TextInput
            style={{
              backgroundColor: lightMode ? 'transparent' : '#444444',
              fontSize: 30,
              fontWeight: 'bold',
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
              backgroundColor: lightMode ? 'transparent' : '#444444',
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
