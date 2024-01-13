import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

const Main = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>RUNNER</Text>
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
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 15,
    margin: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
