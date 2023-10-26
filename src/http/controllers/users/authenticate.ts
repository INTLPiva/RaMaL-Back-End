import { Request, Response } from "express";
import { z } from "zod";
import { makeAuthenticateUseCase } from "../../../use-cases/factories/users/makeAuthenticateUseCase";
import jwt from "jsonwebtoken";

export async function authenticate(req: Request, res: Response) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateBodySchema.parse(req.body);

  try {
    const authenticateUseCase = makeAuthenticateUseCase();

    const { user } = await authenticateUseCase.execute({
      email,
      password,
    });

    const token = jwt.sign({}, "ramal", {
      subject: user.id,
      expiresIn: 50000000,
    });

    return res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Login Invalido",
    });
  }
}
