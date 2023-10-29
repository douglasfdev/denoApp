import sql from "../../../../common/db.config.ts";
import postgres from 'https://deno.land/x/postgresjs/mod.js';
import { UserEntity } from "../../entities/index.ts";

export default new class UserRepository extends UserEntity {
  private query: typeof sql;

  constructor() {
    super();

    this.query = sql;
  }

  public async findAll(): Promise<Array<UserEntity>> {
    return this.query`
      SELECT
        id,
        name,
        age,
        sex
      FROM tb_person
      WHERE deleted_at IS NULL;
    `;
  };

  public async findById(id: string): Promise<postgres.RowList<Array<postgres.Row>>> {
    return this.query`
      SELECT
        id,
        name,
        age,
        sex
      FROM tb_person WHERE id = ${id};
    `;
  }

  public async createUsers(data: UserEntity): Promise<postgres.RowList<Array<postgres.Row>>> {
    return this.query`
      INSERT INTO tb_person (
        name,
        age,
        sex
      ) VALUES (
        ${data.name},
        ${data.age},
        ${data.sex}
      );
    `
  }

  public async updateUser(id: string, data: UserEntity) {
    return this.query`
      UPDATE tb_person
      SET
        name = ${data.name},
        age = ${data.age},
        sex = ${data.sex}
      WHERE id = ${id};
    `;
  }

  public async deleteUser(id: string) {
    return this.query`
      UPDATE tb_person
      SET deleted_at = NOW()
      WHERE id = ${id}
    `
  }
}
