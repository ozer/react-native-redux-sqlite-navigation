import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, ListView, TextInput, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as acts from '../actions/actions';

class Record extends React.Component {
    componentWillMount() {
        console.log("Hey from Recording");
    }
    render() {
        const { actions, data, name } = this.props;
        return (
            <View>
                <View>
                    <TextInput
                        placeholder="Özer"
                        style={{ height: 40, borderColor: 'pink', borderWidth: 1 }}
                        onChangeText={
                            (text) => this.name = text
                        }
                        returnKeyType="go"

                    />
                    <TouchableHighlight onPress={() => {
                        actions.getName(this.name)
                    }
                    }>
                        <Text> Save name into SQLite </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.dataReducer,
        name : state.name
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
)(Record)