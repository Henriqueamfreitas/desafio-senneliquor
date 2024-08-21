export interface IMedico {
    cd_medico: number, 
    nm_medico: string
}

export interface IMedicoContext {
    medicoList: IMedico[]
}

export interface IMedicoProviderProps {
    children: React.ReactNode
}