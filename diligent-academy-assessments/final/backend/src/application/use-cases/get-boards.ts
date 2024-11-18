import { Board } from "../../domain/board.entity";
import { BoardRepository } from "../../domain/repository/board.repository";

export class GetBoards {
  constructor(readonly boardRepository: BoardRepository) {}

  async onRequest(): Promise<Board[]> {
    const boards = await this.boardRepository.findAllActive();
    return boards;
  }
}
