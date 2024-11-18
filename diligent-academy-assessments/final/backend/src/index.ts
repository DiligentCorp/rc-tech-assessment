import Fastify from "fastify";
import boardRouter from "./application/actions/board/routes";
import { db } from "./infrastructure/sqlite/db";

const fastify = Fastify({ logger: true });

// register routes
fastify.register(boardRouter);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server listening on http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    (await db).close();
    process.exit(1);
  }
};

start();
