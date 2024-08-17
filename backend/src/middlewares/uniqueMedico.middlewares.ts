import { NextFunction, Request, Response } from "express";
import { Medico } from "../entities";
import { medicoRepositories } from "../repositories";
import { AppError } from "../errors";

// O ideal seria ter algum outro campo de validação única (email, por exemplo)
export const uniqueMedico = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const nm_medico: string = req.body.nm_medico;
  if (!nm_medico) return next();

  const foundEntity: Medico | null = await medicoRepositories.findOneBy({ nm_medico });
  if (foundEntity) throw new AppError("Name already exists", 409);

  return next();
};