import { Board } from "../../../domain/board.entity";
import { BoardRepository } from "../../../domain/repository/board.repository";
import { CreateBoardProperties } from "../../../shared/types";
import { NoRecordCreated } from "../../error/no-record-created.error";
import { NoRecordFound } from "../../error/no-record-found";
import { NoRecordUpdated } from "../../error/no-record-updated.error";
import { RecordNameInvalid } from "../../error/record-name-invalid.error";
import { db } from "../db";

export class SqliteBoardRepository implements BoardRepository {
  async findAllActive(): Promise<Board[]> {
    const database = await db;
    const boards = await database.all(
      "SELECT * FROM boards WHERE boards.deleted_at IS NULL"
    );

    return boards.map(Board.fromPersistence);
  }

  async getById(id: string): Promise<Board> {
    const database = await db;
    const board = await database.get("SELECT * FROM boards WHERE id = ?", [id]);

    if (!board) {
      throw new NoRecordFound(id);
    }

    return Board.fromPersistence(board);
  }

  async create(properties: CreateBoardProperties): Promise<Board> {
    const database = await db;
    try {
      const created = await database.get(
        "INSERT INTO boards (name, description) VALUES (?, ?) RETURNING *",
        [properties.name.getValue(), properties.description]
      );

      if (created.changes === 0) {
        throw new NoRecordCreated();
      }

      return Board.fromPersistence(created);
    } catch (error) {
      if ((error as { code: string })?.code === "SQLITE_CONSTRAINT") {
        throw new RecordNameInvalid(properties.name.getValue());
      }

      throw error;
    }
  }

  async update(board: Board): Promise<Board> {
    const database = await db;

    try {
      const updated = await database.get(
        "UPDATE boards SET name = ?, description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? RETURNING *",
        [board.name.getValue(), board.description, board.id]
      );

      if (updated.changes === 0) {
        throw new NoRecordUpdated(board.id);
      }

      return Board.fromPersistence(updated);
    } catch (error) {
      if ((error as { code: string })?.code === "SQLITE_CONSTRAINT") {
        throw new RecordNameInvalid(board.name.getValue());
      }

      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    const database = await db;
    const deleted = await database.run(
      "UPDATE boards SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?",
      [id]
    );

    if (deleted.changes === 0) {
      throw new NoRecordUpdated(id);
    }
  }
}
