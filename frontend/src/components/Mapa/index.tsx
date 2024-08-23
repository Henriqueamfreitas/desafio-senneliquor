import { useContext, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { IHospital } from '../../interfaces/HospitalInterfaces';
import { HospitalContext } from '../../contexts/HospitalContext';

const mapContainerStyle = {
    height: "55vh",
    width: "100%",
};

const center = {
    lat: -22.8115,  
    lng: -47.1121,  
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
                <>
                <h2>Hospital Selecionado: {selectedHospital.nm_hospital}</h2>
                <p>Número de Chamados: {chamadosPorHospital[selectedHospital.cd_hospital]}</p>
                </>
            )}
        </LoadScript>
    );
};
