import { Router } from "express";

import { userRoutes } from "../http/controllers/users/routes";
import { pdfRoutes } from "../http/controllers/pdfs/routes";
import { caregiverRoutes } from "../http/controllers/caregivers/routes";

export const routes = Router();

routes.use("/users", userRoutes);
routes.use("/pdfs", pdfRoutes);
routes.use("/caregivers", caregiverRoutes);
