import { hospitalRepositories } from "../repositories"
import { Hospital } from "../entities"
import { HospitalCreate, HospitalReturn } from "../interfaces"
import { hospitalSchemas } from "../schemas"
import { AppError } from "../errors"

const create = async (payload: HospitalCreate): Promise<HospitalReturn> => {
    const hospital: Hospital | null = await hospitalRepositories.create(payload)
    await hospitalRepositories.save(hospital);

    return hospitalSchemas.hospitalReturnSchema.parse(hospital);    
}

const read = async (): Promise<HospitalReturn[]> => {
    const hospitals: Hospital[] = await hospitalRepositories.find();
    return hospitals.map(hospital => hospitalSchemas.hospitalReturnSchema.parse(hospital));
};

const retrieve = async (hospitalId: number): Promise<HospitalReturn> => {
    const hospital = await hospitalRepositories.findOne({
      where: {
        cd_hospital: hospitalId,
      },
    });
  
    if (!hospital) throw new AppError("Hospital not found", 404);
  
    return hospitalSchemas.hospitalReturnSchema.parse(hospital);
  };

export default {create, read, retrieve}