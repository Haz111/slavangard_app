
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  ListView
} from 'react-native';

//import DaysData from './DaysData.js';

export default class DaysData extends React.Component {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.

  propTypes: {
    toRoute: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    tmp = require('../assets/days.json');

    this.num = props.num;
    this.day = tmp.days[this.num];

    this._renderRow = this._renderRow.bind(this);
    this._onPress = this._onPress.bind(this);

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    rows = this.day.events.slice();

    this.state = {
	specialMargin : new Animated.Value(0),
	contentOpacity : new Animated.Value(1),
	dataSource : ds.cloneWithRows(rows),
	rows : rows,
	height : 200,
    };
  }

  _onPress(n) {
	if(n == 0) return ;

	Animated.timing(  // Uses easing functions
		this.state.contentOpacity,  // The value to drive
		{toValue: 0, duration: 100}  // Configuration
	).start(() => {
	Animated.timing(  // Uses easing functions
		this.state.specialMargin,  // The value to drive
		{toValue: -180}  // Configuration
	).start(
	() => {
	currentRows = this.state.rows.slice();
	newRows = []

	k = 1;
	for(var i = 0; i < currentRows.length; i++)
		if(currentRows[i].id == n) {
			newRows.push({
				id : 0,
				title : currentRows[i].title,
				description : currentRows[i].description,
				hour : currentRows[i].hour
			});
		} else {
			newRows.push({
				id : k,
				title : currentRows[i].title,
				description : currentRows[i].description,
				hour : currentRows[i].hour
			});
			k++;
		}

	this.setState({
		dataSource : this.state.dataSource.cloneWithRows(newRows),
		rows : newRows,
	});

	Animated.timing(  // Uses easing functions
		this.state.specialMargin,  // The value to drive
		{toValue: 0}  // Configuration
	).start(
	() => {
	Animated.timing(  // Uses easing functions
		this.state.contentOpacity,  // The value to drive
		{toValue: 1, duration: 100}  // Configuration
	).start();
	}
	);
	});});


  }

  _renderRow(rowData) {
	if(0 == rowData.id) {
		return (
			<View>
				<Animated.View style={[styles.titleBackground, {marginBottom : this.state.specialMargin}]}>
					<Text style={styles.title} onPress={() => {this._onPress(rowData.id)}}>{rowData.title}</Text>
				</Animated.View>
				<Animated.View style={[styles.contentBackground, {opacity : this.state.contentOpacity}]}>
					<Text style={styles.content }>{rowData.description}</Text>
				</Animated.View>
			</View>
		);
	} else {
		return (
			<View style={styles.titleBackground} onPress={() => {this._onPress(rowData.id)}}>
				<Text style={styles.title} onPress={() => {this._onPress(rowData.id)}}>{rowData.title}</Text>
			</View>
		);
	}
  }

  render() {
    return (
      <View style={styles.container}>
      	<ListView
		dataSource={this.state.dataSource}
		renderRow={this._renderRow}
	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title : {
    backgroundColor: '#66BBEE',
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 600,
    flex: 1
  },
  titleBackground : {
    backgroundColor: '#66BBEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 10,
    marginBottom: 0,
    width: 2000,
    flex: 1
  },
  content : {
    color : '#111111',
    fontSize: 20,
    margin: 20,
    height: 100
  },
  contentBackground : {
    paddingTop: 20,
    paddingBottom: 20,
    width: 2000,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#5cafec',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
