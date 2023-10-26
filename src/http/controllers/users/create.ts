import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateUserUseCase } from '../../../use-cases/factories/users/makeCreateUseCase';

export async function create(req: Request, res: Response){
    const createUserBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string()
    });
    
    const { name, email, password } = createUserBodySchema.parse(req.body);

    const createUserUseCase = makeCreateUserUseCase();

    try {
        await createUserUseCase.execute({
            name,
            email,
            password
        });

        return res.status(200).send();
    } catch (error) {
        return res.status(400).send();
    }
};  