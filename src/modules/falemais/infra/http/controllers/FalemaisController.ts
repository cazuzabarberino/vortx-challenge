import { Request, Response } from "express";

export default class FalemaisController {
  public async calculate(
    request: Request,
    response: Response
  ): Promise<Response> {
    
    return response.json({ message: "ok" });
  }
}
