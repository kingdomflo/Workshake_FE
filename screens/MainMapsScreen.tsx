import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import StoreMarker from '../components/StoreMarker';
import Region from '../models/Region';
import { GetStores } from '../services/store.service';
import Store from '../models/Store';
import { calculateRegionToAskMarker, buildRegion } from '../utils/GenericMethod';
import { useNavigation } from '@react-navigation/native';

export default function MainMapsScreen() {

  // by default, the position of the Cinquantenaire
  const [latitude, setLatitude] = useState(50.840695);
  const [longitude, setLongitude] = useState(4.392909);
  const [region, setRegion] = useState(buildRegion(latitude, longitude));
  const [location, setLocation] = useState(null as any);
  const [stores, setStores] = useState([] as Store[]);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('error with access');
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log('the location', location);
      setLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);

      setRegion(buildRegion(latitude, longitude));
    })();
  }, []);

  // TODO better
  const getMarkersForPosition: any = () => {
    const squareRegion = calculateRegionToAskMarker(region);
    console.log('the zone', squareRegion);
    GetStores(squareRegion).then(response => {
      console.log(response);
      setStores(response.data as Store[]);
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        minZoomLevel={14}
        // See with the backend the change for marker
        onRegionChangeComplete={e => {
          console.log('on region change complete', e);
          getMarkersForPosition();
        }}
        // For proposing new milk shake position
        onLongPress={e => console.log(e.nativeEvent)}
        moveOnMarkerPress={false}
      >
        {stores.map(e => (
          <Marker
            coordinate={{ latitude: e.latitude, longitude: e.longitude }}
            key={e.id}
            onPress={elem => {
              console.log('touch store marker', e);
              navigation.navigate('TabMapsDetailScreen', {
                id: e.id
              });
            }}>
            <StoreMarker store={e} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
