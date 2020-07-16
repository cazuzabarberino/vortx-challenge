import connection from "@shared/infra/knex/connection";
import IGetCallCostDTO from "@modules/falemais/dtos/IGetCallCostDTO";
import ICallCostRepository from "@modules/falemais/repositories/ICallCostRepository";

export default class CallCostRepository implements ICallCostRepository {
  static readonly TABLE_NAME: string = "call_cost";

  public async getCallCost({
    destiny,
    origin,
  }: IGetCallCostDTO): Promise<{ price: number } | undefined> {
    const result = await connection
      .select("price")
      .from(CallCostRepository.TABLE_NAME)
      .where({
        destiny,
        origin,
      });

    return result[0];
  }
}
