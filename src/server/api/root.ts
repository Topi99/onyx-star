import { createTRPCRouter } from "~/server/api/trpc";
import { joyaRouter } from './routers/joya';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  joya: joyaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
