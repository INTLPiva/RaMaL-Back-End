import { Request, Response } from 'express';
import { makeCreatePdfUseCase } from '../../../use-cases/factories/pdfs/makeCreatePdfUseCase';

export async function create(req: Request, res: Response){

    if(!req.file) {
        return res.status(400)
    }

    const { originalname } = req.file;
    const data = req.file.buffer;
    const userId = req.user.id;

    const createPdfUseCase = makeCreatePdfUseCase();

    try {
        await createPdfUseCase.execute({
            originalname,
            data,
            userId
        });

        return res.status(200).send();
    } catch (error) {
        return res.status(400).send();
    }
};  