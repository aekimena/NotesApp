import React, {useState} from 'react';

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
// import Icon from 'react-native-vector-icons/FontAwesome6';
// import Home from './components/Home';
// import Notes from './components/Notes';
// import ToDos from './components/ToDos';
// import Search from './components/Search';
import Main from './components/Main';
import AddNote from './components/AddNote';
import AddToDo from './components/AddToDo';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const handleDark = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };
  return (
    // <Main lightMode={lightMode} handleDark={handleDark} />
    // <AddNote lightMode={lightMode} />
    <AddToDo lightMode={lightMode} />
  );
}

export default App;
