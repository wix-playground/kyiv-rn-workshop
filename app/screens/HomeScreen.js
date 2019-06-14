import React, {Component, Fragment} from 'react';
import {View, Text, ImageBackground, Dimensions, StyleSheet, ActivityIndicator} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import Bouncer from '../components/Bouncer';
import Heart from '../components/Heart';

import {MatchesContext} from '../matches-context';
import {fetchUsers} from '../api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.bouncer = React.createRef();
    this.bounce = () => this.bouncer.current.bounce();

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
        </ImageBackground>
        <Bouncer ref={this.bouncer} height={50}>
          <Heart size={50} />
        </Bouncer>
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
      <MatchesContext.Consumer>
        {({newMatch}) => (
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            onSwipedRight={this.bounce}
            onSwipedLeft={this.bounce}
            ref={(swiper) => (this.swiper = swiper)}
          >
            {users.map((item, index) => (
              <Card key={index} onSwipedLeft={() => newMatch(item)}>
                <CardItem
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                />
              </Card>
            ))}
          </CardStack>
        )}
      </MatchesContext.Consumer>
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
  containerHome: {
    flex: 1,
    marginHorizontal: 10,
  },
  requestStatusContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
