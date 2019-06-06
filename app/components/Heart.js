import React from 'react';
import Icon from './Icon';
import {Text} from 'react-native';

export default ({size}) => (
  <Text
    style={{
      fontFamily: 'tinderclone',
      color: '#f44336',
      fontSize: size,
    }}
  >
    <Icon name="heart" />
  </Text>
);
