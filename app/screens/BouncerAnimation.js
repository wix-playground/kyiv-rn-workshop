import React, {PureComponent} from 'react';
import {Animated, Dimensions} from 'react-native';

class BouncerAnimation extends PureComponent {
  //Vertical Animation
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


  state = {
    leftOffset: 0,
  };

  //TODO: [Animation] Rotational Animation
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
  //     duration: BOUNCE_DURATION,
  //   });


  //TODO: [Animation] Scale Animation
  // scale = new Animated.Value(1);
  //
  // animateScale = () =>
  //   Animated.timing(this.scale, {
  //     toValue: 0,
  //     duration: BOUNCE_DURATION / 2,
  //     delay: BOUNCE_DURATION / 2,
  //     useNativeDriver: true,
  //   });


  resetToDefault = () => {
    //TODO: [Animation] Rotational Animation
    // this.rotationValue.setValue(0);

    //TODO: [Animation] Scale Animation
    // this.scale.setValue(1);

  };

  animateBounce = () =>
    Animated.parallel([
      this.animateVerticalOffset(),

      //TODO: [Animation] Rotational Animation
      // this.animateRotation(),

      //TODO: [Animation] Scale Animation
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
          //TODO: [Animation] Rotational Animation
          // {rotate: this.rotate},

          //TODO: [Animation] Scale Animation
          // {scale: this.scale},
        ],
      },
    ];
    return <Animated.View style={style}>{this.props.children}</Animated.View>;
  }
}

export default BouncerAnimation;
