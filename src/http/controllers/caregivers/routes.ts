import { PrismaCaregiversRepository } from "../../../repositories/prisma/prisma-caregiver-repository";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { create } from "./create";
import { find } from "./find";
import { deleteCaregiver } from "./deleteCaregiver";
import { Router } from "express";

export const caregiverRoutes = Router();

caregiverRoutes.post("/", verifyJWT, create);
caregiverRoutes.get("/:userId", verifyJWT, find);
caregiverRoutes.delete("/:id", verifyJWT, deleteCaregiver);
