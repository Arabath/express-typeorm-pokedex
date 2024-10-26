import { DataSource } from "typeorm";
import { Pokedex } from "./entity/pokemon.entity";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'pokemon',
  entities: [Pokedex],
  synchronize: false
});
