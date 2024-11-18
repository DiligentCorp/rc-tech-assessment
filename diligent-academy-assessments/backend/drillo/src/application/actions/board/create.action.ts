import { FastifyReply, FastifyRequest } from "fastify";
import { BadRequestError } from "../../../domain/error/bad-request.error";
import { z } from "zod";
import { CreateBoard } from "../../use-cases/create-board";
import { SqliteBoardRepository } from "../../../infrastructure/sqlite/repository/board.repository";
import { createSchema } from "./schemas";
import { operations } from "../../../openapi-spec/types";
import { CreateBoardProperties } from "../../../shared/types";
import { BoardName } from "../../../domain/value-object/board-name";

type RequestBody =
  operations["createBoard"]["requestBody"]["content"]["application/json"];

export async function createAction(
  req: FastifyRequest<{ Body: RequestBody }>,
  res: FastifyReply
): Promise<void> {
  try {
    const { body } = createSchema.parse(req);

    const createProperties: CreateBoardProperties = {
      name: new BoardName(body.name),
      description: body.description,
    };

    const useCase = new CreateBoard(new SqliteBoardRepository());
    const createdBoard = await useCase.onRequest(createProperties);

    return res.status(201).send(createdBoard.toView());
  } catch (error) {
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .send({ error: "Invalid parameters", details: error.errors });
    } else if (error instanceof BadRequestError) {
      res.status(400).send({ error: error.message });
    } else {
      res.status(500).send({ error: "Internal server error" });
    }
  }
}
