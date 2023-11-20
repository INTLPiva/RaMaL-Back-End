import { PrismaCaregiversRepository } from "../../../repositories/prisma/prisma-caregiver-repository";
import { CreateCaregiverUseCase } from "../../caregivers/create";

export function makeCreateCaregiverUseCase() {
  const caregiversRepository = new PrismaCaregiversRepository();
  const createCaregiverUseCase = new CreateCaregiverUseCase(
    caregiversRepository
  );

  return createCaregiverUseCase;
}
