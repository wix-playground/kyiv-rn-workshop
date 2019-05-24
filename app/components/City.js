import React from 'react';

import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Icon from './Icon';

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="marker" /> New York
      </Text>
    </TouchableOpacity>
  );
};

const DARK_GRAY = '#363636';
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const ICON_FONT = 'tinderclone';

const styles = StyleSheet.create({
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
  },
  cityText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13,
  },
});

export default City;
