export interface IMedico {
    cd_medico: number, 
    nm_medico: string
}

export interface IMedicoContext {
    medicoList: IMedico[],
    isModalOpen: boolean, 
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    medicoPorChamado: Record<number, number>
}

export interface IMedicoProviderProps {
    children: React.ReactNode
}