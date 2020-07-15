import { Router, request, response } from "express";

const falemaisRouter = Router();

falemaisRouter.post("/", async (request, response) => {
  response.json({ message: "ok" });
});

export default falemaisRouter;
