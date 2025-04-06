import SensorPanelAR from './SensorPanelAR';

// Dentro de tu ARSceneComponent:
<SensorPanelAR
  sensorData={sensorData}
  onUpdate={handleUpdate}
  onToggleModel={() => setShowModel(!showModel)}
  isLoading={isUpdating}
/>