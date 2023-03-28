import Fastify from "fastify";

const app = Fastify();

app.get("/", () => ({ hello: "world" }));

app
  .listen({ port: 5000 })
  .then(() => console.log("App running on port 5000"))
  .catch(() => app.close());
