import { Board } from "../../domain/board.entity";
import { BadRequestError } from "../../domain/error/bad-request.error";
import { BoardRepository } from "../../domain/repository/board.repository";

export class UpdateBoard {
  constructor(private readonly boardRepository: BoardRepository) {}

  async onRequest(board: Board): Promise<Board> {
    try {
      return await this.boardRepository.update(board);
    } catch (error) {
      throw new BadRequestError(board.id, "Board not found");
    }
  }
}
