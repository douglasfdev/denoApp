import { FileService } from "../../services/index.ts";

class ControllerUpdateUserIntoDb {
  public file: typeof FileService

  constructor() {
    this.file = FileService;
  }

  public async updateUserIntoDb(req: Request) {
    return this.file.updateUser(req);
  }
}

export default new ControllerUpdateUserIntoDb();
