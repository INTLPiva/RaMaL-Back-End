import { Request, Response } from 'express';
import { makeListPdfUseCase } from '../../../use-cases/factories/pdfs/makeListPdfUseCase'

export async function list(req: Request, res: Response){

    const listPdfUseCase = makeListPdfUseCase();
    const userId = req.user.id;

    try {
        const response = await listPdfUseCase.execute(userId);

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).send();
    }
};  