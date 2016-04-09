
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import DaysData from './DaysData.js';

export default class DaySite extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.

  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.num = props.num;
    tmp = require('../assets/days.json');
    this.days = tmp.days;

    // constructiong list

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.button}>
	{this.days[this.num].name}
	Lorem itp;
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
