import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

const Main = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: 'coral',
            borderColor: 'coral',
            opacity: pressed ? 0.3 : 1,
          },
          styles.button,
        ]}>
        <Text style={styles.text}>RUNNER</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: 'teal',
            borderColor: 'teal',
            opacity: pressed ? 0.3 : 1,
          },
          styles.button,
        ]}>
        <Text style={styles.text}>TRACKER</Text>
      </Pressable>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 15,
    margin: 5,
    borderWidth: 3,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
