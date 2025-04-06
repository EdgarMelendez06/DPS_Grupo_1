import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useCameraPermissions } from 'expo-camera';
import ARScene from './components/ARScene';
import SensorList from './components/SensorList';
import { fetchAllSensors } from './services/api';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSensors = async () => {
      const data = await fetchAllSensors();
      setSensors(data);
      setLoading(false);
    };
    loadSensors();
  }, []);

  if (!permission) {
    return <View style={styles.container}><ActivityIndicator size="large" /></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Necesitamos permiso para acceder a la cámara</Text>
        <Button onPress={requestPermission} title="Conceder permiso" />
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Cargando datos de sensores...</Text>
      </View>
    );
  }

  return selectedSensor ? (
    <ARScene 
      sensor={selectedSensor} 
      onBack={() => setSelectedSensor(null)} 
    />
  ) : (
    <SensorList 
      sensors={sensors} 
      onSelectSensor={setSelectedSensor} 
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  }
});