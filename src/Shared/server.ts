import 'dotenv/config';
import 'reflect-metadata';

import path from 'node:path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import UsersResolver from '../Modules/Users/Resolvers/UsersResolver';
import UsersInjections from '../Modules/Users/Injections/UsersInjections';
import CypherInjections from './CypherProvider/CypherInjections';
import AuthInjections from './AuthProvider/AuthInjections';
import RidesInjections from '../Modules/Rides/Injections/RidesInjections';

async function bootstrap(): Promise<void> {
  const authInjections = new AuthInjections();
  authInjections.register();

  const cypherInjections = new CypherInjections();
  cypherInjections.register();

  const usersInjections = new UsersInjections();
  usersInjections.register();

  const ridesInjections = new RidesInjections();
  ridesInjections.register();

  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`HTTP server running on ${url}`);
}

bootstrap();
