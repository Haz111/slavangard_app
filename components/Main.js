
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
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
      <View style={styles.container}>
        <Image
          source={require('../assets/Slavangard_paczka_logo-06.png')}>
        </Image>
        <Text style={styles.button} onPress={this.ideaPage}>
          IDEA
        </Text>
        <Text style={styles.button} onPress={this.historyPage}>
          Historia
        </Text>
        <Text style={styles.button} onPress={this.programPage}>
          Program
        </Text>
        <Text style={styles.button} onPress={this.ideaPage}>
          Wsparcie
        </Text>
        <Text style={styles.button} onPress={this.ideaPage}>
          Organizatorzy
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
        backButtonComponent={BackButton}
        headerStyle={styles.header}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
