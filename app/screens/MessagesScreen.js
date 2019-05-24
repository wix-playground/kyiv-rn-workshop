import React from 'react';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Message from '../components/Message';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const Messages = () => {
  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <View style={styles.containerMessages}>
        <ScrollView>
          <FlatList
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Message image={item.image} name={item.name} lastMessage={item.message} />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  containerMessages: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Messages;
