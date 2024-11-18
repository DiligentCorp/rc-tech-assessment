import { FastifyReply, FastifyRequest } from "fastify";
import { SqliteBoardRepository } from "../../../infrastructure/sqlite/repository/board.repository";
import { Board } from "../../../domain/board.entity";
import { GetBoards } from "../../use-cases/get-boards";

export async function getAllAction(
  req: FastifyRequest,
  res: FastifyReply
): Promise<void> {
  try {
    const useCase = new GetBoards(new SqliteBoardRepository());
    const boards: Board[] = await useCase.onRequest();

    return res.status(200).send(boards.map((board) => board.toView()));
  } catch (error) {
    return res.status(500).send(error);
  }
}
