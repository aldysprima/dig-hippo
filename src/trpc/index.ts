import { router, publicProcedure } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "Heello world";
  }),
});

export type AppRouter = typeof appRouter;
