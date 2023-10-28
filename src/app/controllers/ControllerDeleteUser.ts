import UserService from "../service/UserService.ts";

class ControllerDeleteUser {
  public user: typeof UserService;

  constructor() {
    this.user = UserService;
  }

  public async deleteUser(req: Request): Promise<string | undefined> {
    return this.user.deleteUser(req)
  }
}

export default new ControllerDeleteUser();
