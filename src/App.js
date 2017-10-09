import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, ListView } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as acts from './actions'
import Names from './components/names';
import Record from './components/recordname';
let styles;
class App extends React.Component {
  componentWillMount() {
    console.log("SELAM FROM APP");
    //this.props.actions.fetchData();
  }
  render() {
    const { data, actions, nameInput } = this.props;
    const { container } = styles
    return (
      <View style={container}>
        <Text>SQLite Redux Examples</Text>
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
  console.log("State : " + JSON.stringify(state.dataReducer));
  console.log("isfetching : " + state.dataReducer.isFetching);
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
)(App)