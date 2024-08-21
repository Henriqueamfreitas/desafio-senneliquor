import { Request, Response } from "express";
import { chamadoServices } from "../services";
import { ChamadoCreate, ChamadoReturn, ChamadoRead } from "../interfaces";
import { Chamado } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const chamado: ChamadoReturn = await chamadoServices.create(req.body);
    return res.status(201).json(chamado);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const chamados: ChamadoRead = await chamadoServices.read();
    return res.status(200).json(chamados);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.nr_chamado);
    const chamado = await chamadoServices.retrieve(id);

    return res.status(200).json(chamado);
};

const patch = async ( req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.nr_chamado);
    const { body } = req
    const chamado = await chamadoServices.patch(id, body)
  
    return res.status(200).json(chamado)
}

export default { create, read, retrieve, patch };