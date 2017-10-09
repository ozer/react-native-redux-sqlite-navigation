import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as acts from '../actions';

let styles;
class Names extends React.Component {
    componentWillMount() {
        console.log("Hey from Names");
    }

    render() {
        const { data, actions } = this.props;
        const { container } = styles;
        return (
            <View style={container}>
                <Text>
                    SELAM
                </Text>
                    <TouchableHighlight onPress={() => actions.fetchData()}>
                        <Text> Fetching </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => actions.insertData()}>
                        <Text> Inserting </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => actions.deleteData()}>
                        <Text> Deleting </Text>
                    </TouchableHighlight>


            </View>
        )
    }
}
styles = StyleSheet.create({
    container: {
        marginTop: 100
    }
})

function mapStateToProps(state) {
    return {
        data: state.dataReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(acts, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Names)