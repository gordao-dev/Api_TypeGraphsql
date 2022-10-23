import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppontmentsResolver } from "./resolvers/appointments-resolver";
import { container } from "tsyringe";
import ICreateUserRepository from "./Modules/Users/Repositories/ICreateUserRepository";
import UsersRepository from "./Modules/Users/Repositories/UsersRepository";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppontmentsResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`HTTP server running on ${url}`);
}

class UsersInjections {
  public register = () => {
    container.registerSingleton<ICreateUserRepository>(
      "UsersRepository",
      UsersRepository
    );
  };
}

export default UsersInjections;

bootstrap();
