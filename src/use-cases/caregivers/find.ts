import { CaregiversRepository } from "../../repositories/caregivers-repository";

export class FindCaregiverUseCase {
  constructor(private caregiversRepository: CaregiversRepository) {}

  async execute(userId: string) {
    const caregiver = this.caregiversRepository.find(userId);

    return caregiver;
  }
}
