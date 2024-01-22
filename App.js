import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './src/Main';
import Runner from './src/Runner';
import Test from './src/Test';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Runner">
        <stack.Screen //
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <stack.Screen //
          name="Runner"
          component={Runner}
        />
        <stack.Screen //
          name="Test"
          component={Test}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
