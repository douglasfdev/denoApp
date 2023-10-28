import ControllerCreateFile from "../../controllers/File/ControllerCreateFile.ts";

class RouteFile {
  public async getFiles(req: Request) {
    if (req.method === 'GET') {
    }
  }

  public async createFile(req: Request) {
    if (req.method === 'POST') {
      return ControllerCreateFile.createFile(req);
    }
  }

  public async getOneFile(req: Request) {
    if (req.method === 'GET') {
    }
  }

  public async updateFile(req: Request) {
    if (req.method === 'PUT') {
    }
  }

  public async deleteFile(req: Request) {
    if (req.method === 'DELETE') {
    }
  }
}

export default new RouteFile();
