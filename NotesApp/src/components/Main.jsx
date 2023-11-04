import React, {useContext} from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';
import Home from './Home';
import Notes from './Notes';
import ToDos from './ToDos';
import ModalComp from '../modals/addNoteOrToDoModalComp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserContext from '../context/UserContext';
const MainStack = createNativeStackNavigator();

const Main = ({navigation}) => {
  const {lightMode} = useContext(UserContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: lightMode ? '#f7fafc' : '#111111',
        flex: 1,

        // position: 'relative',
      }}>
      {/* <Home
        handleDark={handleDark}
        lightMode={lightMode}
        navigation={navigation}
      /> */}
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
      {/* <Notes lightMode={lightMode} /> */}
      {/* <ToDos lightMode={lightMode} /> */}
      {/* <View
      style={
        {
          // elevation: 50,
          // shadowColor: '#000',
          // backgroundColor: '#f7fafc',
        }
      }> */}
      {/* <View> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{
          backgroundColor: 'green',
          // position: 'relative',
          // flex: 1,
        }}>
        <View
          style={{
            // flex: 1,
            // justifyContent: 'flex-end',
            // flexDirection: 'column-reverse',
            // elevation: 50,
            // shadowColor: '#000',
            backgroundColor: '#000',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              padding: 10,
              // elevation: 20,
              // shadowColor: '#fff',
              alignItems: 'center',
              backgroundColor: lightMode ? '#f7fafc' : '#111111',

              gap: 30,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 6,
                }}>
                <Icon
                  name="house"
                  size={27}
                  color={lightMode ? '#111' : '#f7fafc'}
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: lightMode ? '#111' : '#f7fafc',
                    fontWeight: '600',
                  }}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 6,
                }}>
                <Icon
                  name="book"
                  size={27}
                  color={lightMode ? '#111' : '#f7fafc'}
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: lightMode ? '#111' : '#f7fafc',

                    fontWeight: '600',
                  }}>
                  Notes
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ToDos')}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 6,
                }}>
                <Icon
                  name="list"
                  size={27}
                  color={lightMode ? '#111' : '#f7fafc'}
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: lightMode ? '#111' : '#f7fafc',
                    fontWeight: '600',
                  }}>
                  To-dos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Main;
