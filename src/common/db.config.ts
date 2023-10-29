import postgres from "https://deno.land/x/postgresjs/mod.js";
import { env } from "./env.config.ts";

const sql = postgres(`postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`)
export default sql;
