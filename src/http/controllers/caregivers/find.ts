import { Request, Response } from "express";
import { makeFindCaregiverUseCase } from "../../../use-cases/factories/caregivers/makeFindCaregiverUseCase";

export async function find(req: Request, res: Response) {
  const { userId } = req.params;
  const findCaregiverUseCase = makeFindCaregiverUseCase();

  try {
    const response = await findCaregiverUseCase.execute(userId);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send();
  }
}
