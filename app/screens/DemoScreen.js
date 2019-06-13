import React, {Component, createRef} from 'react';

import {Button, StyleSheet, View, Dimensions} from 'react-native';
import Heart from '../components/Heart';
import BouncerAnimation from './BouncerAnimation';

class Demo extends Component {

  bouncer = createRef();

  onPress = () =>
    this.bouncer.current.bounce();

  render() {
    return <View style={styles.page}>
      <Button title="Bounce" onPress={this.onPress}/>

      <BouncerAnimation ref={this.bouncer}>
        <Heart size={50}/>
      </BouncerAnimation>
    </View>;
  }
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  square: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 50,
    bottom: 0,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default Demo;
