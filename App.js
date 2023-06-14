import { StyleSheet, View } from 'react-native';
import { LocationComponent } from './components/Location';
import { CameraComponent } from './components/Camara';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LocationComponent />
      <CameraComponent />
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
});
