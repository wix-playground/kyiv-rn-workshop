import React, {Component, Fragment} from 'react';
import {View, Text, ImageBackground, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import Bouncer from '../components/Bouncer';
import Heart from '../components/Heart';

import {fetchUsers} from '../api';

const bouncer = React.createRef();
const bounce = () => bouncer.current.bounce();

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {users: [], loading: false, errorMessage: ''};
  }

  async componentDidMount() {
    this.setState({loading: true});
    fetchUsers()
      .then((users) => this.setState({users, loading: false}))
      .catch((err) => {
        this.setState({errorMessage: err.message, loading: false});
      });
  }

  render() {
    return (
      <Fragment>
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
          <View style={styles.containerHome}>
            <View style={styles.top}>
              <City />
              <Filters />
            </View>
            {this.renderContent()}
          </View>
          <Bouncer ref={bouncer} height={50}>
            <Heart size={50} />
          </Bouncer>
        </ImageBackground>
      </Fragment>
    );
  }

  renderContent = () => {
    const {loading, errorMessage} = this.state;
    if (loading) {
      return this.renderLoading();
    } else if (errorMessage) {
      return this.renderError();
    }
    return this.renderUsers();
  };

  renderUsers = () => {
    const {users} = this.state;
    return (
      <CardStack
        loop={true}
        verticalSwipe={false}
        renderNoMoreCards={() => null}
        ref={(swiper) => (this.swiper = swiper)}
        onSwipedRight={bounce}
        onSwipedLeft={bounce}
      >
        {users.map((item, index) => (
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
    );
  };

  renderLoading = () => {
    const {loading} = this.state;
    return (
      <View style={styles.requestStatusContainer}>
        <ActivityIndicator animating={loading} size="large" />
      </View>
    );
  };

  renderError = () => {
    const {errorMessage} = this.state;
    return (
      <View style={styles.requestStatusContainer}>
        <Text>{errorMessage}</Text>
      </View>
    );
  };
}

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
  containerHome: {marginHorizontal: 10, flex: 1},
  requestStatusContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
