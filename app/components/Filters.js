import React from 'react';

import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Icon from './Icon';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        <Icon name="filter" /> Filters
      </Text>
    </TouchableOpacity>
  );
};

const WHITE = '#FFFFFF';
const DARK_GRAY = '#363636';
const BLACK = '#000000';

const ICON_FONT = 'tinderclone';

const styles = StyleSheet.create({
  filters: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 70,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
  },
  filtersText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13,
  },
});

export default Filters;
