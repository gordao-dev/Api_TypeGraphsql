import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppontmentsResolver } from "./resolvers/appointments-resolver";
import UsersInjections from "./Modules/Users/infra/Injections/UserInjections";
import UsersResolver from "./resolvers/users-resolvers";

async function bootstrap() {
  const usersInjections = new UsersInjections();
  usersInjections.register();

  const schema = await buildSchema({
    resolvers: [AppontmentsResolver, UsersResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`HTTP server running on ${url}`);
}

bootstrap();
