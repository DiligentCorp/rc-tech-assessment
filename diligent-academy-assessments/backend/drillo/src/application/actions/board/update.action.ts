import { FastifyReply, FastifyRequest } from "fastify";
import { updateSchema } from "./schemas";
import { UpdateBoard } from "../../use-cases/update.board";
import { SqliteBoardRepository } from "../../../infrastructure/sqlite/repository/board.repository";
import { Board } from "../../../domain/board.entity";
import { BadRequestError } from "../../../domain/error/bad-request.error";
import { z } from "zod";
import { operations } from "../../../openapi-spec/types";
import { BoardName } from "../../../domain/value-object/board-name";

type RequestParams = operations["updateBoard"]["parameters"]["path"]["id"];
type RequestBody =
  operations["updateBoard"]["requestBody"]["content"]["application/json"];
type Request = {
  Params: RequestParams;
  Body: RequestBody;
};

export async function updateAction(
  req: FastifyRequest<Request>,
  res: FastifyReply
): Promise<void> {
  try {
    const { params, body } = updateSchema.parse(req);

    const updateBoard: Board = Board.fromInput({
      id: params.id,
      name: new BoardName(body.name),
      description: body.description,
    });

    const useCase = new UpdateBoard(new SqliteBoardRepository());
    const updatedBoard = await useCase.onRequest(updateBoard);

    return res.status(200).send(updatedBoard.toView());
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
