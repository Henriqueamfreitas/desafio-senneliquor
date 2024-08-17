import { Request, Response } from "express";
import { medicoServices } from "../services";
import { MedicoCreate, MedicoReturn, MedicoRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const medico: MedicoReturn = await medicoServices.create(req.body);
  return res.status(201).json(medico);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const medicos: MedicoRead = await medicoServices.read();
  return res.status(200).json(medicos);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.cd_medico);
  const medico = await medicoServices.retrieve(id);

  return res.status(200).json(medico);
};

export default { create, read, retrieve };