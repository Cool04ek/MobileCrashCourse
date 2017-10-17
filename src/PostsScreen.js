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
import renderIf from './utils/utils';

class PostsScreen extends React.PureComponent {

    componentDidMount() {
        actions.getPosts(this.props.item.data.url);
    }

    renderRow({ item }) {
        return (
            <TouchableOpacity
                onPress={() => console.log(item.data.title)}>
                <Text
                    style={styles.item} >
                    {item.data.title}
                </Text>
            </TouchableOpacity>
        );
    }

    exterctKey(item, index) {
        return item.data.id;
    }

    render() {
        return (
            <View style={styles.container}>
                {renderIf(this.props.isLoading, <ActivityIndicator />)}
                <FlatList
                    data={this.props.posts}
                    keyExtractor={this.exterctKey}
                    renderItem={this.renderRow}
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
    },
})

function mapStateToProps(ownProps) {
    return {
        posts: store.getters.getPosts(),
        isLoading: store.getters.isLoading()
    };
}

export default connect(mapStateToProps)(PostsScreen);