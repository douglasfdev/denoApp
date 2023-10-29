import {
  ControllerCreateFile,
  ControllerDeleteUserIntoDb,
  ControllerGetUserIntoDb,
  ControllerListUsers,
  ControllerUpdateUser,
} from "../../controllers/index.ts";

class RouteFile {
  public async getUsers(req: Request) {
    if (req.method === 'GET') {
      return ControllerListUsers.getUsers();
    }
  }

  public async createFile(req: Request) {
    if (req.method === 'POST') {
      return ControllerCreateFile.createFile(req);
    }
  }

  public async getOneUser(req: Request) {
    if (req.method === 'GET') {
      return ControllerGetUserIntoDb.getUser(req);
    }
  }

  public async updateUser(req: Request) {
    if (req.method === 'PUT') {
      return ControllerUpdateUser.updateUser(req);
    }
  }

  public async deleteUser(req: Request) {
    if (req.method === 'DELETE') {
      return ControllerDeleteUserIntoDb.deleteUser(req);
    }
  }
}

export default new RouteFile();
