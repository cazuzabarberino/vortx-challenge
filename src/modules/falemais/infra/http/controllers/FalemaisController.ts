import { Request, Response } from "express";
import ComparePlanCostService from "@modules/falemais/services/ComparePlanCostService";
import CallCostRepository from "../../knex/CallCostRepository";

export default class FalemaisController {
  public async comparePlanCost(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { origin, destiny, time, planType } = request.body;

    const callCostRepository = new CallCostRepository();
    const comparePlanCostService = new ComparePlanCostService(
      callCostRepository
    );

    const result = await comparePlanCostService.execute({
      origin,
      destiny,
      time,
      planType,
    });

    return response.json(result);
  }
}
