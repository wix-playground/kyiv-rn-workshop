import React from 'react';

import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

const CardItem = ({
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth - 80,
      height: 350,
      margin: 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: 15,
      paddingBottom: 7,
      color: '#363636',
      fontSize: 30,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={{uri: image}} style={imageStyle} />

      {/* MATCHES */}
      <View style={styles.matchesCardItem}>
        <Text style={styles.matchesTextCardItem}>
          <Icon name="heart" /> {matches}% Match!
        </Text>
      </View>

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      <Text style={styles.descriptionCardItem}>{description}</Text>

      {/* STATUS */}
      <View style={styles.status}>
        <View style={status === 'Online' ? styles.online : styles.offline} />
        <Text style={styles.statusText}>{status}</Text>
      </View>

      {/* ACTIONS */}
      <View style={styles.actionsCardItem}>
        <TouchableOpacity style={styles.miniButton}>
          <Text style={styles.star}>
            <Icon name="star" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
          <Text style={styles.like}>
            <Icon name="like" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onPressRight()}>
          <Text style={styles.dislike}>
            <Icon name="dislike" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniButton}>
          <Text style={styles.flash}>
            <Icon name="flash" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PRIMARY_COLOR = '#7444C0';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';
const ONLINE_STATUS = '#46A575';
const OFFLINE_STATUS = '#D04949';
const STAR_ACTIONS = '#FFA200';
const LIKE_ACTIONS = '#B644B2';
const DISLIKE_ACTIONS = '#363636';
const FLASH_ACTIONS = '#5028D7';

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
  matchesCardItem: {
    backgroundColor: PRIMARY_COLOR,
    marginTop: -35,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  matchesTextCardItem: {
    fontFamily: ICON_FONT,
    color: WHITE,
  },
  descriptionCardItem: {
    color: GRAY,
    textAlign: 'center',
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
  actionsCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: {height: 10, width: 0},
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: {height: 10, width: 0},
  },
  star: {
    fontFamily: ICON_FONT,
    color: STAR_ACTIONS,
  },
  like: {
    fontSize: 25,
    fontFamily: ICON_FONT,
    color: LIKE_ACTIONS,
  },
  dislike: {
    fontSize: 25,
    fontFamily: ICON_FONT,
    color: DISLIKE_ACTIONS,
  },
  flash: {
    fontFamily: ICON_FONT,
    color: FLASH_ACTIONS,
  },
});

CardItem.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  matches: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPressLeft: PropTypes.func.isRequired,
  onPressRight: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['Online', 'Offline']),
};

export default CardItem;
