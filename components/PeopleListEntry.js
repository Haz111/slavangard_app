import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PersonPage from './PersonPage.js'

export default class PeopleListEntry extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props){
    super(props)
    this.personPage = this.personPage.bind(this);
  }

  personPage() {
    this.props.toRoute({
      name: this.props.name,
      component: PersonPage,
      passProps: this.props
    });
  }

  render(){
    return(
      <Text onPress={this.personPage}>
        {this.props.name}
      </Text>
    )
  }
}
