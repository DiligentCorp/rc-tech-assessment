import { Board } from "../../domain/board.entity";
import { BadRequestError } from "../../domain/error/bad-request.error";
import { BoardRepository } from "../../domain/repository/board.repository";
import { NoRecordFound } from "../../infrastructure/error/no-record-found";

export class GetBoardById {
  constructor(readonly boardRepository: BoardRepository) {}

  async onRequest(id: string): Promise<Board> {
    try {
      return await this.boardRepository.getById(id);
    } catch (error) {
      if (error instanceof NoRecordFound) {
        throw new BadRequestError(id, "No record found");
      }

      throw error;
    }
  }
}
