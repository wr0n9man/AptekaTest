/**
 * @format
 */

import App from './App';
import React from 'react';
import {AppRegistry, Text, TextInput} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {setupStore} from './src/store/store';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const store = setupStore();

const Root = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <App />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
