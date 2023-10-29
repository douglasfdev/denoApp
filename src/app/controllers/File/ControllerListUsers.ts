import { FileService } from '../../services/index.ts';

class ControllerListUsers {
  private file: typeof FileService;

  constructor() {
    this.file = FileService
  }

  public async getUsers() {
    return this.file.listUsersFromUploadedFile();
  }
}

export default new ControllerListUsers();
