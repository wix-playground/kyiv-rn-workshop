import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import {Icon as ExpoIcon} from 'expo';
import Icon, {iconsList} from './Icon';

import Colors from '../constants/Colors';

class TabBarIcon extends React.Component {
  static propTypes = {
    focused: PropTypes.bool,
    name: PropTypes.string.isRequired,
  };

  render() {
    const color = this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault;

    if (iconsList[this.props.name]) {
      return (
        <Text style={[styles.iconMenu, {color}]}>
          <Icon name={this.props.name} />
        </Text>
      );
    }

    return (
      <ExpoIcon.Ionicons
        name={this.props.name}
        size={26}
        style={{marginBottom: -3}}
        color={color}
      />
    );
  }
}

const ICON_FONT = 'tinderclone';

const styles = StyleSheet.create({
  iconMenu: {
    fontFamily: ICON_FONT,
    height: 20,
    paddingBottom: 7,
  },
});

export default TabBarIcon;
