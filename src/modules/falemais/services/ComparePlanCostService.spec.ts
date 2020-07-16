import ComparePlanCostService from "./ComparePlanCostService";
import ICallCostRepository from "../repositories/ICallCostRepository";
import IGetCallCostDTO from "../dtos/IGetCallCostDTO";
import AppError from "@shared/error";

describe("ComparePlanCostService Tests", () => {
  const callCostRepositoryMock: ICallCostRepository = {
    getCallCost: async ({ destiny, origin }: IGetCallCostDTO) => {
      if (destiny !== 11 || origin !== 16) return undefined;
      return { price: 1.5 };
    },
  };

  const comparePlanCostService = new ComparePlanCostService(
    callCostRepositoryMock
  );

  it("Should be able to compare plan costs", async () => {
    const result = await comparePlanCostService.execute({
      destiny: 11,
      origin: 16,
      planType: 30,
      time: 20,
    });

    expect(result).toStrictEqual({
      priceWithPlan: 0,
      priceWithoutPlan: 30,
    });
  });

  it("Should throw an AppError if any of the fileds are missing or zero", async () => {
    expect(
      comparePlanCostService.execute({
        destiny: 11,
        origin: 16,
        planType: 30,
        time: 0,
      })
    ).rejects.toBeInstanceOf(AppError);

    expect(
      comparePlanCostService.execute({
        destiny: 11,
        origin: 16,
        planType: 0,
        time: 20,
      })
    ).rejects.toBeInstanceOf(AppError);
    expect(
      comparePlanCostService.execute({
        destiny: 11,
        origin: 0,
        planType: 30,
        time: 20,
      })
    ).rejects.toBeInstanceOf(AppError);

    expect(
      comparePlanCostService.execute({
        destiny: 0,
        origin: 16,
        planType: 30,
        time: 20,
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should throw an AppError if Origin and Destiny combination are invalid", async () => {
    expect(
      comparePlanCostService.execute({
        destiny: 10,
        origin: 10,
        planType: 30,
        time: 20,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
