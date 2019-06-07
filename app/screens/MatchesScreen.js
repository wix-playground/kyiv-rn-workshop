import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {StackActions} from 'react-navigation';

import {ScrollView, View, Text, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import CardItemSmall from '../components/CardItemSmall';
import {MatchesContext} from '../matches-context';

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
    <MatchesContext.Consumer>
      {({matches}) => (
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
          <View style={styles.containerMatches}>
            <ScrollView>
              <FlatList
                numColumns={2}
                data={matches}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={openProfile(item, props)}>
                    <CardItemSmall image={item.image} name={item.name} status={item.status} />
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
  containerMatches: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Matches;
