
import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MockPage from './MockPage.js';
import MoviesListEntry from './MoviesListEntry.js'
// import EditionPage from './EditionPage.js';

import HistoryData from './HistoryData.js';

import Router from 'react-native-simple-router';

export default class MoviesYearListPage extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  renderMoviesEntries(){
    var movies = HistoryData.movies;
    return (Object.keys(movies).map((key) => {
      return (
        movies[key] === this.props.year
        ? <MoviesListEntry key={key} toRoute={this.props.toRoute} {...movies[key]} />
        : null
      )
    }));
  }

  render() {
    return (
      <View>
        {this.renderMoviesEntries()}
      </View>
    );
  }
}
