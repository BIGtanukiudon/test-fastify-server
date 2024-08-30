import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z from "zod";

const hello: FastifyPluginCallbackZod = async (fastify, _opts) => {
  fastify.route({
    method: "GET",
    url: "/hello",
    schema: {
      querystring: z.object({
        name: z.string().min(4),
      }),
      response: {
        200: z.object({
          hello: z.string(),
        }),
      },
    },
    handler: (req, rep) => {
      rep.send({ hello: `Hello ${req.query.name}!` });
    },
  });
};

export { hello };
