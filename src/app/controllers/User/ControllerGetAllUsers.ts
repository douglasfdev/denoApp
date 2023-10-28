import { UserService } from "../../services/index.ts";

class ControllerGetAllUsers {
  public user: typeof UserService;

  constructor() {
    this.user = UserService;
  }

  public async getUsers(): Promise<string | undefined> {
    return this.user.getAllUsers()
  }
}

export default new ControllerGetAllUsers();
