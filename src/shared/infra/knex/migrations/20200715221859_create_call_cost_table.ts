import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("call_cost", (table) => {
    table.integer("origin", 3).notNullable();
    table.integer("destiny", 3).notNullable();
    table.float("price").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("call_cost");
}
