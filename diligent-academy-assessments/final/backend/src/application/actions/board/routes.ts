import { FastifyInstance } from "fastify";
import { getAllAction } from "./get-all.action";
import { getAction } from "./get.action";
import { createAction } from "./create.action";
import { updateAction } from "./update.action";
import { deleteAction } from "./delete.action";

export default async function (fastify: FastifyInstance) {
  fastify.get("/boards", getAllAction);
  fastify.post("/boards", createAction);
  fastify.get("/boards/:id", getAction);
  fastify.patch("/boards/:id", updateAction);
  fastify.delete("/boards/:id/delete", deleteAction);
}
