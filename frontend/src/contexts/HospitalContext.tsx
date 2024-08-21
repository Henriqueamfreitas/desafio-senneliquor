import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IHospital, IHospitalContext, IHospitalProviderProps } from "../interfaces/HospitalInterfaces";

export const HospitalContext = createContext({} as IHospitalContext);

export const HospitalProvider = ({ children }: IHospitalProviderProps) => {
    const [hospitalList, setHospitalList] = useState<IHospital[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem("@senneLiquorTOKEN")
        const getHospital = async () => {
            try {
                setIsLoading(true)
                const response = await api.get("/hospital", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setHospitalList(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        getHospital()
    }, [])


    return (
        <HospitalContext.Provider
            value={{ hospitalList }}
        >
            {children}
        </HospitalContext.Provider>
    )
}

