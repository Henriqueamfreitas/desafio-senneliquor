import { medicoRepositories } from "../repositories"
import { Medico } from "../entities"
import { MedicoCreate, MedicoReturn } from "../interfaces"
import { medicoSchemas } from "../schemas"
import { AppError } from "../errors"

const create = async (payload: MedicoCreate): Promise<MedicoReturn> => {
    const medico: Medico | null = await medicoRepositories.create(payload)
    await medicoRepositories.save(medico);

    return medicoSchemas.medicoReturnSchema.parse(medico);    
}

const read = async (): Promise<MedicoReturn[]> => {
    const medicos: Medico[] = await medicoRepositories.find();
    return medicos.map(medico => medicoSchemas.medicoReturnSchema.parse(medico));
};

const retrieve = async (medicoId: number): Promise<MedicoReturn> => {
    const medico = await medicoRepositories.findOne({
      where: {
        cd_medico: medicoId,
      },
    });
  
    if (!medico) throw new AppError("Medico not found", 404);
  
    return medicoSchemas.medicoReturnSchema.parse(medico);
  };

export default {create, read, retrieve}