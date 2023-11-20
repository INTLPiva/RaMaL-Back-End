import { CaregiversRepository } from "../../repositories/caregivers-repository";

export class DeleteCaregiverUseCase {
  constructor(private caregiversRepository: CaregiversRepository) {}

  async execute(id: string, userId: string) {
    this.caregiversRepository.delete(id, userId);

    return true;
  }
}
