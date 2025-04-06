import axios from 'axios';

const API_URL = '8YhoUjeuyO2YQvABUnhhLLpAc7YixQuG';

// Datos simulados para desarrollo
const mockSensors = {
  'sensor-1': {
    id: 'sensor-1',
    name: 'Sensor Principal',
    temperature: 24.5,
    humidity: 65,
    location: 'Sala de Máquinas A',
    lastUpdated: new Date().toISOString(),
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  'sensor-2': {
    id: 'sensor-2',
    name: 'Sensor Exterior',
    temperature: 22.3,
    humidity: 60,
    location: 'Terraza Norte',
    lastUpdated: new Date().toISOString(),
    coordinates: { lat: 40.7138, lng: -74.0070 }
  }
};

export const fetchAllSensors = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.log('Usando datos simulados - fetchAllSensors');
    return Object.values(mockSensors);
  }
};

export const fetchSensorData = async (sensorId) => {
  try {
    const response = await axios.get(`${API_URL}/${sensorId}`);
    return response.data;
  } catch (error) {
    console.log('Usando datos simulados - fetchSensorData');
    return mockSensors[sensorId] || mockSensors['sensor-1'];
  }
};

export const updateSensorData = async (sensorId, data) => {
  try {
    const response = await axios.put(`${API_URL}/${sensorId}`, data);
    return response.data;
  } catch (error) {
    console.log('Simulando actualización - updateSensorData');
    const updatedSensor = { ...mockSensors[sensorId], ...data, lastUpdated: new Date().toISOString() };
    mockSensors[sensorId] = updatedSensor;
    return updatedSensor;
  }
};