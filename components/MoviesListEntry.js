import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import EditionPage from './EditionPage.js'
import MoviePage from './MoviePage.js'

export default class MoviesListEntry extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.moviePage = this.moviePage.bind(this);
  }

  moviePage() {
    this.props.toRoute({
      name: this.props.title,
      component: MoviePage,
      passProps: this.props
    });
  }

  render(){
    return(
      <Text onPress={this.moviePage}>
        {this.props.title}
      </Text>
    )
  }
}
