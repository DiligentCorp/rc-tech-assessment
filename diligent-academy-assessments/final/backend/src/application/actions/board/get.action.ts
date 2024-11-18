import { FastifyReply, FastifyRequest } from "fastify";
import { SqliteBoardRepository } from "../../../infrastructure/sqlite/repository/board.repository";
import { Board } from "../../../domain/board.entity";
import { z } from "zod";
import { BadRequestError } from "../../../domain/error/bad-request.error";
import { GetBoardById } from "../../use-cases/get-board-by-id";
import { byIdSchema } from "./schemas";
import { operations } from "../../../openapi-spec/types";

export async function getAction(
  req: FastifyRequest,
  res: FastifyReply
): Promise<void> {
  try {
    const { id } = byIdSchema.parse(req.params);

    const useCase = new GetBoardById(new SqliteBoardRepository());
    const board = await useCase.onRequest(id);

    return res.status(200).send(board.toView());
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
