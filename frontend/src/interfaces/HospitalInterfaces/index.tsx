export interface IHospital {
    cd_hospital: number, 
    nm_hospital: string, 
    nr_latitude: number, 
    nr_longitude: number
}

export interface IHospitalContext{
    hospitalList: IHospital[],
    chamadosPorHospital: Record<number, number>,
}

export interface IHospitalProviderProps{
    children: React.ReactNode
}