
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HistoryPage from './HistoryPage.js'
import MockPage from './MockPage.js'

export default class IdeaSite extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.historyPage = this.historyPage.bind(this);
   }

  nextPage() {
    this.props.toRoute({
      name: "Mock",
      component: MockPage
    });
  }

  historyPage() {
    this.props.toRoute({
      name: "Historia",
      component: HistoryPage
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.button}>
          Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum
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
