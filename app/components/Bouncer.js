import React, {PureComponent} from 'react';
import {Animated, Dimensions} from 'react-native';

const BOUNCE_DURATION = 800;
const ROTATIONS = 2;
const VERTICAL_OFFSET = 200;

class Bouncer extends PureComponent {
  constructor(props) {
    super(props);
    this.bottom = new Animated.Value(this.props.height);
    this.rotationValue = new Animated.Value(0);
    this.scale = new Animated.Value(0);

    this.rotate = this.rotationValue.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    this.state = {
      leftOffset: 0,
    };
  }

  animateBounce = () => {
    Animated.sequence([
      Animated.timing(this.bottom, {
        toValue: -VERTICAL_OFFSET,
        duration: BOUNCE_DURATION / 2,
        useNativeDriver: true,
      }),
      Animated.timing(this.bottom, {
        toValue: this.props.height,
        duration: BOUNCE_DURATION / 2,
        useNativeDriver: true,
      }),
    ]).start();
    this.scale.setValue(1);
    Animated.timing(this.scale, {
      toValue: 0,
      duration: BOUNCE_DURATION / 2,
      delay: BOUNCE_DURATION / 2,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.rotationValue, {
      toValue: 360 * ROTATIONS,
      useNativeDriver: true,
      duration: BOUNCE_DURATION,
    }).start(() => this.rotationValue.setValue(0));
  };

  bounce = () => {
    const randomLeftOffset = Math.random() * Dimensions.get('window').width;
    this.setState({leftOffset: randomLeftOffset}, this.animateBounce);
  };

  render() {
    const style = [
      {
        position: 'absolute',
        bottom: 0,
        left: this.state.leftOffset,
      },
      {transform: [{translateY: this.bottom}, {scale: this.scale}]},
    ];
    return (
      <Animated.View style={style}>
        <Animated.View style={[{transform: [{rotate: this.rotate}]}]}>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    );
  }
}

export default Bouncer;
