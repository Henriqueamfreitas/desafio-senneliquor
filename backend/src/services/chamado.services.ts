import { chamadoRepositories, hospitalRepositories, medicoRepositories } from "../repositories";
import { Chamado } from "../entities";
import { ChamadoCreate, ChamadoReturn, ChamadoUpdate } from "../interfaces";
import { chamadoSchemas } from "../schemas";
import { AppError } from "../errors";

const create = async (payload: ChamadoCreate): Promise<ChamadoReturn> => {
    const hospital = await hospitalRepositories.findOneBy({ cd_hospital: payload.hospital });
    if (!hospital) throw new AppError("Hospital not found", 404);

    let medico = null
    // const medico = payload.medico
    //     ? await medicoRepositories.findOneBy({ cd_medico: payload.medico })
    //     : null;
    if (payload.medico) {
        const searched_medico = await medicoRepositories.findOneBy({ cd_medico: payload.medico })
        if (!searched_medico) throw new AppError("Medico not found", 404);
    }

    const chamado = chamadoRepositories.create({
        hospital,
        ie_tipo_chamado: payload.ie_tipo_chamado,
        nm_paciente: payload.nm_paciente,
        ie_sexo: payload.ie_sexo,
        ie_status_chamado: payload.ie_status_chamado,
        medico: medico || undefined,
    });

    await chamadoRepositories.save(chamado);
    return chamadoSchemas.chamadoReturnSchema.parse(chamado);
};

const read = async (): Promise<ChamadoReturn[]> => {
    const chamados: Chamado[] = await chamadoRepositories.find({
        relations: ['medico', 'hospital'],
    });
    return chamados.map(chamado => chamadoSchemas.chamadoReturnSchema.parse(chamado));
};

const retrieve = async (chamadoId: number): Promise<ChamadoReturn> => {
    const chamado = await chamadoRepositories.findOne({
        relations: ['medico', 'hospital'],
        where: {
            nr_chamado: chamadoId,
        },
    });

    if (!chamado) throw new AppError("Chamado not found", 404);

    return chamadoSchemas.chamadoReturnSchema.parse(chamado);
};

const patch = async (chamadoId: number, payload: ChamadoUpdate): Promise<ChamadoReturn> => {
    const chamado = await chamadoRepositories.findOne({
        relations: ['medico', 'hospital'],
        where: {
            nr_chamado: chamadoId,
        },
    });
    if (!chamado) throw new AppError("Chamado not found", 404);
    await chamadoRepositories.save({ ...chamado, ...payload });
    const chamado_updated = await chamadoRepositories.findOne({
        relations: ['medico', 'hospital'],
        where: {
            nr_chamado: chamadoId,
        },
    });
    return chamadoSchemas.chamadoReturnSchema.parse(chamado_updated);
}
export default { create, read, retrieve, patch };