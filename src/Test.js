import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const Test = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setCount(x => x + 1);
    setArr(old => [...old, count]);
    console.log(arr.length);
    console.log(count);
  }, [count2]);
  return (
    <View>
      <Button
        onPress={() => setCount2(count2 + 1)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{count2}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
