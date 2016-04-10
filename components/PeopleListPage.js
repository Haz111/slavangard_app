
import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MockPage from './MockPage.js';
import PeopleListEntry from './PeopleListEntry.js'
// import EditionPage from './EditionPage.js';

import HistoryData from './HistoryData.js';

import Router from 'react-native-simple-router';

export default class PeopleListPage extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  renderPeopleEntries(){
    var people = HistoryData.people;
    return (Object.keys(people).map((key) => {
      return (
        <PeopleListEntry key={key} toRoute={this.props.toRoute} {...people[key]} />
      )
    }));
  }

  render() {
    return (
      <View>
        {this.renderPeopleEntries()}
      </View>
    );
  }
}
