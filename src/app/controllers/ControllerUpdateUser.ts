import UserService from "../service/UserService.ts";

class ControllerUpdateUser {
  public user: typeof UserService;

  constructor() {
    this.user = UserService;
  }

  public async updateUser(req: Request): Promise<string | undefined> {
    return this.user.updateUser(req)
  }
}

export default new ControllerUpdateUser();
