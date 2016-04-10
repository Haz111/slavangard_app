
import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MockPage from './MockPage.js';
import EditionEntry from './EditionEntry.js';
// import EditionPage from './EditionPage.js';

import HistoryData from './HistoryData.js';

import Router from 'react-native-simple-router';

export default class EditionsListPage extends Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  propTypes: {
    toRoute: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);


    // this.editionPage = this.editionPage.bind(this);
    // this.moviesPage = this.moviesPage.bind(this);
    // this.peoplePage = this.peoplePage.bind(this);
  }

  // editionPage(year) {
  //   this.props.toRoute({
  //     name: "Edition " + year,
  //     component: EditionPage,
  //     passProps: this.props
  //   });
  // }

  renderEditionsEntries(){
    var editions = HistoryData.editions;
    return (Object.keys(editions).map((key) => {
      return (
        <EditionEntry key={key} toRoute={this.props.toRoute} {...editions[key]} />
      )
    }));
  }

  render() {
    return (
      <View>
        {this.renderEditionsEntries()}
      </View>
    );
  }
}
