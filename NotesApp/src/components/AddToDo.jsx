import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const AddToDo = ({lightMode}) => {
  const [titleText, setTitleText] = useState('');
  const [toDoText, setToDoText] = useState('');
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
            To-Do
          </Text>
        </View>
        <Icon name="check" size={30} color="#000" />
      </View>
      <ScrollView contentContainerStyle={{marginTop: 20, flex: 1}}>
        <View>
          <TextInput
            style={{
              backgroundColor: lightMode ? 'transparent' : '#444444',
              fontSize: 30,
              fontWeight: 'bold',
              color: lightMode ? '#000' : '#f7fafc',
              borderBottomColor: '#000',
            }}
            multiline={true}
            placeholder="Title"
            placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
            onChangeText={newText => setTitleText(newText)}
            defaultValue={titleText}
          />
        </View>

        <View style={{flex: 1}}>
          {/* <View style={{marginTop: 20}}>
            <Text>this is the added to-do</Text>
          </View> */}
          <View
            style={{
              //   alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
              paddingVertical: 10,
              elevation: 10,
              shadowColor: '#000',
              backgroundColor: '#f7fafc',
              //   gap: 25,
              //   paddingHorizontal: 15,
              //   paddingTop: 20,
            }}>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginTop: 20,
                // flex: 1,
              }}> */}
            <TextInput
              style={{
                height: 55,
                backgroundColor: lightMode
                  ? 'rgba(216, 216, 216, 0.5)'
                  : '#444444',
                borderRadius: 20,
                padding: 15,

                // paddingHorizontal: 45,
                fontSize: 22,
                position: 'relative',
                // flex: 1,
                color: lightMode ? '#000' : '#f7fafc',
              }}
              placeholder="Add new item"
              placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
              onChangeText={newText => setToDoText(newText)}
              defaultValue={toDoText}
            />
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddToDo;
