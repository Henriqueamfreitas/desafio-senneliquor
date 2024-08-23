import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IHospital, IHospitalContext, IHospitalProviderProps } from "../interfaces/HospitalInterfaces";
import { ChamadoContext } from "./ChamadoContext";

export const HospitalContext = createContext({} as IHospitalContext);

export const HospitalProvider = ({ children }: IHospitalProviderProps) => {
    const [hospitalList, setHospitalList] = useState<IHospital[]>([]);
    const { chamadoList } = useContext(ChamadoContext);

    useEffect(() => {
        const token = localStorage.getItem("@senneLiquorTOKEN");
        const getHospital = async () => {
            try {
                const response = await api.get("/hospital", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setHospitalList(response.data);
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        getHospital();
    }, []);

    const chamadosPorHospital: Record<number, number> = hospitalList.reduce((acc, hospital) => {
        acc[hospital.cd_hospital] = 0; 
        return acc;
    }, {} as Record<number, number>);

    chamadoList.forEach(chamado => {
        if (chamadosPorHospital.hasOwnProperty(chamado.hospital.cd_hospital)) {
            chamadosPorHospital[chamado.hospital.cd_hospital] += 1;
        }
    });

    return (
        <HospitalContext.Provider
            value={{ hospitalList, chamadosPorHospital }}
        >
            {children}
        </HospitalContext.Provider>
    );
};
