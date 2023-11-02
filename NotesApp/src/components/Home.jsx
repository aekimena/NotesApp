import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Home = ({handleDark, lightMode}) => {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth * 0.8;

  const style = StyleSheet.create({
    header: {
      padding: 15,
      paddingHorizontal: 10,
      elevation: 4,
      shadowColor: '#000',
      backgroundColor: lightMode ? '#f7fafc' : '#111111',
    },
    headerInner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
    },
    homeSection: {
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    homeSectionTitle: {
      fontSize: 25,
      color: lightMode ? '#000' : '#f7fafc',
      fontWeight: '600',
    },
    homeSectionScrollViewHorizontal: {
      flexDirection: 'row',
      gap: 20,
      paddingHorizontal: 15,
    },
    homeSectionNoteBox: {
      backgroundColor: lightMode ? '#d8d8d8' : '#444444',
      width: itemWidth,
      height: 180,
      borderRadius: 15,
      flexDirection: 'column',
      // justifyContent: 'space-evenly',
      // alignItems: 'center',
      padding: 10,
      gap: 5,
    },
  });

  return (
    <>
      <View style={style.header}>
        <View style={style.headerInner}>
          <View>
            <TouchableOpacity onPress={handleDark} underlayColor={'#000'}>
              <Icon
                name={lightMode ? 'moon' : 'sun'}
                solid={false}
                size={30}
                color={lightMode ? '#000' : '#f7fafc'}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: 24,
                color: lightMode ? '#000' : '#f7fafc',
                fontWeight: '600',
              }}>
              NotesApp
            </Text>
          </View>
          <View>
            <Icon
              name="magnifying-glass"
              size={30}
              color={lightMode ? '#000' : '#f7fafc'}
            />
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 20,
          gap: 35,
        }}>
        <View style={{gap: 20}}>
          <View style={style.homeSection}>
            <Icon
              name="clock"
              size={25}
              color={lightMode ? '#000' : '#81C784'}
              solid={false}
            />
            <Text style={style.homeSectionTitle}>Recent Work</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.homeSectionScrollViewHorizontal}>
            {/* <View> */}
            <View style={style.homeSectionNoteBox}>
              {/* <View>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: lightMode ? '#444' : '#f7fafc',
                  }}>
                  Title
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '500',
                    color: lightMode ? '#444' : '#f7fafc',
                  }}>
                  This is my first note!
                </Text>
              </View> */}
            </View>
            <View style={style.homeSectionNoteBox}></View>
            {/* </View> */}
          </ScrollView>
        </View>
        <View style={{gap: 20}}>
          <View style={style.homeSection}>
            <Icon
              name="heart"
              size={25}
              color={lightMode ? '#000' : '#81C784'}
              solid={false}
            />
            <Text style={style.homeSectionTitle}>Favorites</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.homeSectionScrollViewHorizontal}>
            {/* <View> */}
            <View style={style.homeSectionNoteBox}></View>
            <View style={style.homeSectionNoteBox}></View>
            {/* </View> */}
          </ScrollView>
        </View>
        <View style={{gap: 20}}>
          <View style={style.homeSection}>
            <Icon
              name="star"
              size={25}
              color={lightMode ? '#000' : '#81C784'}
              solid={false}
            />
            <Text style={style.homeSectionTitle}>Important</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.homeSectionScrollViewHorizontal}>
            {/* <View> */}
            <View style={style.homeSectionNoteBox}></View>
            <View style={style.homeSectionNoteBox}></View>
            {/* </View> */}
          </ScrollView>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#81c784',
          width: 80,
          height: 80,
          borderRadius: 50,
          bottom: 120,
          right: 20,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="plus" size={50} color="#fff"></Icon>
      </View>
    </>
  );
};

export default Home;
