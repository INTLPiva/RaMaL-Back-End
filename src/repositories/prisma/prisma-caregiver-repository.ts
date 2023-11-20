import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { CaregiversRepository } from "../caregivers-repository";

export class PrismaCaregiversRepository implements CaregiversRepository {
  async create(data: Prisma.CaregiverCreateInput) {
    const caregiver = await prisma.caregiver.create({
      data,
    });

    return caregiver;
  }

  async find(userId: string) {
    const caregiver = await prisma.caregiver.findFirst({
      where: {
        userId: userId,
      },
    });

    return caregiver;
  }

  async delete(id: string) {
    await prisma.caregiver.delete({
      where: {
        id,
      },
    });
  }
}
