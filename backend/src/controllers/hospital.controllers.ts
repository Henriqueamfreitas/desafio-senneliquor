import { Request, Response } from "express";
import { hospitalServices } from "../services";
import { HospitalCreate, HospitalRead, HospitalReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const hospital: HospitalReturn = await hospitalServices.create(req.body);
  return res.status(201).json(hospital);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const hospitals: HospitalRead = await hospitalServices.read();
  return res.status(200).json(hospitals);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.cd_hospital);
  const hospital = await hospitalServices.retrieve(id);

  return res.status(200).json(hospital);
};

export default { create, read, retrieve };