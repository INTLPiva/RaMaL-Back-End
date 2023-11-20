import { PrismaCaregiversRepository } from "../../../repositories/prisma/prisma-caregiver-repository";
import { DeleteCaregiverUseCase } from "../../caregivers/delete";

export function makeDeleteCaregiverUseCase() {
  const caregiversRepository = new PrismaCaregiversRepository();
  const deleteCaregiverUseCase = new DeleteCaregiverUseCase(
    caregiversRepository
  );

  return deleteCaregiverUseCase;
}
