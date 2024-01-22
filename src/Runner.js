import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ToastAndroid,
  FlatList,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import firestore from '@react-native-firebase/firestore';

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

const Runner = () => {
  const loc = useRef(null);
  const watchID = useRef(null);
  const [locArr, setLocArr] = useState([]);

  useEffect(() => {
    const watchPosition = () => {
      if (requestLocationPermission()) {
        watchID.current = Geolocation.watchPosition(
          position => {
            loc.current = {
              lat: position.coords.latitude,
              long: position.coords.longitude,
            };
            const locations = firestore()
              .collection('Location')
              .doc('Locations');
            locations.set({
              locationList: loc.current,
            });
            setLocArr(old => [...old, loc.current]);
            //console.log('loc Array length', locArr.length);
            ToastAndroid.show('loc update', ToastAndroid.SHORT);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 1000,
            distanceFilter: 50,
          },
        );
      }
    };
    watchPosition();
    return () => {
      console.log('watchID', watchID);
      Geolocation.clearWatch(watchID);
    };
  }, []);

  useEffect(() => {
    console.log('Loc Array : ', locArr);
  }, [locArr]);

  return (
    <View>
      <Text>Runner</Text>
      <Text>{loc.lat}</Text>
      <Text>{loc.long}</Text>
      {locArr && (
        <FlatList
          data={locArr}
          renderItem={({item}) => (
            <View>
              <Text>
                {item.lat} {item.long}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Runner;

const styles = StyleSheet.create({});
