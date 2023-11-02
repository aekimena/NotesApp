import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Home from './components/Home';
import Notes from './components/Notes';
import ToDos from './components/ToDos';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const handleDark = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: lightMode ? '#f7fafc' : '#111111',
        flex: 1,
      }}>
      {/* <Home handleDark={handleDark} lightMode={lightMode} /> */}
      {/* <Notes lightMode={lightMode} /> */}
      <ToDos lightMode={lightMode} />
      {/* <View
        style={
          {
            // elevation: 50,
            // shadowColor: '#000',
            // backgroundColor: '#f7fafc',
          }
        }> */}
      {/* <View> */}
      <View
        style={{
          // flex: 1,
          flexDirection: 'column-reverse',
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
          <View
            style={{justifyContent: 'center', alignItems: 'center', gap: 6}}>
            <Icon name="house" size={27} color="#81c784" />
            <Text style={{fontSize: 17, color: '#81c784', fontWeight: '600'}}>
              Home
            </Text>
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', gap: 6}}>
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
          <View
            style={{justifyContent: 'center', alignItems: 'center', gap: 6}}>
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
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

export default App;
