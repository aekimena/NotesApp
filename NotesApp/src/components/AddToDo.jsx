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
          <Icon
            name="arrow-left"
            size={30}
            color={lightMode ? '#000' : '#f7fafc'}
          />
          <Text
            style={{
              color: lightMode ? '#000' : '#f7fafc',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            To-Do
          </Text>
        </View>
        <Icon name="check" size={30} color={lightMode ? '#000' : '#f7fafc'} />
      </View>
      <ScrollView
        contentContainerStyle={{
          marginTop: 20,
          flex: 1,
          // backgroundColor: '#000',
        }}>
        <View>
          <TextInput
            style={{
              backgroundColor: 'transparent',
              fontSize: 30,
              fontWeight: '500',
              color: lightMode ? '#000' : '#f7fafc',
              borderBottomColor: '#000',
            }}
            multiline={true}
            placeholder="Title"
            placeholderTextColor={lightMode ? '#000' : '#f7fafc'}
            onChangeText={newText => setTitleText(newText)}
            defaultValue={titleText}
          />
        </View>
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Icon name="circle" size={27} color="#81c784" />
            <Text
              style={{
                color: lightMode ? '#000' : '#f7fafc',
                fontSize: 22,
                fontWeight: 500,
                textDecorationLine: 'line-through',
              }}>
              First To-do
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <TextInput
          style={{
            height: 55,
            backgroundColor: lightMode ? 'rgba(216, 216, 216, 0.5)' : '#444444',
            borderRadius: 20,
            // paddingVertical: 15,
            // paddingHorizontal: 45,
            padding: 15,
            marginVertical: 10,
            fontSize: 20,
            // position: 'relative',
            // flex: 1,
            color: lightMode ? '#000' : '#f7fafc',
          }}
          placeholder="Add New Item..."
          placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
          onChangeText={newText => setToDoText(newText)}
          defaultValue={toDoText}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddToDo;
