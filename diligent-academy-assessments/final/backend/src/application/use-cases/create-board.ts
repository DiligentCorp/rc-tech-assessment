import { Board } from "../../domain/board.entity";
import { BadRequestError } from "../../domain/error/bad-request.error";
import { BoardRepository } from "../../domain/repository/board.repository";
import { NoRecordCreated } from "../../infrastructure/error/no-record-created.error";
import { RecordNameInvalid } from "../../infrastructure/error/record-name-invalid.error";
import { CreateBoardProperties } from "../../shared/types";

export class CreateBoard {
  constructor(private readonly boardRepository: BoardRepository) {}

  async onRequest(properties: CreateBoardProperties): Promise<Board> {
    try {
      return await this.boardRepository.create(properties);
    } catch (error) {
      if (error instanceof RecordNameInvalid) {
        throw new BadRequestError(
          properties.name.getValue(),
          "Record name invalid"
        );
      } else if (error instanceof NoRecordCreated) {
        throw new BadRequestError(
          properties.name.getValue(),
          "No record created"
        );
      }

      throw error;
    }
  }
}
