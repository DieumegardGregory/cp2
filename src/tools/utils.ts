import { DataSource } from 'typeorm';
import { Country } from '../entities/Country';

export const dataSource = new DataSource({
    type: "sqlite",
    database: "hello-world.sqlite",
    synchronize: true,
    entities: [Country],
})