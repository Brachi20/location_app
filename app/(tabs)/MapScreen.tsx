// Map.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Import Location from Expo

export default function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    // Request location permissions and get current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location ? location.coords.latitude : 37.78825, // Default to San Francisco if location not available
        longitude: location ? location.coords.longitude : -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {location && (
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          title={"My Location"}
          description={"This is my current location"}
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
