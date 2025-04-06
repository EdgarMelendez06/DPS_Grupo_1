import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SensorList = ({ sensors, onSelectSensor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensores Ambientales</Text>
      <Text style={styles.subtitle}>Seleccione un sensor para verlo en AR</Text>
      
      <FlatList
        data={sensors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.sensorCard}
            onPress={() => onSelectSensor(item)}
          >
            <Text style={styles.sensorName}>{item.name}</Text>
            <Text style={styles.sensorLocation}>📍 {item.location}</Text>
            <View style={styles.dataRow}>
              <Text style={styles.dataText}>🌡️ {item.temperature}°C</Text>
              <Text style={styles.dataText}>💧 {item.humidity}%</Text>
            </View>
            <Text style={styles.updatedText}>
              Última actualización: {new Date(item.lastUpdated).toLocaleTimeString()}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  sensorCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sensorName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#3498db',
  },
  sensorLocation: {
    color: '#7f8c8d',
    marginBottom: 10,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dataText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  updatedText: {
    fontSize: 12,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
});

export default SensorList;