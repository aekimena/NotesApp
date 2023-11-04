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
  const {lightMode, isModalVisible, toggleModal, setModalVisible} =
    useContext(UserContext);
  const Separator = () => (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: lightMode ? '#737373' : '#a0a0a0',
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
        onBackdropPress={toggleModal}
        animationIn={'bounceInUp'}
        animationInTiming={500}
        animationOutTiming={100}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={80}
        backdropOpacity={0.8}
        on>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: lightMode ? '#f7fafc' : '#111',

              height: 'auto',

              width: '100%',

              borderRadius: 10,
              padding: 20,
            }}>
            <TouchableOpacity onPress={() => handleAddNote('AddNote')}>
              <View style={{marginVertical: 13}}>
                <Text
                  style={{color: lightMode ? '#000' : '#f7fafc', fontSize: 22}}>
                  Notes
                </Text>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity onPress={() => handleAddNote('AddToDo')}>
              <View style={{marginVertical: 13}}>
                <Text
                  style={{color: lightMode ? '#000' : '#f7fafc', fontSize: 22}}>
                  To-Do
                </Text>
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
