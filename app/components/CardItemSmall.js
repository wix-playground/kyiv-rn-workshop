import React from 'react';

import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

const CardItem = ({
  image,
  name,
  status,
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth / 2 - 30,
      height: 170,
      margin: 0,
    },
  ];

  const nameStyle = [
    {
      paddingTop: 10,
      paddingBottom: 5,
      color: '#363636',
      fontSize: 15,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={{uri: image}} style={imageStyle} />

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}
    </View>
  );
};

const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';
const ONLINE_STATUS = '#46A575';
const OFFLINE_STATUS = '#D04949';

const ICON_FONT = 'tinderclone';

const styles = StyleSheet.create({
  containerCardItem: {
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
  },
  status: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: GRAY,
    fontSize: 12,
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: ONLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: OFFLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
});

CardItem.propTypes = {
  actions: PropTypes.bool,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  status: PropTypes.oneOf(['Online', 'Offline']),
};

export default CardItem;
