import { useContext, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { IHospital } from '../../interfaces/HospitalInterfaces';
import { HospitalContext } from '../../contexts/HospitalContext';
import { MedicoContext } from '../../contexts/MedicoContext';

const mapContainerStyle = {
    height: "400px",
    width: "100%",
};

const center = {
    lat: -23.5505,  
    lng: -46.6333,  
};

const getMarkerIcon = (numero_chamados: number) => {
    let color = 'blue';

    if (numero_chamados > 15) {
        color = 'red';
    } else if (numero_chamados > 10) {
        color = 'yellow';
    }

    const iconUrl = `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`;
    return iconUrl;
}

export const Mapa = () => {
    const [selectedHospital, setSelectedHospital] = useState<IHospital | null>(null);
    const { chamadosPorHospital, hospitalList } = useContext(HospitalContext);
    const { medicoList, medicoPorChamado } = useContext(MedicoContext);

    
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDDOFBnPaEVP5k9nM4R5RzBomYe8rTj2w4"
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                {hospitalList.map(hospital => {
                    const iconUrl = getMarkerIcon(chamadosPorHospital[hospital.cd_hospital]);
                    return (
                        <Marker
                            key={hospital.cd_hospital}
                            position={{ lat: hospital.nr_latitude, lng: hospital.nr_longitude }}
                            label={hospital.nm_hospital}
                            icon={iconUrl}
                            onClick={() => {
                                setSelectedHospital(hospital);
                            }}
                        />
                    );
                })}
            </GoogleMap>
            {selectedHospital && (
                <h2>Hospital Selecionado: {selectedHospital.nm_hospital}</h2>
            )}
            <h2>Chamados por Médico:</h2>
            <ul>
                {medicoList.map(medico => (
                    <li key={medico.cd_medico}>
                        {medico.nm_medico}: {medicoPorChamado[medico.cd_medico]} chamados
                    </li>
                ))}
            </ul>
            <ul>
                {hospitalList.map(hospital => (
                    <li key={hospital.cd_hospital}>
                        {hospital.nm_hospital}: {chamadosPorHospital[hospital.cd_hospital]} chamados
                    </li>
                ))}
            </ul>
        </LoadScript>
    );
};
