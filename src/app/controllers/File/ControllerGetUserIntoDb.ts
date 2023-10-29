import { FileService } from '../../services/index.ts';

class ControllerGetUserIntoDb {
  public file: typeof FileService

  constructor() {
    this.file = FileService;
  }

  public async getUser(req: Request) {
    return this.file.listOneUser(req);
  }
}

export default new ControllerGetUserIntoDb();
