import * as ImagePicker from "expo-image-picker";
import React, { useState } from 'react';
import { View, Alert, Button, Image } from 'react-native';


export const CameraComponent = () => {
  const [image, setImage] = useState(null);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'No se puede acceder a la cámara');
      return;
    }

    const options = {
      mediaType: 'photo',
      allowsEditing: true,
      quality: 1,
    };

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Button title="Sacar Foto" onPress={handleImagePicker} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 10 }} />}
    </View>
  );
};