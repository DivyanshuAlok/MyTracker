import {StyleSheet, PermissionsAndroid, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import React, {useEffect, useRef, useState} from 'react';
import MapView from 'react-native-maps';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'MyTracker Location Permission',
        message:
          'MyTracker needs access to your location services ' +
          'for its basic funtionality.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission exist');
      return true;
    } else {
      console.log('Location permission Denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => {
  const [loc, setLoc] = useState(null);
  const watchID = useRef(null);

  //Watch position
  const watchPosition = () => {
    if (requestLocationPermission()) {
      watchID.current = Geolocation.watchPosition(
        position => {
          setLoc(position.coords);
          console.log(
            'loc update',
            position.coords.latitude,
            position.coords.longitude,
          );
          ToastAndroid.show('loc update', ToastAndroid.SHORT);
        },
        error => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 1000,
        },
      );
    }
  };

  useEffect(() => {
    watchPosition();
    return () => {
      console.log('watchID', watchID);
      Geolocation.clearWatch(watchID);
    };
  }, []);

  return (
    <MapView
      initialRegion={{
        latitude: 17.376213,
        longitude: 78.364824,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
      showsUserLocation={true}
      userLocationUpdateInterval={5000}
      showsCompass={true}
      showsMyLocationButton={true}
      style={styles.map}
      // onUserLocationChange={loc => {
      //   console.log('Location change');
      //   //console.log(loc);
      //   //ToastAndroid.show(loc, ToastAndroid.SHORT);
      // }}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
