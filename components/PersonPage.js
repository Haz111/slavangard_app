import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PersonPage extends Component {
  constructor(props) {
    super(props);
  }

  returnPhoto(){
      return (this.props.photo)
      ? (<Text>{this.props.photo}</Text>)
      : null
  }

  returnDescription(){
    return (this.props.description)
    ? (<Text>{this.props.description}</Text>)
    : null
  }

  render() {
    return(
      <View>
        <Text>Imie: {this.props.name}</Text>
        {this.returnPhoto()}
        <Text>Opis:</Text>
        {this.returnDescription()}
      </View>
    )
  }
}
