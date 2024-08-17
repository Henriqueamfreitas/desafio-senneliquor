import { NextFunction, Request, Response } from "express";
import { Hospital } from "../entities";
import { hospitalRepositories } from "../repositories";
import { AppError } from "../errors";

export const uniqueHospital = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const nm_hospital: string = req.body.nm_hospital;
  if (!nm_hospital) return next();

  const foundEntity: Hospital | null = await hospitalRepositories.findOneBy({ nm_hospital });
  if (foundEntity) throw new AppError("Hospital Name already exists", 409);

  return next();
};