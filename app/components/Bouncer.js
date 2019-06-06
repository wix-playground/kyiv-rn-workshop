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
    this.scale = new Animated.Value(1);

    this.rotate = this.rotationValue.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
    this.state = {
      leftOffset: 0,
    };
  }

  animateVerticalOffset = () =>
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
    ]);

  animateRotation = () =>
    Animated.timing(this.rotationValue, {
      toValue: 360 * ROTATIONS,
      useNativeDriver: true,
      duration: BOUNCE_DURATION,
    });

  animateScale = () =>
    Animated.timing(this.scale, {
      toValue: 0,
      duration: BOUNCE_DURATION / 2,
      delay: BOUNCE_DURATION / 2,
      useNativeDriver: true,
    });

  resetToDefault = () => {
    this.scale.setValue(1);
    this.rotationValue.setValue(0);
  };

  animateBounce = () =>
    Animated.parallel([
      this.animateVerticalOffset(),
      this.animateRotation(),
      this.animateScale(),
    ]).start(this.resetToDefault);

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
      {transform: [{translateY: this.bottom}, {scale: this.scale}, {rotate: this.rotate}]},
    ];
    return <Animated.View style={style}>{this.props.children}</Animated.View>;
  }
}

export default Bouncer;
