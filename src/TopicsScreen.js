import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { connect } from 'remx';
import * as store from './store/store';
import * as actions from './store/actions';
import { Navigation } from 'react-native-navigation';
import PostsScreen from './PostsScreen.js'
import renderIf from './utils/utils';
const testIds = require('./testIds');

class TopicsScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    actions.getTopics();
  }

  renderRow({ item, index }) {

    return (
      <TouchableOpacity
        testID={"" + index}
        onPress={() =>
          this.props.navigator.push({
            screen: 'PostsScreen',
            title: item.data.display_name,
            passProps: { item }
          })
        }>
        <Text
          style={styles.item} >
          {item.data.display_name}
        </Text>
      </TouchableOpacity>
    );
  }

  extractKey(item, index) {
    return item.data.id;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading && <ActivityIndicator />}
        <FlatList
          data={this.props.topics}
          keyExtractor={this.extractKey}
          renderItem={this.renderRow}
          testID={testIds.TopicsScreen_List}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

function mapStateToProps(ownProps) {
  return {
    topics: store.getters.getTopics(),
    isLoading: store.getters.isLoading()
  };
}

Navigation.registerComponent('PostsScreen', () => PostsScreen);

export default connect(mapStateToProps)(TopicsScreen);