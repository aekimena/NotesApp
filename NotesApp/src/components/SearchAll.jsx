import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import UserContext from '../context/UserContext';

const SearchAll = ({navigation}) => {
  const [text, setText] = useState('');
  const {lightMode} = useContext(UserContext);
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
          alignItems: 'center',
          //   justifyContent: 'space-between',
          gap: 25,
          //   paddingHorizontal: 15,
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Icon
              name="arrow-left"
              size={30}
              color={lightMode ? '#000' : '#f7fafc'}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginTop: 20,
            flex: 1,
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
            placeholder="Search NotesApp"
            placeholderTextColor={lightMode ? '#777777' : '#f7fafc'}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
        </View>
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
              Title
            </Text>
          </View>
          <View>
            <Text style={{color: lightMode ? '#000' : '#f7fafc', fontSize: 20}}>
              my first note
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchAll;
