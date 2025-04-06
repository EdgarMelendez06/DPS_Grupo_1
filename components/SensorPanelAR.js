import React, { useState } from 'react';
import { ViroFlexView, ViroText, ViroButton, ViroSpinner } from '@viro-community/react-viro';
import { StyleSheet } from 'react-native';

const SensorPanelAR = ({ 
  sensorData, 
  onUpdate, 
  onToggleModel, 
  isLoading 
}) => {
  const [editMode, setEditMode] = useState(false);
  const [tempInput, setTempInput] = useState(sensorData.temperature.toString());
  const [humidityInput, setHumidityInput] = useState(sensorData.humidity.toString());

  const handleUpdate = () => {
    onUpdate({
      temperature: parseFloat(tempInput),
      humidity: parseFloat(humidityInput)
    });
    setEditMode(false);
  };

  return (
    <ViroFlexView
      position={[0, 0.5, -1.5]}
      width={1.5}
      height={1}
      style={styles.panelContainer}
      rotation={[0, 0, 0]}
    >
      {isLoading ? (
        <ViroFlexView style={styles.loadingContainer}>
          <ViroSpinner type="Dark" />
          <ViroText text="Actualizando..." style={styles.loadingText} />
        </ViroFlexView>
      ) : (
        <>
          <ViroText
            text={`Sensor: ${sensorData.name}`}
            style={styles.sensorTitle}
            position={[0, 0.4, 0]}
          />
          
          <ViroText
            text={`Ubicación: ${sensorData.location}`}
            style={styles.locationText}
            position={[0, 0.2, 0]}
          />

          {editMode ? (
            <>
              <ViroFlexView style={styles.inputContainer} position={[0, -0.1, 0]}>
                <ViroText
                  text={`Temperatura: ${tempInput}°C`}
                  style={styles.editableText}
                  onClick={() => {
                    const newTemp = prompt("Ingrese nueva temperatura:", tempInput);
                    if (newTemp !== null) setTempInput(newTemp);
                  }}
                />
              </ViroFlexView>

              <ViroFlexView style={styles.inputContainer} position={[0, -0.3, 0]}>
                <ViroText
                  text={`Humedad: ${humidityInput}%`}
                  style={styles.editableText}
                  onClick={() => {
                    const newHumidity = prompt("Ingrese nueva humedad:", humidityInput);
                    if (newHumidity !== null) setHumidityInput(newHumidity);
                  }}
                />
              </ViroFlexView>

              <ViroButton
                source={require('../assets/icons/save.png')}
                gazeSource={require('../assets/icons/save.png')}
                position={[0, -0.5, 0]}
                width={0.3}
                height={0.1}
                onClick={handleUpdate}
                text="Guardar"
                textStyle={styles.buttonText}
                style={styles.saveButton}
              />
            </>
          ) : (
            <>
              <ViroText
                text={`Temperatura: ${sensorData.temperature}°C`}
                style={sensorData.temperature > 25 ? styles.warningText : styles.normalText}
                position={[0, -0.1, 0]}
              />

              <ViroText
                text={`Humedad: ${sensorData.humidity}%`}
                style={sensorData.humidity > 70 ? styles.warningText : styles.normalText}
                position={[0, -0.3, 0]}
              />

              <ViroFlexView style={styles.buttonGroup} position={[0, -0.5, 0]}>
                <ViroButton
                  source={require('../assets/icons/save.png')}
                  gazeSource={require('../assets/icons/save.png')}
                  width={0.3}
                  height={0.1}
                  onClick={() => setEditMode(true)}
                  text="Editar"
                  textStyle={styles.buttonText}
                  style={styles.editButton}
                />

                <ViroButton
                  source={require('../assets/icons/save.png')}
                  gazeSource={require('../assets/icons/save.png')}
                  width={0.3}
                  height={0.1}
                  onClick={onToggleModel}
                  text="Modelo 3D"
                  textStyle={styles.buttonText}
                  style={styles.modelButton}
                />
              </ViroFlexView>
            </>
          )}

          <ViroText
            text={`Últ. actualización: ${new Date(sensorData.lastUpdated).toLocaleTimeString()}`}
            style={styles.updateText}
            position={[0, -0.7, 0]}
          />
        </>
      )}
    </ViroFlexView>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    backgroundColor: 'rgba(30, 60, 90, 0.85)',
    padding: 0.2,
    borderRadius: 0.1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 10,
  },
  sensorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  locationText: {
    fontSize: 16,
    color: '#a0c4ff',
    fontStyle: 'italic',
  },
  normalText: {
    fontSize: 18,
    color: '#ffffff',
  },
  warningText: {
    fontSize: 18,
    color: '#ff6b6b',
    fontWeight: 'bold',
  },
  editableText: {
    fontSize: 18,
    color: '#f8f9fa',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 0.1,
    borderRadius: 0.05,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0.05,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 1,
    paddingHorizontal: 0.1,
  },
  editButton: {
    backgroundColor: 'rgba(13, 110, 253, 0.8)',
    borderRadius: 0.05,
  },
  saveButton: {
    backgroundColor: 'rgba(25, 135, 84, 0.8)',
    borderRadius: 0.05,
  },
  modelButton: {
    backgroundColor: 'rgba(108, 117, 125, 0.8)',
    borderRadius: 0.05,
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
  },
  updateText: {
    fontSize: 12,
    color: '#dee2e6',
    fontStyle: 'italic',
  },
});

export default SensorPanelAR;