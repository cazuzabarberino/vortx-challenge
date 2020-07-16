import { Router, request, response } from "express";
import FalemaisController from "../controllers/FalemaisController";

const falemaisController = new FalemaisController();
const falemaisRouter = Router();

falemaisRouter.post("/", falemaisController.comparePlanCost);

export default falemaisRouter;
