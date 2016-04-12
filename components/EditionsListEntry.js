import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import EditionPage from './EditionPage.js'
import MockPage from './MockPage.js'

export default class EditionsListEntry extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.editionPage = this.editionPage.bind(this);
  }

  editionPage() {
    this.props.toRoute({
      name: "Edycja " + this.props.year,
      component: EditionPage, // TODO: change to editionsPage
      passProps: this.props
    });
  }

  render(){
    return(
      <Text onPress={this.editionPage}>
        {this.props.year}
      </Text>
    )
  }
}
