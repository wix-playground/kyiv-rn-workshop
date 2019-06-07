import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Dimensions} from 'react-native';

import {Text, View, Image} from 'react-native';

const Message = ({image, lastMessage, name}) => {
  return (
    <View style={styles.containerMessage}>
      <Image source={{uri: image}} style={styles.avatar} />
      <View style={styles.content}>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
};

const DIMENSION_WIDTH = Dimensions.get('window').width;
const GRAY = '#757E90';

const styles = StyleSheet.create({
  containerMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 20,
    marginVertical: 15,
  },
  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5,
  },
});

Message.propTypes = {
  image: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
