
import { createContext, useContext, useEffect, useState } from "react";

export const MapaContext = createContext({} as IMapaContext);

export const MapaProvider = ({ children }: IMapaProviderProps) => {
  // const [hospitalList, setHospitalList] = useState<IMapa[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const { chamadoList } = useContext(ChamadoContext);

  useEffect(() => {
    let map: google.maps.Map;
    const initMap = async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };
    initMap();
  }, []);


  return (
    <MapaContext.Provider
      value={{  }}
    >
      {children}
    </MapaContext.Provider>
  );
};
