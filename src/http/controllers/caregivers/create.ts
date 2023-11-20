import { Request, Response } from "express";
import { z } from "zod";
import { makeCreateCaregiverUseCase } from "../../../use-cases/factories/caregivers/makeCreateCaregiverUseCase";

export async function create(req: Request, res: Response) {
  const createCaregiverBodySchema = z.object({
    name: z.string(),
    token: z.string(),
    userId: z.string(),
  });

  const { name, token, userId } = createCaregiverBodySchema.parse(req.body);

  const createGaregiverUseCase = makeCreateCaregiverUseCase();

  try {
    await createGaregiverUseCase.execute({
      name,
      token,
      userId,
    });

    return res.status(200).send();
  } catch (error) {
    return res.status(400).send();
  }
}
