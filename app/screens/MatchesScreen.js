import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {StackActions} from 'react-navigation';

import {ScrollView, View, Text, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';

const openProfile = (item, props) => () => {
  const pushAction = StackActions.push({
    routeName: 'Profile',
    params: {
      item,
    },
  });
  props.navigation.dispatch(pushAction);
};

const Matches = (props) => {
  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <View style={styles.containerMatches}>
        <ScrollView>
          <FlatList
            numColumns={2}
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={openProfile(item, props)}>
                <CardItem image={item.image} name={item.name} status={item.status} variant />
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
  containerMatches: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Matches;
