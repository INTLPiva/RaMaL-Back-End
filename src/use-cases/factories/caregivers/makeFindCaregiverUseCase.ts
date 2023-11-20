import { PrismaCaregiversRepository } from "../../../repositories/prisma/prisma-caregiver-repository";
import { FindCaregiverUseCase } from "../../caregivers/find";

export function makeFindCaregiverUseCase() {
  const caregiversRepository = new PrismaCaregiversRepository();
  const findCaregiverUseCase = new FindCaregiverUseCase(caregiversRepository);

  return findCaregiverUseCase;
}
