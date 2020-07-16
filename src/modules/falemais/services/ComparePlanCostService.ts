import ICallCostRepository from "../repositories/ICallCostRepository";
import AppError from "@shared/error";

interface IRequest {
  origin: number;
  destiny: number;
  time: number;
  planType: number;
}

interface IResponse {
  priceWithPlan: number;
  priceWithoutPlan: number;
}

export default class ComparePlanCostService {
  constructor(private callCostRepository: ICallCostRepository) {}

  public async execute({
    origin,
    destiny,
    time,
    planType,
  }: IRequest): Promise<IResponse> {
    if (!origin) throw new AppError(400, "origin is missing or invalid");
    if (!destiny) throw new AppError(400, "destiny is missing or invalid");
    if (!time) throw new AppError(400, "time is missing or invalid");
    if (!planType) throw new AppError(400, "planType is missing or invalid");

    const result = await this.callCostRepository.getCallCost({
      destiny,
      origin,
    });

    // if(!result) throw new AppError(400, )

    const priceWithoutPlan = +(result.price * time).toFixed(2);
    const priceWithPlan = +(
      Math.max(0, time - planType) *
      result.price *
      1.1
    ).toFixed(2);

    return {
      priceWithPlan,
      priceWithoutPlan,
    };
  }
}
