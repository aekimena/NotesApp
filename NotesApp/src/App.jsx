import React, {useState, createContext, useContext} from 'react';

import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/FontAwesome6';
// import Home from './components/Home';
// import Notes from './components/Notes';
// import ToDos from './components/ToDos';
// import Search from './components/Search';
import Main from './components/Main';
import AddNote from './components/AddNote';
import AddToDo from './components/AddToDo';
import SearchAll from './components/SearchAll';

const Stack = createNativeStackNavigator();

function App() {
  const [lightMode, setLightMode] = useState(false);
  const handleDark = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNote"
          component={AddNote}
          options={{title: 'New Note', headerShown: false}}
        />
        <Stack.Screen
          name="SearchAll"
          component={SearchAll}
          options={{title: 'Search', headerShown: false}}
        />
        <Stack.Screen
          name="AddToDo"
          component={AddToDo}
          options={{title: 'ToDo', headerShown: false}}
        />
        {/* <Main lightMode={lightMode} handleDark={handleDark} /> */}
        {/* <AddNote lightMode={lightMode} /> */}
        {/* <AddToDo lightMode={lightMode} />
        <SearchAll lightMode={lightMode} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
