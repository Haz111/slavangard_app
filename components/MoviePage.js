import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MoviePage extends Component {
  constructor(props) {
    super(props);
  }

  returnYoutube(){
      return (this.props.youtube)
      ? (<Text>{this.props.youtube}</Text>)
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
        <Text>Tytuł: {this.props.title}</Text>
        <Text>Edycja: {this.props.edition}</Text>
        <Text>Rok: {this.props.year}</Text>
        <Text>Youtube:</Text>
        {this.returnYoutube()}
        <Text>Opis:</Text>
        {this.returnDescription()}
      </View>
    )
  }
}
