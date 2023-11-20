import { Caregiver, Prisma } from "@prisma/client";

export interface CaregiversRepository {
  create(data: Prisma.CaregiverCreateInput): Promise<Caregiver>;
  find(userId: string): Promise<Caregiver | null>;
  delete(id: string, userId: string): void;
}
