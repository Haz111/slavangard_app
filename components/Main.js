
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import IdeaSite from './IdeaSite.js'
import ProgramSite from './ProgramSite.js'
import HistoryPage from './HistoryPage.js'
import BackButton from './BackButton.js'

import Router from 'react-native-simple-router';

class Menu extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.ideaPage = this.ideaPage.bind(this);
    this.programPage = this.programPage.bind(this);
    this.historyPage = this.historyPage.bind(this);

    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
  }

  ideaPage() {
    this.props.toRoute({
      name: "Idea",
      component: IdeaSite
    });
  }

  programPage() {
    this.props.toRoute({
      name: "Program",
      component: ProgramSite
    });
  }

  historyPage() {
    this.props.toRoute({
      name: "Historia",
      component: HistoryPage
    });
  }

  render() {
    return (
      <View style={[styles.container, {width : this.width, height : this.height}]}>
        <Image
          style={styles.logo_image}
          source={require('../assets/przezroczysty_slava.png')}>
        </Image>
        <Text style={styles.menuButton} onPress={this.ideaPage}>
          IDEA
        </Text>
        <Text style={styles.menuButton} onPress={this.historyPage}>
          HISTORIA
        </Text>
        <Text style={styles.menuButton} onPress={this.programPage}>
          PROGRAM
        </Text>
        <Text style={styles.menuButton} onPress={this.ideaPage}>
          WSPRACIE
        </Text>
        <Text style={styles.menuButton} onPress={this.ideaPage}>
          ORGANIZATORZY
        </Text>
      </View>
    );
  }
}

const firstRoute =  {
  name: 'Menu',
  component: Menu,
};

export default class SlavangardApp extends Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        handleBackAndroid

        headerStyle={styles.header}
      />
    );
  }
}
// backButtonComponent={BackButton}
const styles = StyleSheet.create({
  menuButton: {
    fontFamily: 'Belta',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    padding: 20
    // backgroundColor: '#111111',
  },
  header: {
    backgroundColor: '#111111',
  },
  container: {
    backgroundColor: '#111111',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    backgroundColor: '#111111',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    backgroundColor: '#111111',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo_image: {
    marginTop : 0,
    flexDirection: 'row',
    flex: 1,
  }
});
