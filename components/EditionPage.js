import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class EditionPage extends Component {
  constructor(props) {
    super(props);

    // this.editionsPage = this.editionsPage.bind(this);
    // this.moviesPage = this.moviesPage.bind(this);
    // this.peoplePage = this.peoplePage.bind(this);
  }

  returnDescription(){
    return (this.props.description)
    ? (<Text>{this.props.description}</Text>)
    : null
  }

  returnMovies(){
      return (this.props.movies)
      ? (<Text>{this.props.movies}</Text>)
      : null
  }

  returnPeople(){
    return (this.props.people)
    ? (<Text>{this.props.people}</Text>)
    : null
  }

  render() {
    return(
      <View>
        <Text>Opis</Text>
        {this.returnDescription()}
        <Text>Filmy</Text>
        {this.returnMovies()}
        <Text>Osoby</Text>
        {this.returnPeople()}
      </View>
    )
  }
}
