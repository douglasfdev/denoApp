FROM denoland/deno:alpine-1.37.2

EXPOSE 5000

WORKDIR /www/deno/app

USER deno

COPY ./deno.json .

COPY . .

CMD ["deno", "run", "--allow-all", "--config", "deno.json", "src/server.ts"]