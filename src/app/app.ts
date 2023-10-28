import { env } from "../common/env.config.ts";
import { Status } from "https://deno.land/std@0.204.0/http/http_status.ts";
import RouteUser from "./routes/User.ts";

class App {
  public init() {
    Deno.serve({ port: Number(env.PORT) }, async (req: Request): Promise<Response> => {
      return this.routes(req)
    })
  }

  private async routes(req: Request): Promise<Response> {
    if (req.url.includes('getUsers')) {
      return new Response(await RouteUser.getUsers(req), { status: Status.OK });
    } else if (req.url.includes('createUser')) {
      return new Response(await RouteUser.createUser(req), { status: Status.Created });
    } else if (req.url.includes('findUser?id=')) {
      return new Response(await RouteUser.getOneUser(req), { status: Status.OK });
    } else if (req.url.includes('updateUser?id=')) {
      return new Response(await RouteUser.updateUser(req), { status: Status.OK });
    } else if (req.url.includes('deleteUser?id=')) {
      return new Response(await RouteUser.deleteUser(req), { status: 204 });
    } else {
      return new Response('Hello, World!', { status: 200 });
    }
  }
}

export default new App();
