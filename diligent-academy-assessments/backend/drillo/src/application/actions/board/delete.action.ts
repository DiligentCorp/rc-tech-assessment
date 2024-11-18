import { FastifyReply, FastifyRequest } from "fastify";
import { byIdSchema } from "./schemas";
import { operations } from "../../../openapi-spec/types";
import { DeleteBoard } from "../../use-cases/delete-board";
import { SqliteBoardRepository } from "../../../infrastructure/sqlite/repository/board.repository";
import { z } from "zod";
import { BadRequestError } from "../../../domain/error/bad-request.error";

export async function deleteAction(
  req: FastifyRequest,
  res: FastifyReply
): Promise<void> {
  try {
    const { id } = byIdSchema.parse(req.params);

    const useCase = new DeleteBoard(new SqliteBoardRepository());
    await useCase.onRequest(id);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .send({ error: "Invalid parameters", details: error.errors });
    } else if (error instanceof BadRequestError) {
      res.status(404).send({ error: "Not found" });
    } else {
      res.status(500).send({ error: "Internal server error" });
    }
  }
}
