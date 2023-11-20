import { CaregiversRepository } from "../../repositories/caregivers-repository";

interface CreateCaregiverUseCaseRequest {
  name: string;
  token: string;
  userId: string;
}

export class CreateCaregiverUseCase {
  constructor(private caregiversRepository: CaregiversRepository) {}

  async execute({ name, token, userId }: CreateCaregiverUseCaseRequest) {
    const data = {
      name,
      token,
      userId,
    };

    const caregiver = this.caregiversRepository.create(data);

    return caregiver;
  }
}
