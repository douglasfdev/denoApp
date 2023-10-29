import sql from "../../../../common/db.config.ts";
import postgres from 'https://deno.land/x/postgresjs/mod.js';
import { FileEntity } from "../../entities/index.ts";

export default new class FileRepository extends FileEntity {
  private query: typeof sql;

  constructor() {
    super();

    this.query = sql;
  }

  public async findAll(): Promise<Array<FileEntity>> {
    return await this.query`
      SELECT * FROM tb_files;
    `;
  }

  public async findById(
      id: number
    ): Promise<postgres.RowList<Array<postgres.Row>>> {
    return await this.query`
      SELECT * FROM files WHERE id = ${id};
    `;
  }

  public async create(
      data: FileEntity
    ): Promise<postgres.RowList<Array<postgres.Row>>> {
    return this.query`
      INSERT INTO tb_file (
        name
      ) VALUES (
        ${data.name}
      );
    `;
  }
}