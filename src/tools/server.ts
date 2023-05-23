import { ApolloServer } from 'apollo-server';
import { dataSource } from './utils';
import { buildSchema } from 'type-graphql';
import { CountryResolver } from '../resolvers/CountryResolver';

async function createServer(): Promise<ApolloServer> {
    await dataSource.initialize();
    const schema = await buildSchema({
        validate: { forbidUnknownValues: false },
        resolvers: [CountryResolver],
    });
    return new ApolloServer({
        schema,
    });
};

export default createServer;