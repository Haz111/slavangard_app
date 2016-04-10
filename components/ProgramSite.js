
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DaySite from './DaySite.js';

export default class IdeaSite extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.day1Page = this.day1Page.bind(this);
    this.day2Page = this.day2Page.bind(this);
    this.day3Page = this.day3Page.bind(this);
    this.day4Page = this.day4Page.bind(this);
  }

  day1Page() {
    this.props.toRoute({
      name: "Czwartek",
      component: DaySite,
      passProps: {num : 1}
    });
  }

  day2Page() {
    this.props.toRoute({
      name: "Piątek",
      component: DaySite,
      passProps: {num : 2}
    });
  }

  day3Page() {
    this.props.toRoute({
      name: "Sobota",
      component: DaySite,
      passProps: {num : 3}
    });
  }

  day4Page() {
    this.props.toRoute({
      name: "Niedziela",
      component: DaySite,
      passProps: {num : 4}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.button} onPress={this.day1Page}>
          Czwartek
        </Text>
        <Text style={styles.button} onPress={this.day2Page}>
          Piątek
        </Text>
        <Text style={styles.button} onPress={this.day3Page}>
          Sobota
        </Text>
        <Text style={styles.button} onPress={this.day4Page}>
          Niedziela
        </Text>
      </View>
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
