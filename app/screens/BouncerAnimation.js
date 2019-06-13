import React, {PureComponent} from 'react';
import {Animated, Dimensions} from 'react-native';

class BouncerAnimation extends PureComponent {
  state = {leftOffset: 0};

  bottom = new Animated.Value(50);

  animateVerticalOffset = () =>
    Animated.sequence([
      Animated.timing(this.bottom, {
        toValue: -200,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(this.bottom, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]);


  //TODO: [Animation] 1. Rotational Animation
  // rotationValue = new Animated.Value(0);
  //
  // rotate = this.rotationValue.interpolate({
  //   inputRange: [0, 360],
  //   outputRange: ['0deg', '360deg'],
  // });
  //
  // animateRotation = () =>
  //   Animated.timing(this.rotationValue, {
  //     toValue: 360 * 2,
  //     useNativeDriver: true,
  //     duration: 800,
  //   });


  //TODO: [Animation] 2. Scale Animation
  // scale = new Animated.Value(1);
  //
  // animateScale = () =>
  //   Animated.timing(this.scale, {
  //     toValue: 0,
  //     duration: 400,
  //     delay: 400,
  //     useNativeDriver: true,
  //   });


  resetToDefault = () => {
    //TODO: [Animation] 1. Rotational Animation
    // this.rotationValue.setValue(0);

    //TODO: [Animation] 2. Scale Animation
    // this.scale.setValue(1);

  };

  animateBounce = () =>
    Animated.parallel([
      this.animateVerticalOffset(),

      //TODO: [Animation] 1. Rotational Animation
      // this.animateRotation(),

      //TODO: [Animation] 2. Scale Animation
      // this.animateScale(),
    ]).start(this.resetToDefault);

  bounce = () => {
    const randomLeftOffset = Math.random() * Dimensions.get('window').width;
    this.setState({leftOffset: randomLeftOffset}, this.animateBounce);
  };

  render() {
    const style = [
      {
        position: 'absolute',
        bottom: -50,
        left: this.state.leftOffset,
      },
      {
        transform: [
          {translateY: this.bottom},
          //TODO: [Animation] 1. Rotational Animation
          // {rotate: this.rotate},

          //TODO: [Animation] 2. Scale Animation
          // {scale: this.scale},
        ],
      },
    ];
    return <Animated.View style={style}>{this.props.children}</Animated.View>;
  }
}

export default BouncerAnimation;
