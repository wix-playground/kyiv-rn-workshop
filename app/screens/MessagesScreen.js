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

import {MatchesContext} from '../matches-context';

import Message from '../components/Message';

const Messages = () => {
  return (
    <MatchesContext.Consumer>
      {({matches}) => (
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
          <View style={styles.containerMessages}>
            <ScrollView>
              <FlatList
                data={matches}
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
      )}
    </MatchesContext.Consumer>
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
