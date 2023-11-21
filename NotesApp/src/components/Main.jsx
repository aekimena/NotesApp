import React, {useContext} from 'react';
import {SafeAreaView, TouchableOpacity, Pressable, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';
import Home from './Home';
import Notes from './Notes';
import ToDos from './ToDos';
import ModalComp from '../modals/addNoteOrToDoModalComp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserContext from '../context/UserContext';
const MainStack = createNativeStackNavigator();

const Main = ({navigation}) => {
  const {
    lightMode,
    selectAllMode,
    setSelectAllMode,
    notesArray,
    setNotesArray,
    allSelected,
    setAllSelected,
  } = useContext(UserContext);

  return (
    <SafeAreaView
      style={{
        backgroundColor: lightMode ? '#f7fafc' : '#111111',
        flex: 1,
      }}>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="Notes"
          component={Notes}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="ToDos"
          component={ToDos}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 10,
          marginVertical: 10,

          alignItems: 'center',
          backgroundColor: lightMode ? '#f7fafc' : '#111111',

          gap: 30,
        }}>
        {!selectAllMode && (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View>
                <Icon
                  name="house"
                  size={27}
                  color={lightMode ? 'rgba(0, 0, 0, 0.20)' : '#f7fafc'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
              <View>
                <Icon
                  name="book"
                  size={27}
                  color={lightMode ? '#222' : '#f7fafc'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ToDos')}>
              <View>
                <Icon
                  name="square-check"
                  size={27}
                  color={lightMode ? 'rgba(0, 0, 0, 0.20)' : '#f7fafc'}
                  solid={true}
                />
              </View>
            </TouchableOpacity>
          </>
        )}
        {selectAllMode && (
          <Pressable
            onPress={() => (
              setNotesArray(notesArray.filter(item => item.selected !== true)),
              setAllSelected(false),
              setSelectAllMode(false)
            )}>
            <Icon
              name="trash"
              size={27}
              color={lightMode ? '#111' : '#f7fafc'}
            />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Main;
