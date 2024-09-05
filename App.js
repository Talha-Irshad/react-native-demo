/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { MainNavigator } from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
      <FlashMessage position="top" />
    </Provider>
  );
}


export default App;
