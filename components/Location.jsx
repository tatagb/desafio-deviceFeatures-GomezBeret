import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import * as Location from 'expo-location';

export const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No se puede acceder a la ubicación.');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    };

    getLocation();
  }, []);

  return (
    <View>
      <Text>Ubicación:</Text>
      {location ? (
        <Text>
          Latitud: {location.latitude}, Longitud: {location.longitude}
        </Text>
      ) : (
        <Text>Obteniendo ubicación...</Text>
      )}
    </View>
  );
};