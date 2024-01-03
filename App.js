import {StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 17.376213,
        longitude: 78.364824,
      }}
      showsUserLocation={true}
      userLocationUpdateInterval={5000}
      showsCompass={true}
      showsMyLocationButton={true}
    />
  );
};

export default App;

const styles = StyleSheet.create({});
