import { env } from "../common/env.config.ts";
import { Status } from "https://deno.land/std@0.204.0/http/http_status.ts";
import { RouteUser } from "./routes/index.ts";
class App {
  constructor() {
    this.init();
  }

  public init() {
    Deno.serve({ port: Number(env.PORT) }, async (req: Request): Promise<Response> => {
      return this.handleRequest(req)
    })
  }

  private async handleRequest(req: Request): Promise<Response> {
    const { pathname } = new URL(req.url);

    if (this.routesMap[pathname]) {
      return this.routesMap[pathname](req);
    } else {
      return new Response('Hello, World!', { status: Status.OK });
    }
  }

  private routesMap: Record<string, (req: Request) => Promise<Response>> = {
    '/getUsers': (req) => this.handleRoute(RouteUser.getUsers, req, Status.OK),
    '/createUser': (req) => this.handleRoute(RouteUser.createUser, req, Status.Created),
    '/findUser': (req) => this.handleRoute(RouteUser.getOneUser, req, Status.OK),
    '/updateUser': (req) => this.handleRoute(RouteUser.updateUser, req, Status.OK),
    '/deleteUser': (req) => this.handleRoute(RouteUser.deleteUser, req, Status.OK),
  };

  private async handleRoute(
    routeFunction: (req: Request) => Promise<string | undefined>,
    req: Request,
    status: number
  ): Promise<Response> {
    const responseText = await routeFunction(req);
    if (responseText !== undefined) {
      return new Response(responseText, { status });
    } else {
      return new Response('Not Found', { status: Status.NotFound });
    }
  }
}

export default new App();
