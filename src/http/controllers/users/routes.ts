import { PrismaUsersRepository } from "../../../repositories/prisma/prisma-users-repository";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { authenticate } from "./authenticate";
import { create } from "./create";
import { Router } from "express";

export const userRoutes = Router();

userRoutes.post("/", create);
userRoutes.post("/sessions", authenticate);
