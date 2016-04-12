
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-page-swiper';
import EditionsListPage from './EditionsListPage.js';
import MoviesListPage from './MoviesListPage.js';
import PeopleListPage from './PeopleListPage.js';

import HistoryData from './HistoryData.js'

export default class HistoryPage extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.editionsPage = this.editionsPage.bind(this);
    this.moviesPage = this.moviesPage.bind(this);
    this.peoplePage = this.peoplePage.bind(this);
  }

  editionsPage() {
    this.props.toRoute({
      name: "Edycje",
      component: EditionsListPage
    });
  }

  moviesPage() {
    this.props.toRoute({
      name: "Filmy",
      component: MoviesListPage,
      passProps: {year: "all"}
    });
  }

  peoplePage() {
    this.props.toRoute({
      name: "Ludzie",
      component: PeopleListPage
    });
  }

  render() {
    return (
      <Swiper style={styles.wrapper}>
       <View style={styles.slideEditions}>
         <Text style={styles.text} onPress={this.editionsPage}>Edycje</Text>
       </View>
       <View style={styles.slideMovies}>
         <Text style={styles.text} onPress={this.moviesPage}>Filmy</Text>
       </View>
       <View style={styles.slidePeople}>
         <Text style={styles.text} onPress={this.peoplePage}>Ludzie</Text>
       </View>
     </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slideEditions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slideMovies: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slidePeople: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
