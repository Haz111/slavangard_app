
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MockPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Mock page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
