import React, {Fragment} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo.js';
import Bouncer from '../components/Bouncer';
import Heart from '../components/Heart';

const Home = () => {
  const bouncer = React.createRef();
  const bounce = () => bouncer.current.bounce();
  return (
    <Fragment>
      <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
        <View style={styles.containerHome}>
          <View style={styles.top}>
            <City />
            <Filters />
          </View>

          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            onSwipedRight={bounce}
            onSwipedLeft={bounce}
            ref={(swiper) => (this.swiper = swiper)}
          >
            {Demo.map((item, index) => (
              <Card key={index}>
                <CardItem
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                  actions
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                />
              </Card>
            ))}
          </CardStack>
        </View>
      </ImageBackground>
      <Bouncer ref={bouncer} height={50}>
        <Heart size={50} />
      </Bouncer>
    </Fragment>
  );
};

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerHome: {marginHorizontal: 10},
});

export default Home;
