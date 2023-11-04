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

const ToDos = ({navigation}) => {
  const [text, setText] = useState('');
  const {lightMode} = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: lightMode ? '#f7fafc' : '#111111',
        paddingHorizontal: 15,
      }}>
      <View style={{paddingTop: 20}}>
        <Text
          style={{
            color: lightMode ? '#000' : '#f7fafc',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          To-Dos
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
            backgroundColor: lightMode ? 'rgba(216, 216, 216, 0.5)' : '#444444',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 45,
            fontSize: 18,
            position: 'relative',
            flex: 1,
            color: lightMode ? '#000' : '#f7fafc',
          }}
          placeholder="Search to-dos"
          placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        {/* </View> */}
      </View>
      <ScrollView contentContainerStyle={{marginTop: 30, gap: 20}}>
        <View
          style={{
            backgroundColor: lightMode ? 'rgba(216, 216, 216, 0.5)' : '#444444',
            borderRadius: 20,
            height: 'auto',
            justifyContent: 'space-evenly',
            gap: 5,
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
              Title (1/5)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Icon name="circle-check" size={25} color="#81c784" solid={true} />
            <Text
              style={{
                color: lightMode ? '#000' : '#f7fafc',
                fontSize: 20,
                textDecorationLine: 'line-through',
              }}>
              my first note
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('AddToDo')}>
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

export default ToDos;
