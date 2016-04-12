import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MoviesListPage from './MoviesListPage.js';

export default class EditionPage extends Component {
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // this.editionsPage = this.editionsPage.bind(this);
    this.moviesPage = this.moviesPage.bind(this);
    // this.peoplePage = this.peoplePage.bind(this);
  }

  moviesPage() {
    this.props.toRoute({
      name: "Filmy",
      component: MoviesListPage,
      passProps: {year: this.props.year}
    });
  }

  returnDescription(){
    return (this.props.description)
    ? (<Text>{this.props.description}</Text>)
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
        <Text onPress={this.moviesPage}>Filmy</Text>
        <Text>Osoby</Text>
        {this.returnPeople()}
      </View>
    )
  }
}
