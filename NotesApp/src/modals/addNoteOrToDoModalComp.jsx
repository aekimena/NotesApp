import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Modal from 'react-native-modal';
import UserContext from '../context/UserContext';

const ModalComp = ({navigation}) => {
  const {lightMode, isModalVisible, toggleModal} = useContext(UserContext);
  const Separator = () => (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
  const handleAddNote = screen => {
    navigation.navigate(screen);
    toggleModal();
  };
  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        animationIn={'bounceInUp'}
        animationInTiming={500}
        animationOutTiming={100}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={80}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: lightMode ? '#f7fafc' : '#111111',

              height: 'auto',

              width: '100%',

              borderRadius: 10,
              padding: 20,
            }}>
            <TouchableOpacity onPress={() => handleAddNote('AddNote')}>
              <View style={{marginVertical: 13}}>
                <Text style={{color: '#000', fontSize: 22}}>Notes</Text>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity onPress={() => handleAddNote('AddToDo')}>
              <View style={{marginVertical: 13}}>
                <Text style={{color: '#000', fontSize: 22}}>To-Do</Text>
              </View>
            </TouchableOpacity>
            <Separator />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComp;
