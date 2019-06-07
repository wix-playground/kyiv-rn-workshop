import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import Icon from './Icon';

const Heart = ({size}) => (
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

Heart.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
};

export default Heart;
