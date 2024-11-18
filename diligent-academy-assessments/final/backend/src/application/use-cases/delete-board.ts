import { BadRequestError } from "../../domain/error/bad-request.error";
import { BoardRepository } from "../../domain/repository/board.repository";
import { NoRecordUpdated } from "../../infrastructure/error/no-record-updated.error";

export class DeleteBoard {
  constructor(private readonly boardRepository: BoardRepository) {}

  async onRequest(id: string): Promise<void> {
    try {
      await this.boardRepository.delete(id);
    } catch (error) {
      if (error instanceof NoRecordUpdated) {
        throw new BadRequestError(id, "No record deleted");
      }

      throw error;
    }
  }
}
