import { Router } from "express";
import falemaisRouter from "@modules/falemais/infra/http/routes/falemais.routes";

const router = Router();

router.use("/falemais", falemaisRouter);

export default router;
