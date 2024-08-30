import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z from "zod";

const alive: FastifyPluginCallbackZod = async (fastify, _opts) => {
  fastify.route({
    method: "GET",
    url: "/alive",
    handler: async (req, rep) => {
      return "alive";
    },
  });
};

export { alive };
