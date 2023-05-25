import { createTRPCRouter, publicProcedure } from '../trpc';

export const joyaRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.joya.findMany())
})