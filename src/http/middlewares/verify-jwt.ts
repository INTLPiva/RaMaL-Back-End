import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function verifyJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearerToken = req.headers["authorization"];

  const token = bearerToken?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).send("Sem autorização");
  }

  try {
    const decoded = jwt.verify(token, "ramal");

    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    return res.status(401).send("Sem autorização");
  }
}
