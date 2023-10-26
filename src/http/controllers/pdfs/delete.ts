import { Request, Response } from "express";
import { makeDeletePdfUseCase } from "../../../use-cases/factories/pdfs/makeDeletePdfUseCase";

export async function deletePdf(req: Request, res: Response) {
  const { id } = req.params;
  const deletePdfUseCase = makeDeletePdfUseCase();
  const userId = req.user.id;

  try {
    const response = await deletePdfUseCase.execute(id, userId);

    if (response.pdf) {
      res.status(200).send("PDF Excluído Com Sucesso");
    } else {
      res.status(404).send("PDF Não Encontrado");
    }
  } catch (error) {
    return res.status(400).send();
  }
}
