import { CreateBoardProperties } from "../../shared/types";
import { Board } from "../board.entity";

export interface BoardRepository {
  findAllActive(): Promise<Board[]>;
  getById(id: string): Promise<Board>;
  create(board: CreateBoardProperties): Promise<Board>;
  update(board: Board): Promise<Board>;
  delete(id: string): Promise<void>;
}
