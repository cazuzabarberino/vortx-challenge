import IGetCallCostDTO from "../dtos/IGetCallCostDTO";

export default interface ICallCostRepository {
  getCallCost(data: IGetCallCostDTO): Promise<{ price: number }>;
}
