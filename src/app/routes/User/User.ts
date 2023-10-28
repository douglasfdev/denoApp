import {
  ControllerPostUser,
  ControllerGetAllUsers,
  ControllerGetOneUser,
  ControllerUpdateUser,
  ControllerDeleteUser,
} from '../../controllers/index.ts'

class RouteUser {
  public async getUsers(req: Request): Promise<string | undefined> {
    if (req.method === 'GET') {
      return ControllerGetAllUsers.getUsers();
    }
  }

  public async createUser(req: Request): Promise<string | undefined> {
    if (req.method === 'POST') {
      return ControllerPostUser.createUser(req);
    }
  }

  public async getOneUser(req: Request): Promise<string | undefined > {
    if (req.method === 'GET') {
      return ControllerGetOneUser.getUser(req);
    }
  }

  public async updateUser(req: Request): Promise<string | undefined> {
    if (req.method === 'PUT') {
      return ControllerUpdateUser.updateUser(req);
    }
  }

  public async deleteUser(req: Request): Promise<string | undefined> {
    if (req.method === 'DELETE') {
      return ControllerDeleteUser.deleteUser(req);
    }
  }
};

export default new RouteUser();
