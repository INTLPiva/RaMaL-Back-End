import { Request, Response } from "express";
import { makeDeleteCaregiverUseCase } from "../../../use-cases/factories/caregivers/makeDeleteCaregiverUseCase";

export async function deleteCaregiver(req: Request, res: Response) {
  const { id } = req.params;
  const deleteCaregiverUseCase = makeDeleteCaregiverUseCase();
  const userId = req.user.id;

  try {
    const response = await deleteCaregiverUseCase.execute(id, userId);

    if (response) {
      res.status(200).send("Cuidador Excluído Com Sucesso");
    } else {
      res.status(404).send("Cuidador Não Encontrado");
    }
  } catch (error) {
    return res.status(400).send();
  }
}
