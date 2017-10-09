import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider, connect} from 'react-redux'
//import App from './src/App'
import thunkMiddleware from 'redux-thunk'

//import reducers from './src/reducers';
import {createStore, applyMiddleware, combineReducers} from 'redux';

import { addNavigationHelpers,StackNavigator } from 'react-navigation';
//import RootContainer from './src/components/router';

import Names from './src/components/names';
import Record from './src/components/recordname';

import dataReducer from './src/reducers/dataReducer';
import SQLiteReducer from './src/reducers/SQLiteReducer';

const AppNavigator = StackNavigator({
  Name : {
    screen : Names
  },
  Recording : {
    screen : Record
  }
})

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Name'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const AppReducer = combineReducers({
  dataReducer : dataReducer,
  SQLiteReducer : SQLiteReducer,
  nav : navReducer
})



const store = createStore(
  AppReducer,
  applyMiddleware(thunkMiddleware)
)

class App extends React.Component{
  render(){
    return(
      <AppNavigator navigation={addNavigationHelpers({
        dispatch : this.props.dispatch,
        state : this.props.nav
      })}
      />
    )
  }
}
const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);



const ReduxOzer = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

AppRegistry.registerComponent('reactredux', () => ReduxOzer)