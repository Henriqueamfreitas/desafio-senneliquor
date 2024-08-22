import React, { useContext, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { IHospital } from "../../interfaces/HospitalInterfaces";
import { ChamadoContext } from "../../contexts/ChamadoContext";

const mapContainerStyle = {
    height: "400px",
    width: "100%",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

interface ChamadosPorHospital {
    [cd_hospital: number]: number;
}

const getMarkerIcon = (numero_chamados: number) => {
    let color = "blue"; 

    if (numero_chamados > 10) {
        color = "red";  
    } else if (numero_chamados > 5) {
        color = "yellow"; 
    }

    const iconUrl = `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`;
    return iconUrl;
}

export const Mapa: React.FC<{ hospitais: IHospital[] }> = ({ hospitais }) => {
    const [selectedHospital, setSelectedHospital] = useState<IHospital | null>()
    const { chamadoList } = useContext(ChamadoContext);

    const chamadosPorHospital: ChamadosPorHospital = hospitais.reduce((acc, hospital) => {
        acc[hospital.cd_hospital] = 0;
        return acc;
    }, {} as ChamadosPorHospital);

    chamadoList.forEach(chamado => {
        if (chamadosPorHospital.hasOwnProperty(chamado.hospital.cd_hospital)) {
            chamadosPorHospital[chamado.hospital.cd_hospital] += 1;
        }
    });

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDDOFBnPaEVP5k9nM4R5RzBomYe8rTj2w4"
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                {hospitais.map(hospital => {
                    const iconUrl = getMarkerIcon(chamadosPorHospital[hospital.cd_hospital]);
                    return (
                        <Marker
                            key={hospital.cd_hospital}
                            position={{ lat: hospital.nr_latitude, lng: hospital.nr_longitude }}
                            label={hospital.nm_hospital}
                            icon={iconUrl}
                            onClick={() => {
                                setSelectedHospital(hospital)
                            }}
                        />
                    );
                })}
            </GoogleMap>
            <h2>{selectedHospital?.nm_hospital}</h2>
        </LoadScript>
    );
};
